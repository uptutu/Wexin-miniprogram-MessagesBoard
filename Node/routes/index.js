var express = require('express');
var router = express.Router();
var jwt = require('../config/jwt');
let usersValidator = require('../validators/usersValidator');
let usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 留言板首页
router.route('/msg').get(messagesController.index);
// 留言板添加数据
router.route('/msg').post(messagesController.create);


module.exports = router;
