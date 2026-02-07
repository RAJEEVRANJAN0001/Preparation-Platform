import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'router': ['react-router-dom'],
                    'icons': ['lucide-react', 'react-icons'],
                    'markdown': ['react-markdown', 'remark-gfm']
                }
            }
        },
        chunkSizeWarningLimit: 1000,
        sourcemap: false,
        // Don't copy public folder to dist (saves 885 MB)
        // Files will be served via API endpoints instead
        copyPublicDir: false
    }
})
