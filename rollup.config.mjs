import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import postcss from 'postcss';
import pkg from './package.json' assert { type: 'json' };
import autoprefixer from 'autoprefixer';

import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  classnames: 'classnames',
  react: 'react',
  'react-dom': 'react-dom',
  'react/jsx-runtime': 'jsxRuntime',
};

// Variable name in the iife
const name = 'DocsUiComponents';

export default [
  {
    input: './src/index.ts',
    plugins: [
      peerDepsExternal(),
      tsConfigPaths(),
      // typescriptPaths(),

      scss({
        processor: () => postcss([autoprefixer()]),
        fileName: pkg.css,
        failOnError: true,
        // prefix: '@use "./src/styles";',
      }),

      // Allows node_modules resolution
      resolve({
        extensions,
        browser: true,
        dedupe: ['react', 'react-dom'],
      }),

      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs(),

      // Converts .json files to ES6 modules
      json(),

      // Compile TypeScript/JavaScript files
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),

      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: { jsx: 'preserve' },
      }),

      // Copy package.json to dist for module bundle
      copy({
        targets: [
          { src: 'package.json', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
        ],
      }),
    ],

    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'docs-ui-components',
        globals,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(s?css|sass)$/],
    plugins: [dts()],
  },
];
