<?php

//修改下面的常量值定制自己的数据库连接
const LOCALHOST = "YOURHOST";
const USER = 'DATABASE_USERNAME';
const PASSWORD = 'DATABASE_PASSWORD';
const DATABASE = 'DATABASE_NAME';
const PORT = '3306';

//建立数据库连接
$db = mysqli_connect(LOCALHOST, USER, PASSWORD, DATABASE, PORT);
if (!$db) die();
//设置字符集，让获取的数据能显示中文。数据库中存储的数据的数据库字符集设置为 "gbk_chinese_ci" ，不然对中文的显示会有错误
$db->set_charset('utf8');

//因为小程序提交数据的格式是JSON，虽然是用POST方式提交的，但是PHP却不能用$_POST[]数数组获取，因此需要使用特殊的读取方式
$f = file_get_contents("php://input");
//将获取到的JSON数据重新解码成PHP能应用的数据格式
$f = json_decode($f);

//对数据进行安全过滤

//编写过滤规则
$filter = [
    'trim' => function ($item) {return trim($item);},
    'length' => function($item, $length) {return substr($item, 0, $length);},
    'stripTags' => function($item) {return strip_tags($item);},
    'htmlentities' => function($item) {return htmlentities($item);}
];
$assignments = [
    '*' => ['trim'=>NULL, 'stripTags'=>NULL, 'htmlentities'=>NULL],
    'message' => ['length' => 320]
];
//对数据循环使用过滤规则对数据进行过滤
foreach ($f as $field => $item){
    foreach ($assignments['*'] as $key => $option){
        $item = $filter[$key]($item, $option);
    }
    foreach ($assignments[$field] as $key => $option){
        $item = $filter[$key]($item, $option);
    }
}

//将数据插入数据库
$db->query("INSERT INTO messages values('$f->title','$f->message',NOW()) ");
$db->close();
