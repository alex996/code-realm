import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const build = 'build'

export default {
  input: 'src/index.js',
  output: {
    file: `${build}/bundle.js`,
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
