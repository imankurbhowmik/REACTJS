import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tinymce/tinymce-react': path.resolve(
        __dirname,
        'node_modules/@tinymce/lib/cjs/main/ts/index.js'
      ),
    },
  },
});