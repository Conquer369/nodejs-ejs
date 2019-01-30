var express = require('express');
var router = express.Router();

/*
    1、表单请求会刷新页面？
    2、bodyParser（json、urlencoded、multipart）分别做什么的？
 */

/*
    GET
 */
router.get('/', function(req, res) {
    /*
        req.query 用来接收GET方式提交参数
        req.param 用来接收GTE或POST方式提交参数
     */
    var userName = req.query.txtUserName,
        userPwd = req.query.txtUserPwd,
        userName2 = req.param('txtUserName'),
        userPwd2 = req.param('txtUserPwd');

    console.log('req.query用户名:'+ userName);
    console.log('req.query密码:'+ userPwd);
    console.log('req.param用户名:'+ userName2);
    console.log('req.param密码:'+ userPwd2);

    res.render('subform', { title: 'get提交表单及接收参数示例' });
});

/*
    POST
 */
router.post('/',function(req, res){
    /*
        req.body 用来接收POST方式提交参数
        req.param 用来接收GTE或POST方式提交参数
     */
    var userName = req.body.txtUserName,
        userPwd = req.body.txtUserPwd,
        userName2 = req.param('txtUserName'),
        userPwd2 = req.param('txtUserPwd');

    console.log('req.body用户名:'+ userName);
    console.log('req.body密码:'+ userPwd);
    console.log('req.param用户名:'+ userName2);
    console.log('req.param密码:'+ userPwd2);

    res.render('subform', { title: 'post提交表单及接收参数示例' });
});

module.exports = router;