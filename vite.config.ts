import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@constants': path.resolve(
        __dirname,
        'src/assets/styles/constants.scss',
      ),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@api': path.resolve(__dirname, 'src/api/'),
    },
  },
})
