import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'keepalive-react-component',
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true
    },
    external: [
      'react'
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      name: 'keepalive-react-component',
      file: 'lib/index.min.js',
      globals:'KeepaliveReactComponent',
      format: 'umd'
    },
    external: [
      'react',
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  }
]