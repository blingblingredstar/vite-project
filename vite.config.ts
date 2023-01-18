import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      exclude: ['tailwind', 'node_modules'],
      configFile: path.join(__dirname, './.stylelintrc.js'),
      config: {
        rules: {
          'at-rule-no-unknown': [
            true,
            {
              ignoreAtRules: [
                'tailwind',
                'apply',
                'layer',
                'config',
                /** tailwindcss v1, v2 */
                'variants',
                'responsive',
                'screen'
              ]
            }
          ]
        }
      }
    }),
    svgr(),
    legacy({ targets: ['IE >= 11, > 0.5%, not dead'] })
  ],
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
});
