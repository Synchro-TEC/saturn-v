module.exports = {
  publish: {
    command: 'echo '
  },
  copyAssets: {
    command: 'rm -rf documentation/assets && cp -R assets/ documentation/assets'
  }
};
