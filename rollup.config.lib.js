import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'build/umd/react-feature-switch.js',
      name: 'react-feature-switch',
      format: 'umd',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    },
    {
      file: 'build/module/index.js',
      format: 'es'
    }
  ],
  external: ['react', 'prop-types'],
  watch: {
    include: 'src/**',
    clearScreen: false
  },
  plugins: [
    resolve({
      extensions: ['.js', '.json', '.jsx']
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component'],
        'node_modules/prop-types/index.js': ['PropTypes']
      }
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};