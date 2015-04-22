module.exports = {
    dist: {
        options: {
            precision: 6,
            sourceComments: false,
            outputStyle: 'compressed'
        },
        files: {
            '<%= path.css %>/saturn-v.css': '<%= path.src %>/main.scss'
        }
    }
};