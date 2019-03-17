import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy-glob'
import { terser } from 'rollup-plugin-terser'

const dest = 'build'
const dev = process.env.ROLLUP_WATCH
const prod = !dev

export default {
  input: 'src/index.js',
  output: {
    file: `${dest}/bundle.js`,
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    copy([{ files: 'index.html', dest }], { verbose: true, watch: dev }),
    prod && terser()
  ]
}
