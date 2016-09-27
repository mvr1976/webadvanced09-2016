'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src([
    	'./source/fonts/**/*.*',
    	'./bower_components/font-awesome/fonts/fontawesome-webfont.*'
    	])
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
