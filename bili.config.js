module.exports = {
  input: './src/index.js',
  bundleNodeModules: true,
  output: {
    format: ['umd'],
    target: 'browser',
    moduleName: 'OpertorOverload'
  },
  plugins: {
    'node-polyfills': {},
  },
}
