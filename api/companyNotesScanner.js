import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPANY_NOTES_DIR = path.join(__dirname, '..', 'Company NOTES');

/**
 * Get file extension and determine file type
 */
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
        '.xls': 'Spreadsheet'
    };
    return typeMap[ext] || 'Other';
}

/**
 * Format file size to human readable format
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Recursively scan a directory and return all files
 */
function scanDirectory(dirPath, relativePath = '') {
    const files = [];

    try {
        const items = fs.readdirSync(dirPath);

        for (const item of items) {
            // Skip hidden files and .DS_Store
            if (item.startsWith('.')) continue;

            const fullPath = path.join(dirPath, item);
            const itemRelativePath = path.join(relativePath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                // Recursively scan subdirectories
                files.push(...scanDirectory(fullPath, itemRelativePath));
            } else if (stats.isFile()) {
                files.push({
                    name: item,
                    path: itemRelativePath,
                    fullPath: fullPath,
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

/**
 * Get all companies with their file counts
 */
export function getAllCompanies() {
    try {
        if (!fs.existsSync(COMPANY_NOTES_DIR)) {
            return [];
        }

        const companies = [];
        const items = fs.readdirSync(COMPANY_NOTES_DIR);

        for (const item of items) {
            // Skip hidden files
            if (item.startsWith('.')) continue;

            const fullPath = path.join(COMPANY_NOTES_DIR, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                const files = scanDirectory(fullPath);
                companies.push({
                    name: item,
                    displayName: item.toUpperCase(),
                    slug: item.toLowerCase().replace(/\s+/g, '-'),
                    fileCount: files.length,
                    path: item,
                    modified: stats.mtime
                });
            }
        }

        // Sort by name
        companies.sort((a, b) => a.name.localeCompare(b.name));

        return companies;
    } catch (error) {
        console.error('Error getting companies:', error);
        return [];
    }
}

/**
 * Get all files for a specific company
 */
export function getCompanyFiles(companyName) {
    try {
        const companyPath = path.join(COMPANY_NOTES_DIR, companyName);

        if (!fs.existsSync(companyPath)) {
            return null;
        }

        const stats = fs.statSync(companyPath);
        if (!stats.isDirectory()) {
            return null;
        }

        const files = scanDirectory(companyPath);

        // Group files by type
        const filesByType = {};
        files.forEach(file => {
            if (!filesByType[file.type]) {
                filesByType[file.type] = [];
            }
            filesByType[file.type].push(file);
        });

        return {
            company: companyName,
            displayName: companyName.toUpperCase(),
            totalFiles: files.length,
            files: files,
            filesByType: filesByType,
            types: Object.keys(filesByType).sort()
        };
    } catch (error) {
        console.error(`Error getting files for company ${companyName}:`, error);
        return null;
    }
}

/**
 * Search files across all companies
 */
export function searchFiles(query) {
    try {
        const companies = getAllCompanies();
        const results = [];

        const lowerQuery = query.toLowerCase();

        for (const company of companies) {
            const companyData = getCompanyFiles(company.name);
            if (companyData) {
                const matchingFiles = companyData.files.filter(file =>
                    file.name.toLowerCase().includes(lowerQuery) ||
                    company.name.toLowerCase().includes(lowerQuery)
                );

                matchingFiles.forEach(file => {
                    results.push({
                        ...file,
                        company: company.name,
                        companyDisplayName: company.displayName
                    });
                });
            }
        }

        return results;
    } catch (error) {
        console.error('Error searching files:', error);
        return [];
    }
}

/**
 * Get file path for serving
 */
export function getFilePath(companyName, filePath) {
    const fullPath = path.join(COMPANY_NOTES_DIR, companyName, filePath);

    // Security check: ensure the path is within COMPANY_NOTES_DIR
    const normalizedPath = path.normalize(fullPath);
    if (!normalizedPath.startsWith(COMPANY_NOTES_DIR)) {
        return null;
    }

    if (fs.existsSync(normalizedPath) && fs.statSync(normalizedPath).isFile()) {
        return normalizedPath;
    }

    return null;
}
