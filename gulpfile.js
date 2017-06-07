'use strict';

//引入 gulp 和 nodemon livereload 插件
var gulp       = require('gulp');
var nodemon    = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var sass       = require('gulp-sass');

// 一些文件的路径
var paths = {
    client: [
    'javascripts/**/*.js',
    'stylesheets/**/*.css'
    ],
    server: {
        index: 'bin/www'
    }
};

// nodemon 的配置
var nodemonConfig = {
    script : paths.server.index,
    ignore : [
        "tmp/**",
        "public/**",
        "views/**"
    ],
    env    : {
        "NODE_ENV": "development"
    }
};

// 使用 nodemone 跑起服务器
gulp.task('serve', ['livereload'], function() {
    return nodemon(nodemonConfig);
});


// 当客户端被监听的文件改变时，刷新浏览器
gulp.task('livereload', function() {
    livereload.listen();
    var server = livereload();
    return gulp.watch(paths.client, function(event) {
        server.changed(event.path);
    });
});

gulp.task('sass',function(){
    return gulp.src('./public/sass/*.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(gulp.dest('./public/stylesheets/'));
})

gulp.task('watch',function(){
    gulp.watch('./public/sass/*.scss',['sass']);
})

// develop 任务， 同时开启 serve、livereload 任务
gulp.task('develop', ['serve', 'livereload','sass','watch']);