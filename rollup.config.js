import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import { browser, main, module } from './package.json';

const globals = { react: 'React', 'react-dom': 'ReactDOM', 'prop-types': 'PropTypes', 'styled-components': 'styled' };

export default {
  input: 'src/index.js',
  output: [
    {
      file: browser,
      format: 'umd',
      name: 'uikit',
      globals,
    },
    {
      file: main,
      format: 'cjs',
    },
    {
      file: module,
      format: 'es',
    },
  ],
  external: Object.keys(globals),
  plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
};
