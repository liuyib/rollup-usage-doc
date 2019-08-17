import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import os from 'os';

const cpuNums = os.cpus().length;
export default {
    input: {
        main: path.resolve(__dirname, './main/index.js'),
        vendor: path.resolve(__dirname, './utils/index.js')
    },
    external: [
        'jquery',
        'lodash'
    ],
    plugins: [
        resolve(),
        common({
          include: 'node_modules/**', // 包括 
          exclude: [],  // 排除
        }),
        babel({
            runtimeHelpers: true,
        }),
        terser({
            output: {
                comments: false
            },
            include: [/^.+\.js$/],
            exclude: ['node_moudles/**'],
            numWorkers: cpuNums,
            sourcemap: false
        })
    ],
    output: {
        dir: path.resolve(__dirname, 'dist/cjs-min-es5'),
        format: 'cjs',
        name: 'rollupTest',
        entryFileNames: '[name]-[hash]-[format].js', 
        chunkFileNames: '[name]-[hash]-[format].js',
        compact: true,
        extend: false,
        sourcemap: false,
        sourcemapPathTransform: (relativePath) => {
            return relativePath;
        },
        strictDeprecations: false
    },
    treeshake: {
        moduleSideEffects: true
    },
    manualChunks: {
        'myLib': [path.resolve(__dirname, './myLib/index.js')]
    }
}