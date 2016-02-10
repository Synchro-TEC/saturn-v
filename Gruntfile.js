'use strict';

module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {
      path: {
        src: 'src',
        css: 'css',
        reports: 'reports'
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.registerTask('default', [
        'sass',
        'parker',
        'postcss',
        'exec:cp'
    ]);

};
