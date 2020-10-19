import path from 'path';
import { terser } from 'rollup-plugin-terser';

const prod = process.env.NODE_ENV === 'production';

const srcPath = path.join(__dirname, 'src/client');
const distPath = path.join(__dirname, 'dist/build');

export default {
  input: path.join(srcPath, 'main.js'),
  output: {
    format: 'iife',
    name: 'main',
    file: path.join(distPath, 'main.js'),
  },
  plugins: [prod && terser()],
};
