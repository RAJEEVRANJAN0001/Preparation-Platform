import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        {
            name: 'exclude-large-files',
            configureServer(server) {
                // In development, files are served normally from public/
            },
            writeBundle(options, bundle) {
                // After build, remove Company NOTES and PLACEMENT NOTES from dist
                const distPath = options.dir || 'dist'
                const companyNotesPath = path.join(distPath, 'Company NOTES')
                const placementNotesPath = path.join(distPath, 'PLACEMENT NOTES')

                // Remove directories if they exist
                if (fs.existsSync(companyNotesPath)) {
                    fs.rmSync(companyNotesPath, { recursive: true, force: true })
                    console.log('✅ Removed Company NOTES from dist/ (885 MB saved)')
                }
                if (fs.existsSync(placementNotesPath)) {
                    fs.rmSync(placementNotesPath, { recursive: true, force: true })
                    console.log('✅ Removed PLACEMENT NOTES from dist/')
                }
            }
        }
    ],
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
        sourcemap: false
    }
})
