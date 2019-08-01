import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import html from 'rollup-plugin-generate-html-template'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const development = process.env.ROLLUP_WATCH

const production = !development

const dist = 'dist'

const extensions = ['.ts', '.tsx']

export default {
  input: 'src/index.tsx',
  output: {
    dir: dist,
    entryFileNames: 'main.[hash].js',
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
      template: 'index.html'
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
