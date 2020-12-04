<?php
// API meta code
if (!defined('HTTP_STATUS_SUCCESS')) define('HTTP_STATUS_SUCCESS', 200);
if (!defined('HTTP_STATUS_SUCCESS_NO_CONTENT')) define('HTTP_STATUS_SUCCESS_NO_CONTENT', 204);
if (!defined('HTTP_STATUS_BAD_REQUEST')) define('HTTP_STATUS_BAD_REQUEST', 400);
if (!defined('HTTP_STATUS_UNAUTHORIZED')) define('HTTP_STATUS_UNAUTHORIZED', 401);
if (!defined('HTTP_STATUS_FORBIDDEN')) define('HTTP_STATUS_FORBIDDEN', 403);
if (!defined('HTTP_STATUS_NOT_FOUND')) define('HTTP_STATUS_NOT_FOUND', 404);
if (!defined('HTTP_STATUS_METHOD_NOT_ALLOW')) define('HTTP_STATUS_METHOD_NOT_ALLOW', 405);
if (!defined('HTTP_STATUS_NOT_ACCEPT')) define('HTTP_STATUS_NOT_ACCEPT', 406);
if (!defined('HTTP_STATUS_WRONG_PARAM')) define('HTTP_STATUS_WRONG_PARAM', 412);


// Roles manager modules
if (!defined('ROLES')) define('ROLES', [
  'superadmin' => 0,
  'manager' => 1,
]);
// Sender Type
if (!defined('SENDER_TYPE_ADMIN')) define('SENDER_TYPE_ADMIN','admin');
if (!defined('SENDER_TYPE_USER')) define('SENDER_TYPE_USER','user');

// Status
if (!defined('INACTIVE')) define('INACTIVE', 0);
if (!defined('ACTIVE')) define('ACTIVE', 1);

// Week
if (!defined('WEEKS')) define('WEEKS', [
  '0' => "Monday",
  '1' => "Tuesday",
  '2' => "Wednesday",
  '3' => "Thursday",
  '4' => "Friday",
  '5' => "Saturday",
  '6' => "Sunday",
]);

if (!defined('MONTH')) define('MONTH', [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July ',
	'August',
	'September',
	'October',
	'November',
	'December',
]);

// url user
if (!defined('IMAGES_ANSWER_PATH')) define('IMAGES_ANSWER_PATH', "upload/images_answer/");
if (!defined('API_IMAGES_ANSWER_SMALL')) define('API_IMAGES_ANSWER_SMALL', "../../api/public/cdn/images_answer/small/");
if (!defined('API_IMAGES_ANSWER_DEFAULT')) define('API_IMAGES_ANSWER_DEFAULT', "../../api/public/cdn/images_answer/default/");

if (!defined('STORAGE_URL')) define('STORAGE_URL', "https://api.nihongozin.com/cdn/avatar/default/");
if (!defined('STORAGE_URL_THUMBNAIL')) define('STORAGE_URL_THUMBNAIL', "https://api.nihongozin.com/cdn/avatar/small/");
//url post
if (!defined('POST_URL')) define('POST_URL', "https://api.nihongozin.com/cdn/image/default/");
if (!defined('POST_URL_THUMBNAIL')) define('POST_URL_THUMBNAIL', "https://api.nihongozin.com/cdn/image/small/");
// Paginate
if (!defined('LIMIT_PAGINATE')) {
	define('LIMIT_PAGINATE', [
		10,25,50,100
	]);
}
// Store status
if (!defined('STORE_UNDO')) define('STORE_UNDO',0);
if (!defined('STORE_APPROVE')) define('STORE_APPROVE',1);
if (!defined('STORE_DENY')) define('STORE_DENY',-1);
if (!defined('PRODUCT_EDIT_DELETE')) define('PRODUCT_EDIT_DELETE',3);


// Sender Type
if (!defined('IS_ADMIN')) define('IS_ADMIN',1);
if (!defined('IS_USER')) define('IS_USER',null);

if (!defined('PRODUCT_TYPE')) {
    define('PRODUCT_TYPE', [
        'photo','video','question','product','post'
    ]);
}
if (!defined('USER_TEST_DEVICE')) {
    define('USER_TEST_DEVICE', [
        236,9,
    ]);
}
// Roles manager modules
if (!defined('NOTIFICATION_GROUP_TYPE')) define('NOTIFICATION_GROUP_TYPE', [
    'group' => 0,
    'segment' => 1,
]);
if (!defined('GENDERS')) define('GENDERS', [
    0 => 'Nữ',
    1 => 'Nam',
    2 => 'Khác'
]);
