var express = require('express');
var fs = require('fs');
var router = express.Router();

/*
    1、路径拼接为何是这样的？
 */

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
    var dirArr = __dirname.split("\\");
    dirArr.pop();
    var desFile = dirArr.join("\\") + "/public/uploadimg/" + req.files[0].originalname;
    var response = null;
    console.log(desFile);

    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(desFile, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname,
                };
            }
            res.render('upload', {
                title: '上传文件示例',
                result: JSON.stringify(response),
            });
        });
    });
});

module.exports = router;