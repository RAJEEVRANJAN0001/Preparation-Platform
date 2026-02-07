import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to Company NOTES directory
const COMPANY_NOTES_DIR = path.join(__dirname, '..', 'public', 'Company NOTES');

/**
 * Get all company directories
 * @returns {Array} Array of company names
 */
export function getAllCompanies() {
    try {
        if (!fs.existsSync(COMPANY_NOTES_DIR)) {
            console.warn('Company NOTES directory not found:', COMPANY_NOTES_DIR);
            return [];
        }

        const items = fs.readdirSync(COMPANY_NOTES_DIR);
        const companies = items.filter(item => {
            const fullPath = path.join(COMPANY_NOTES_DIR, item);
            return fs.statSync(fullPath).isDirectory() && !item.startsWith('.');
        });

        return companies.sort();
    } catch (error) {
        console.error('Error reading companies:', error);
        return [];
    }
}

/**
 * Get all files for a specific company
 * @param {string} companyName - Name of the company
 * @returns {Object|null} Company data with files
 */
export function getCompanyFiles(companyName) {
    try {
        const companyPath = path.join(COMPANY_NOTES_DIR, companyName);

        if (!fs.existsSync(companyPath)) {
            return null;
        }

        const files = scanDirectory(companyPath, '');

        return {
            name: companyName,
            files: files,
            count: files.length
        };
    } catch (error) {
        console.error(`Error reading files for ${companyName}:`, error);
        return null;
    }
}

/**
 * Recursively scan directory for files
 * @param {string} dirPath - Directory path
 * @param {string} relativePath - Relative path from company root
 * @returns {Array} Array of file objects
 */
function scanDirectory(dirPath, relativePath) {
    const files = [];

    try {
        const items = fs.readdirSync(dirPath);

        items.forEach(item => {
            if (item.startsWith('.')) return; // Skip hidden files

            const fullPath = path.join(dirPath, item);
            const itemRelativePath = path.join(relativePath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                // Recursively scan subdirectories
                const subFiles = scanDirectory(fullPath, itemRelativePath);
                files.push(...subFiles);
            } else {
                // Add file info
                files.push({
                    name: item,
                    path: itemRelativePath,
                    size: stats.size,
                    extension: path.extname(item).toLowerCase(),
                    modified: stats.mtime
                });
            }
        });
    } catch (error) {
        console.error(`Error scanning directory ${dirPath}:`, error);
    }

    return files;
}

/**
 * Search for files across all companies
 * @param {string} query - Search query
 * @returns {Array} Array of search results
 */
export function searchFiles(query) {
    const results = [];
    const companies = getAllCompanies();
    const lowerQuery = query.toLowerCase();

    companies.forEach(company => {
        const companyData = getCompanyFiles(company);
        if (!companyData) return;

        companyData.files.forEach(file => {
            if (file.name.toLowerCase().includes(lowerQuery) ||
                file.path.toLowerCase().includes(lowerQuery)) {
                results.push({
                    company: company,
                    file: file
                });
            }
        });
    });

    return results;
}

/**
 * Get full file path
 * @param {string} companyName - Company name
 * @param {string} filePath - Relative file path
 * @returns {string} Full file path
 */
export function getFilePath(companyName, filePath) {
    return path.join(COMPANY_NOTES_DIR, companyName, filePath);
}
