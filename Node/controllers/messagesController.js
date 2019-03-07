let message = require('../models/message');
let jwt = require('../config/jwt');
const {check, validationResult} = require('express-validator/check');
let messagesController = {
    index:
    // [GET]
    // page = 1 整数
        function (req, res) {
            data = {page: ~~req.body.page > 0 ? ~~req.body.page : 1};
            message.index(data, function (err, results) {
                if (err) {
                    // return res.status(500).send({error: "数据错误"});
                    return res.status(500).send({error: err.toString()});
                }
                return res.status(200).send({data: results, page: ~~req.body.page > 0 ? ~~req.body.page : 1});
            })
        },
    create:
    // [POST]
    // message 文本
        function (req, res) {
            data = {
                content: req.body.message,
                name: "Test",
            };
            message.create(data, function (err, results) {
                if (err) return res.status(500).send({msg: "发布留言失败"});
                return res.status(201).send({msg: "发布成功"})
            })

        }
};

module.exports = messagesController;
