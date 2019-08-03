// TODO: see progress on TS in rollup/rollup#2879
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import { html } from './plugins'

const development = process.env.ROLLUP_WATCH

const production = !development

const dist = 'dist'

const extensions = ['.ts', '.tsx']

export default {
  input: 'src/index.tsx',
  output: {
    dir: dist,
    entryFileNames: production ? 'main.[hash].js' : 'main.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve({
      extensions
    }),
    babel({
      extensions,
      exclude: 'node_modules/**'
    }),
    html({
      template: 'index.html',
      attributes: ['defer'],
      minify: production
    }),
    development &&
      serve({
        open: true,
        port: 3000,
        contentBase: dist,
        historyApiFallback: true
      }),
    development &&
      livereload({
        watch: dist
      }),
    production && terser()
  ]
}
