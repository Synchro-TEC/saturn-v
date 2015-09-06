module.exports = {
  sass: {
    files: ['<%= path.src %>/**/*.scss'],
    tasks: ['default']
  },
  assemble: {
    files: ['<%= path.styleGuide %>/**/**/*.html'],
    tasks: ['assembler']
  }
};
