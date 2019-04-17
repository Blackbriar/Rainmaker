const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

const config = {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    babel({ exclude: './node_modules' }),
  ],
};

export default config;
