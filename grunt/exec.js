module.exports = {
  publish: {
    command: 'echo `hello`'
  },
  copyAssets: {
    command: 'rm -rf documentation/assets && cp -R assets/ documentation/assets'
  }
};
