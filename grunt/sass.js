module.exports = {
    dist: {
        options: {
            precision: 6,
            sourceComments: false,
            outputStyle: 'compressed',
            style: 'expanded',
            require: 'susy'
        },
        files: {
            '<%= path.css %>/saturn-v.css': '<%= path.src %>/main.scss'
        }
    }
};