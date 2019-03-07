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

//从数据库中获取所有的数据（用户留言信息）
$result= $db->query("select * from messages limit 20");

//初始化一个 $message 数组变量,用来存放从数据库中查询的数据
$messages = array();
while($message = $result->fetch_assoc())
    $messages['data'][] = $message;
//养成习惯，关闭数据库
$db->close();

//返回 JSON 格式的数据，将获取到的数据用 json_encode() 函数转化成 JSON 格式，第二个选项是确定返回的JSON数据格式 http://php.net/manual/zh/json.constants.php
echo json_encode($messages, JSON_UNESCAPED_UNICODE);
