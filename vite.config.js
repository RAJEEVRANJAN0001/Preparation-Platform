import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Plugin to copy only essential small files to dist (logo, favicon, knowledge_base)
// Skips large folders (PLACEMENT NOTES 526MB, Company NOTES 358MB) to stay under Vercel's 250MB limit
function copyEssentialPublicFiles() {
    return {
        name: 'copy-essential-public-files',
        closeBundle() {
            const distDir = resolve(__dirname, 'dist')
            const filesToCopy = ['logo.png', 'knowledge_base.json']
            for (const file of filesToCopy) {
                const src = resolve(__dirname, 'public', file)
                if (existsSync(src)) {
                    copyFileSync(src, resolve(distDir, file))
                }
            }
        }
    }
}

export default defineConfig({
    plugins: [react(), copyEssentialPublicFiles()],
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
        // Don't copy entire public folder (1.6GB+) — only essential files are copied by the plugin above
        copyPublicDir: false
    }
})
