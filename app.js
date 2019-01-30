/*
  服务的入口文件（整个项目的运行基础架构，基础的设置）
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path'); // 目录设置时，可使用其方法引用根目录
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var multer  = require('multer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 定义模板搜索路径，__dirname表示当前执行文件的路径
app.set('view engine', 'ejs'); // 设置模板引擎为：EJS

/*
  1、cookieParser("conquer")？
  2、session({ secret: 'conquer'})？
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: '/public/images/'}).array('image')); // dest表示上传的内容缓存在dest指定的目录，array表示该文件的字段名，.fields([{ name: 'xxx', maxCount: xxx }, { name: 'xxx', maxCount: xxx }])表示多文件混合上传
app.use(cookieParser("conquer"));
app.use(session({ secret: 'conquer'}));
app.use(express.static(path.join(__dirname, 'public'))); // 指定静态文件名称是public，请求时若带有具体后缀名，则视为请问文件（静态）资源，直接进入该路径下寻找

/*
  声明要访问的路由
 */
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users.js');
var subform = require('./routes/subform');
var usesession = require('./routes/usesession');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');
var logout = require('./routes/logout');
var upload = require('./routes/upload');

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);
app.use('/logout', logout);
app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
