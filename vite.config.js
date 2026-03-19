import { defineConfig } from 'vite';

export default defineConfig({
  base: '/global-timeline/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
