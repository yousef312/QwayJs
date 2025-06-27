import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/qway.js',
    output: [
      {
        file: 'dist/qway.umd.js',
        format: 'umd',
        name: 'qway',
        sourcemap: true,
      },
      {
        file: 'dist/qway.umd.min.js',
        format: 'umd',
        name: 'qway',
        plugins: [terser()],
        sourcemap: true,
      },
      {
        file: 'dist/qway.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/qway.cjs.js',
        format: 'cjs',
        sourcemap: true,
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];