import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import {globSync} from 'glob';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [...globSync('./src/*/*.project.ts').map(name => `./${name}`)],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: '../public/animations',
        entryFileNames: '[name].js',
      },
    },
  },
});
