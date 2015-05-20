'use strict';

module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {
      path: {
        src: 'src',
        assets: 'assets',
        css: 'assets/css',
        dist: 'dist',
        docs: 'docs',
        reports: 'reports'
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.registerTask('default', [
        'sass',
        'parker',
        'autoprefixer'
    ]);

};
