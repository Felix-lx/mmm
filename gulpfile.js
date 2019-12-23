const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')
const less = require('gulp-less')

// 默认文件
// gulp.task('default',function(){
// })

// 处理lib文件夹
gulp.task('lib',function(){
    // 读取文件+处理文件pipe()
    return gulp.src('./src/lib/**/*.*').pipe(gulp.dest('./dist/lib'))
})
// 处理less
gulp.task('less',function(){
    return gulp
        .src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
    
})
// 处理js
gulp.task('js',function(){
    return gulp
        .src('./src/js/*.js')
        // 丑化
        .pipe(uglify())
        
        .pipe(gulp.dest('./dist/js'))
    
})