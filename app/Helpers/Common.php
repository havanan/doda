<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;
use stdClass;
use Carbon\Carbon;
use DB;

class Common
{
    protected static $messages;

    /**
     * @param $request
     * @param $type
     * @param $dataMessage
     * @throws \Throwable
     */
    public static function setMessage($request, $type, $dataMessage) {
        if(is_array($dataMessage)){
            static::$messages = static::array_values_recursive($dataMessage);
        }
        else{
            static::$messages = $dataMessage;
        }
        $request->session()->flash('alert-message', view('backend.elements.alert_message')->with([
            'type' => $type,
            'messages' => static::$messages,
        ])->render());
    }

    /**
     * @param $request
     * @return null
     */
    public static function getMessage($request) {
        $message = null;
        if($request->session()->has('alert-message')) {
            $message = $request->session()->get('alert-message');
        }
        return $message;
    }

    /**
     * @param $arr
     * @return array
     */
    public static function array_values_recursive($arr)
    {
        $lst = array();
        foreach( array_keys($arr) as $k ){
            $v = $arr[$k];
            if (is_scalar($v)) {
                $lst[] = $v;
            } elseif (is_array($v)) {
                $lst = array_merge( $lst,
                    static::array_values_recursive($v)
                );
            }
        }
        return $lst;
    }

    /**
     * Json Data for bootstrap table
     * @param $collection
     * @return false|string
     */
    public static function toJson($collection){
        $data = [];
        $total = $collection->total();
        $data['recordsTotal'] = $total;
        $data['recordsFiltered'] = $total;
        $data['lastPage'] = $collection->lastPage();
        $data['perPage'] = $collection->perPage();
        $data['currentPage'] = $collection->currentPage();
        $data['data'] = $collection->items();
        return json_encode($data);
    }

    /**
     * @param $params
     * @param null $table
     * Generate parameter for pagination
     * @return array
     */
    public static function toPagination($params, $table = null){
        $limit = 10;
        $start = 0;
        $sort = "id";
        $order = 'desc';
        $search = null;
        $query = [];

        $query['limit'] = isset($params['limit']) ? $params['limit'] : $limit;

        if(!empty($table)){
            $query['sort'] = $table.".".$sort;
        }
        if (isset($params['search']['value'])) {
            $query['search'] = $params['search']['value'];
        }

        $query['sort'] = isset($params['sort']) ? $params['sort'] : $sort;

        $query['order'] = isset($params['order'][0]['dir']) ? $params['order'][0]['dir'] : $order;



        return $query;
    }

    /**
     * Function: Get file url
     * @param $filename
     * @param $folder
     * @return string
     */
    public static function getFileUrl($filename, $folder, $type){
        $dir = !empty($folder) ? $folder : "";
        $imageType = "default";
        if(in_array($type,IMAGE_TYPE_FOLDER)){
            $imageType = IMAGE_TYPE_FOLDER[$type];
        }
        $url = "cdn/".$dir."/".$imageType. "/". $filename;
        if(!File::exists(public_path(). "/". $url)){
            return false;
        }
        return url($url);
    }

    /**
     * Function: Get file url
     * @param $filename
     * @param $folder
     * @return string
     */
    public static function getImageWithDefaultUrl($filename, $folder, $type){

        $dir = !empty($folder) ? $folder : "";
        if(empty($filename)){
            if($type == IMAGE_DEFAULT_AVATAR_TYPE){
                return url("/assets/img/default-avatar.png");
            }
            return url('assets/img/no_image.png');
        }
        $imageType = "default";
        if(in_array($type,array_flip(IMAGE_TYPE_FOLDER))){
            $imageType = IMAGE_TYPE_FOLDER[$type];
        }
        if($type == IMAGE_ORIGIN_TYPE){
            $url = "upload/".$dir."/". $filename;
            if(File::exists(public_path(). "/". $url)){
                return url($url);
            }
        }
        $url = "cdn/".$dir."/".$imageType. "/". $filename;
        $urlSmall = "cdn/".$dir."/small/". $filename;

        if(File::exists(public_path(). "/". $url)){
            return url($url);
        }elseif (File::exists(public_path(). "/". $urlSmall)){
            return url($urlSmall);
        }
        else{
            if($type == IMAGE_DEFAULT_AVATAR_TYPE){
                return url("/assets/img/default-avatar.png");
            }
            return url('assets/img/no_image.png');
        }

    }
    public static function checkExpiredDayCourseUser($subMenu) {
        $now = Carbon::now();
        $url = str_replace('courses/', '', $subMenu->url);
        $idCourse = DB::table('course')->where('SEOurl', $url)->value('id');
        if ( !empty($idCourse) ) {
            $expiredCourse = DB::table('course_owner')
                ->where([
                    'course_id' => $idCourse,
                    'owner_id' => auth()->id()
                ])->value('expired_day');
            if ( !empty($expiredCourse) && $now->greaterThan(Carbon::createFromFormat('Y-m-d H:i:s', $expiredCourse)) ) {
                return true;
            }
            return false;
        }
    }

    public static function getExpriedDayCourseOwner($subMenu, $listSeoUrl) {
        $expriedDay = '';
        $dayStops = 0;
        if( !empty($listSeoUrl) && in_array($subMenu->url, $listSeoUrl) ) {
            $urlSlug = str_replace('courses/', '', $subMenu->url);
            if( !empty($urlSlug) ) {
                $course = \App\Http\Models\Course::where('SEOurl', $urlSlug)->first();
                $courseOwner = \App\Http\Models\CourseOwner::where([
                    'course_id' => $course->id,
                    'owner_id' => auth()->id()
                ])->first();
                if(!empty($courseOwner->reserve_from) && !empty($courseOwner->reserve_to)) {
                    $revertFrom = Carbon::createFromFormat('Y-m-d H:i:s', $courseOwner->reserve_from);
                    $dayStops = $revertFrom->diffInDays($courseOwner->reserve_to);
                }
                $expriedDay = Carbon::createFromFormat('Y-m-d H:i:s', $courseOwner->expired_day)->addDays($dayStops)->format('Y-m-d');
            }

        }

        return $expriedDay;
    }

    public static function successResponse ($text){
        return json_encode([
            'code' => 500,
            'text' => $text
        ]);
    }

    public static function errorResponse ($text){
        return json_encode([
            'code' => 500,
            'text' => $text
        ]);
    }
}