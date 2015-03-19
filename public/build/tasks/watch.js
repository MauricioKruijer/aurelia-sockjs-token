var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

var nodemon = require('gulp-nodemon'); //1.0.5
// (Re)start nodejs backend Express app
gulp.task('nodemon', function() {
  nodemon({
    script: '../bin/www',
    watch: ["../bin/www", "../app.js", "../routes/"],
  }).on('restart', function() {
    console.log("NODE BACKEND RESTARTED");
  });
});

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve', 'nodemon'], function() {
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
});