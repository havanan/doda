<?php
	
	use Gumlet\ImageResize;

	//in ra các thông tin, nếu trống in ra chưa có thông tin
	function printInfo($value){
	    if($value != null) return $value;
	    else return "Chưa có thông tin";
	}

	//in ra username
	function printUsername($value){
	    if($value != null) return $value;
	    else return "Chưa được cấp username";
	}

	//in ra chuyên mục tìm kiếm
	function printSearchCategory($url){
		switch ($url) {
			case 'khoa-hoc': return "Khóa học"; break;
			case 'bai-viet': return "Blog bài viết"; break;
			case 'ho-tro': return "Trang hỗ trợ"; break;
			default: return "Giáo viên"; break;
		}
	}

	// lưu ảnh
    // === ĐẦU VÀO
    // file               :       Input file
    // uploadFolder       :       url của folder sẽ lưu ảnh gốc (thường là upload/xxx/)
    // saveDefaultFolder  :       url của folder sẽ lưu ảnh convert default (thường là cdn/xxx/default/)
    // saveSmallFolder    :       url của folder sẽ lưu ảnh convert small (thường là cdn/xxx/small/)
    // file               :       id của data cần lưu ảnh => phục vụ tạo tên file (VD: user_id)
    // oldImageName       :       tên ảnh cũ đang sử dụng của data cần lưu ảnh => phục vụ xóa file cũ (có thể ko truyền giá trị này)
    // === ĐẦU RA
    // tên file
	function saveImage($file, $uploadFolder, $saveDefaultFolder, $saveSmallFolder, $dataId, $oldImageName = "", $widthDefault = 0, $heightDefault = 0, $widthSmall = 0, $heightSmall = 0) {
        $image = $file;

        $supported_image = array('.gif', '.jpg', '.jpeg', '.png');

        //lấy ra thông tin đuôi file ảnh
        $info = getimagesize($image);
        $extension = strtolower(image_type_to_extension($info[2]));

        //nếu ảnh hợp lệ
        if (in_array($extension, $supported_image)) {
            $date  = new DateTime();
            //tạo tên ảnh theo người dùng và ngày tháng
            $imageName = $date->getTimestamp() ."_". 
                            $dataId * 12345 ."_".
                            substr(md5($date->getTimestamp()), 0, 6).
                            $extension;

            //tạo folder neu chua ton tai
            if (!file_exists($uploadFolder)) mkdir($uploadFolder, 0777, true);

            //copy dữ liệu vào thư mục
            $target = $uploadFolder.$imageName;

            if (!file_exists($target))
                copy($image, $target);

            //kiểm tra upload thành công chưa
            //nếu thành công -> cập nhật
            if (file_exists($target)) {
                // //nếu image khác rỗng
                if ($oldImageName != null && $oldImageName != '') {
                    //xóa ảnh cũ trong cả 2 thư mục upload và render cdn
                    if (file_exists($uploadFolder. $oldImageName)) unlink($uploadFolder. $oldImageName);
                    //kiểm tra tính hợp lệ trước khi xóa ảnh
                    if (file_exists($saveDefaultFolder. $oldImageName)) unlink($saveDefaultFolder. $oldImageName);
                    if (file_exists($saveSmallFolder. $oldImageName)) unlink($saveSmallFolder. $oldImageName);
                }
                //RENDER ẢNH
                //kiểm tra tính tồn tại trong thư mục render
                if (file_exists($saveDefaultFolder.$imageName) != true && file_exists($saveSmallFolder.$imageName) != true) {
                    //kiểm tra đã có trong thư mục upload hay chưa, nếu có mới thực thi
                    if (file_exists($uploadFolder.$imageName) == true) {
                        $image = new ImageResize($uploadFolder.$imageName);
                        $image->quality_jpg = 85;

                        if ($widthDefault != 0 && $heightDefault != 0) {
                            $image->crop($widthDefault, $heightDefault);
                        }
                        $image->save($saveDefaultFolder.$imageName);
                        
                        if ($widthSmall != 0 && $heightSmall != 0) {
                            $image->crop($widthSmall, $heightSmall);
                        }
                        $image->save($saveSmallFolder.$imageName);
                    }
                }
                return $imageName;
            }
            return "";
        }
        return "";
    }

    // trả về tất cả ảnh trong folder có url là $url
    function getImageInFolder($url) {
        $listImages = array_merge(array_merge(array_merge(glob($url."/*.png"), glob($url."/*.jpg")), glob($url."/*.jpeg")), glob($url."/*.gif"));
        return $listImages;
    }
    // Lay tat cac cac anh trong thu muc image ở thư mục ckeditor
    function getAllImageInFolder($dir){
        $result = array(); 
            $cdir = scandir($dir); 
            foreach ($cdir as $key => $value) { 
                if (!in_array($value,array(".","..")) && $value != ".DS_Store") { 
                    if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) { 
                        $result[] = getAllImageInFolder($dir . DIRECTORY_SEPARATOR . $value); 
                    } else { 
                        $result[] = str_replace('\\', '/', $dir.'/'.$value); 
                    } 
                } 
           } 
        return $result; 
    }

    // mã hóa mật khẩu
    function securityEncode($data, $key = '') {         
        $data = md5($data);
        
        if ($key != '')
        {
            $data .= $key;
            $data = md5($data);
        }
        
        $data .= 'c5a15cb929c90063432a18e1d1b2e72e';
        $data = md5($data);
        
        return $data;
    }

    // xác thực mật khẩu cũ
    // Đầu vào:
    //      $pass           : mật khẩu cần xác thực
    //      $email          : email của người dùng
    //      $currentPass    : mật khẩu hiện tại
    function validatePassword($pass, $email, $currentPass) {
        $pass = securityEncode($pass, $email);
        return ($pass === $currentPass);
    }

    // convert string thành không dấu
    function convert_vi_to_en($str) {
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        return $str;
    }

    // hàm in ra ngày giờ thân thiện
    function friendlyTime($time){
        return substr($time, 8, 2)."/". substr($time, 5, 2).'/'.substr($time, 0, 4)." ". substr($time, 11, 5);
    }

?>