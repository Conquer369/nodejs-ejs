var express = require('express');
var router = express.Router();
/*
    1、关闭浏览器cookie消失？
    2、
 */

/*
    GET
 */
router.get('/', function(req, res) {
    if(req.cookies.islogin)
    {
        console.log('usecookies-cookies:' + req.cookies.islogin);
        req.session.islogin = req.cookies.islogin;
    }

    if(req.session.islogin)
    {
        console.log('usecookies:' + req.session.islogin);
        res.locals.islogin = req.session.islogin;
    }

    res.render('usecookies', { title: '使用cookies示例' });
});

/*
    POST
 */
router.post('/', function(req, res) {
    req.session.islogin = 'success';// 关闭浏览器后会自动删除已设置的sid
    res.locals.islogin = req.session.islogin;

    res.cookie('islogin', 'success', { maxAge: 600000});

    res.render('usecookies', { title: '使用cookies示例' });
});

module.exports = router;