import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

function isDev() {
  return devMode;
}

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: devMode ? 'inline' : false,
      plugins: [
        typescript({
          tsconfig: './tsconfig.json'
        }),
        !isDev() ? terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode
          },
          output: { quote_style: 1 }
        }) : null
      ]
    }
  }
];