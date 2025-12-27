import companyFilesData from '../src/data/companyFiles.json' with { type: 'json' };

// In production/Vercel, we use the generated JSON data
// In local dev, we might still want FS scanning, but for consistency we'll use generated data everywhere
// Just ensure you run 'npm run generate-data' before dev

/**
 * Get all companies with their file counts
 */
export function getAllCompanies() {
    return companyFilesData || [];
}

/**
 * Get all files for a specific company
 */
export function getCompanyFiles(companyName) {
    if (!companyFilesData) return null;

    // Find the company logic
    // The data structure in JSON is an array of company objects
    const company = companyFilesData.find(c =>
        c.name.toLowerCase() === companyName.toLowerCase() ||
        c.slug === companyName.toLowerCase()
    );

    if (!company) return null;

    return {
        company: company.name,
        displayName: company.displayName,
        totalFiles: company.fileCount,
        files: company.files,
        filesByType: company.filesByType,
        types: company.types
    };
}

/**
 * Search files across all companies
 */
export function searchFiles(query) {
    if (!companyFilesData) return [];

    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const company of companyFilesData) {
        const matchingFiles = company.files.filter(file =>
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

    return results;
}

/**
 * Get file path for serving
 * NOTE: This is deprecated for Vercel deployment as files are served statically from /public
 * Keeping it for backward compatibility if needed, but it will return relative URL path
 */
export function getFilePath(companyName, filePath) {
    // Return web path instead of system path
    return `/Company NOTES/${companyName}/${filePath}`;
}
