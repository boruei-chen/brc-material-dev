import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageJSON = require('./package.json');

const config = defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJSON.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      peerDepsExternal()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    external: [
      /\.(css|less|scss)$/
    ],
    plugins: [
      dts.default()
    ]
  }
]);

export default config;
