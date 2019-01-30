var express = require('express');
var router = express.Router();

/*
    GET
 */
router.get('/', function(req, res) {

    res.render('upload', {
        title: '上传文件示例',
        result: '未上传......',
    });
});

/*
    POST
 */
router.post('/',function(req, res){
    console.log(req.files[0]);  // 上传的文件信息
    console.log(__dirname);
    var response = {
        message:'File uploaded successfully',
        filename: req.files[0].originalname,
    };

    res.render('upload', {
        title: '上传文件示例',
        result: JSON.stringify(response),
    });
});

module.exports = router;