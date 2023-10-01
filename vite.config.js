import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    ViteImageOptimizer({
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
              cleanupIDs: {
                minify: true,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 50,
      },

      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },

      // https://sharp.pixelplumbing.com/api-output#gif
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
    }),
  ],
});
