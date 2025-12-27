
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const COMPANY_NOTES_DIR = path.join(PUBLIC_DIR, 'Company NOTES');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'companyFiles.json');

// Helper: Get file type
function getFileType(filename) {
    const ext = path.extname(filename).toLowerCase();
    const typeMap = {
        '.pdf': 'PDF',
        '.docx': 'Document',
        '.doc': 'Document',
        '.txt': 'Text',
        '.htm': 'HTML',
        '.html': 'HTML',
        '.md': 'Markdown',
        '.enc': 'Encrypted',
        '.pptx': 'Presentation',
        '.ppt': 'Presentation',
        '.xlsx': 'Spreadsheet',
        '.xls': 'Spreadsheet',
        '.png': 'Image',
        '.jpg': 'Image',
        '.jpeg': 'Image',
        '.gif': 'Image',
        '.webp': 'Image'
    };
    return typeMap[ext] || 'Other';
}

// Helper: Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Helper: Scan directory recursively
function scanDirectory(dirPath, relativePath = '') {
    const files = [];

    try {
        if (!fs.existsSync(dirPath)) return [];

        const items = fs.readdirSync(dirPath);

        for (const item of items) {
            if (item.startsWith('.')) continue;

            const fullPath = path.join(dirPath, item);
            const itemRelativePath = path.join(relativePath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                files.push(...scanDirectory(fullPath, itemRelativePath));
            } else if (stats.isFile()) {
                files.push({
                    name: item,
                    path: itemRelativePath, // This will be used in URL
                    size: stats.size,
                    sizeFormatted: formatFileSize(stats.size),
                    type: getFileType(item),
                    extension: path.extname(item).toLowerCase(),
                    modified: stats.mtime,
                    isDirectory: false
                });
            }
        }
    } catch (error) {
        console.error(`Error scanning directory ${dirPath}:`, error);
    }

    return files;
}

// Main function
function generateData() {
    console.log('🔍 Scanning Company NOTES...');

    if (!fs.existsSync(COMPANY_NOTES_DIR)) {
        console.error('❌ Error: public/Company NOTES directory not found!');
        process.exit(1);
    }

    const companies = [];
    const items = fs.readdirSync(COMPANY_NOTES_DIR);

    for (const item of items) {
        if (item.startsWith('.')) continue;

        const fullPath = path.join(COMPANY_NOTES_DIR, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            const files = scanDirectory(fullPath);

            // Group files by type
            const filesByType = {};
            files.forEach(file => {
                if (!filesByType[file.type]) filesByType[file.type] = [];
                filesByType[file.type].push(file);
            });

            companies.push({
                name: item,
                displayName: item.toUpperCase(),
                slug: item.toLowerCase().replace(/\s+/g, '-'),
                fileCount: files.length,
                files: files,
                filesByType: filesByType,
                types: Object.keys(filesByType).sort(),
                modified: stats.mtime
            });
        }
    }

    // Sort companies
    companies.sort((a, b) => a.name.localeCompare(b.name));

    // Ensure output directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(companies, null, 2));
    console.log(`✅ Successfully generated data for ${companies.length} companies.`);
    console.log(`📄 Output saved to: ${OUTPUT_FILE}`);
}

generateData();
