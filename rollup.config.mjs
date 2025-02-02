import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import rollupPluginPostCss from 'rollup-plugin-postcss';
import pkg from './package.json' assert { type: 'json' };

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

      rollupPluginPostCss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css', '.scss'],
        extract: pkg.css,
        minimize: true,
        inject: {
          insertAt: 'top',
        },
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

      typescript({
        tsconfig: './tsconfig.json',
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
    plugins: [dts()],
    external: [/\.(s?css|sass)$/],
  },
];
