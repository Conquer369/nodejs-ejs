var express = require('express');
var router = express.Router();

/*
    GET
 */
router.get('/', function(req, res) {
    if(req.session.islogin)
    {
        console.log('usesession:' + req.session.islogin);
        res.locals.islogin = req.session.islogin;
    }

    res.render('usesession', { title: '使用session示例' });
});

/*
    POST
 */
router.post('/', function(req, res) {
    req.session.islogin = 'success';// 关闭浏览器后会自动删除已设置的sid
    res.locals.islogin = req.session.islogin;

    res.render('usesession', { title: '使用session示例' });
});

module.exports = router;