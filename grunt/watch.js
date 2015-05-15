module.exports = {
    sass: {
        files: ['<%= path.src %>/**/*.scss'],
        tasks: ['default']
    },
    assemble: {
        files: ['<%= path.docs %>/**/**/*.html'],
        tasks: ['assemble']
    }
};
