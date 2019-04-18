import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import pkg from './package.json';

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
    autoExternal(),
    peerDepsExternal(),
    localResolve(),
    resolve(),
    commonjs({
      namedExports: {
        './node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement',
          'createContext',
          'forwardRef',
        ],
      },
    }),
    filesize({ showBrotliSize: true }),
  ],
};

export default config;
