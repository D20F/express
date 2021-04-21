var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var multer = require('multer')

/* 挂载静态资源
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 使用  connect-history-api-fallback  中间件来适配history模式
var history = require('connect-history-api-fallback');
app.use(history());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(path.join(__dirname, 'dist')));
*/


app.post('/upload', multer({
    dest: __dirname
}).any(), (req, res) => {
    console.log(req.files)
    // console.log(res)
    // 循环解决多个文件
    for (const file of req.files) {


        // console.log('field: ' + file.fieldname);
        // console.log('filename: ' + file.filename);
        // console.log('encoding: ' + file.encoding);
        // console.log('mime: ' + file.mime);
        // console.log('tmp filepath: ' + file.filepath);

        // 修改进制名储存
        const extname = file.filename + path.extname(file.originalname)
        const filepath = file.path;
        const filename = file.destination + "/" + extname
        fs.renameSync(filepath, filename, err => {
            if (err) {console.error(err)}
        })

        /* 读写文件存储
         // 读取文件
         let data = fs.readFileSync(file.path)
         // 写入文件对象 
         fs.writeFileSync(path.join(__dirname, file.originalname), data)
        */
        res.send('success')
        // 删除文件
        // await fs.unlink(file.filepath);


    }

});
app.get('/h', (req, res) => {

    res.send('Hello World!')

});






// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;