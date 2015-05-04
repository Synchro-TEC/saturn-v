// https://github.com/assemble/assemble/
var hljs = require('highlight.js');
//hljs.LANGUAGES['scss'] = require('../node_modules/highlight.js/lib/languages/scss')(hljs);

module.exports = {
    options: {
        marked: {
            highlight: function(code, lang) {
                if (lang === undefined) lang = 'bash';
                if (lang === 'html') lang = 'xml';
                if (lang === 'js') lang = 'javascript';
                return '<div class="code-container">' + hljs.highlight(lang, code).value + '</div>';
            }
        }
    },
    dist: {
        options: {
            flatten: false,
            assets: '<%= path.assets %>',
            data: ['<%= path.docs %>/data/*.json'],
            helpers: ['<%= path.docs %>/helpers/*.js'],
            partials: ['<%= path.docs %>/includes/**/*.{html,scss}'],
            layoutdir: '<%= path.docs %>/layouts',
            layout: 'default.html'
        },
        expand: true,
        cwd: '<%= path.docs %>/pages',
        src: '**/*.{html,md}',
        dest: '<%= path.dist %>/docs/'
    }
};