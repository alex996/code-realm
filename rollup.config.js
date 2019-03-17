import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy-glob'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const dest = 'build'
const dev = process.env.ROLLUP_WATCH
const prod = !dev

export default {
  input: 'src/index.js',
  output: {
    file: `${dest}/bundle.js`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: `${dest}/style.css`,
      minimize: prod
    }),
    copy([{ files: 'index.html', dest }], { watch: dev }),
    dev &&
      serve({
        open: true,
        port: 3000,
        contentBase: dest,
        historyApiFallback: true
      }),
    dev && livereload(),
    prod && terser()
  ]
}
