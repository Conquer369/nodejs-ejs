var express = require('express');
var router = express.Router();

/*
    GET
 */
router.get('/', function(req, res) {
    res.render('logout', { title: '清除session示例' });
});

/*
    POST
 */
router.post('/', function(req, res) {
    //清除cookies
    res.clearCookie('islogin');

    //清除session
    req.session.destroy();

    res.render('logout', { title: '清除session示例' });
});

module.exports = router;