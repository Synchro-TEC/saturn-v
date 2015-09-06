var hljs = require('highlight.js');

module.exports = {
  options: {
    marked: {
      highlight: function(code, lang) {
        if (lang === undefined) lang = 'xml';
        if (lang === 'html') lang = 'xml';
        if (lang === 'js') lang = 'javascript';
        return '<div class="code-container">' + hljs.highlight(lang, code).value + '</div>';
      }
    }
  },
  dist: {
    options: {
      flatten: false,
      assets: '<%= path.docs %>/assets',
      data: ['<%= path.styleGuide %>/data/*.json'],
      helpers: ['<%= path.styleGuide %>/helpers/*.js'],
      partials: ['<%= path.styleGuide %>/includes/**/*.{html,scss}'],
      layoutdir: '<%= path.styleGuide %>/layouts',
      layout: 'default.html'
    },
    expand: true,
    cwd: '<%= path.styleGuide %>/pages',
    src: '**/*.{html,md}',
    dest: '<%= path.docs %>'
  }
};
