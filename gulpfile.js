
require('require-dir')('./gulp');
var gulp = require('gulp');
var seq = require('run-sequence');

/*====================================
=            Default Task            =
====================================*/

gulp.task('default', function(done){
  seq('serve:desktop',  done);
});
