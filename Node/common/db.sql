
-- 留言板
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
`id`           int(11)       NOT NULL AUTO_INCREMENT COMMENT '主键',
`name`         char(80)      NOT NULL DEFAULT ''     COMMENT '名字',
`avatar`       varchar(255)  NOT NULL DEFAULT ''     COMMENT '头像',
`content`      char(255)     NOT NULL DEFAULT ''     COMMENT '内容',
`create_time`  int(10)       NOT NULL DEFAULT 0      COMMENT '写入时间',
`update_time`  int(10)       NOT NULL DEFAULT 0      COMMENT '更新时间',
`delete_time`  int(10)       NOT NULL DEFAULT 0      COMMENT '删除时间',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='留言板';

