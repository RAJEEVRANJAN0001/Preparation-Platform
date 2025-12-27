import { FileText, FileCode, File, FileImage, FileSpreadsheet, FileVideo, FileArchive, Lock } from 'lucide-react';

/**
 * Get icon component for file type
 */
export function getFileIcon(fileType, extension) {
    switch (fileType) {
        case 'PDF':
            return FileText;
        case 'Document':
            return FileText;
        case 'Text':
            return FileCode;
        case 'HTML':
            return FileCode;
        case 'Markdown':
            return FileCode;
        case 'Presentation':
            return FileImage;
        case 'Spreadsheet':
            return FileSpreadsheet;
        case 'Encrypted':
            return Lock;
        default:
            return File;
    }
}

/**
 * Get color for file type badge
 */
export function getFileTypeColor(fileType) {
    const colorMap = {
        'PDF': '#ef4444',
        'Document': '#3b82f6',
        'Text': '#10b981',
        'HTML': '#f59e0b',
        'Markdown': '#8b5cf6',
        'Presentation': '#ec4899',
        'Spreadsheet': '#14b8a6',
        'Encrypted': '#6b7280',
        'Other': '#6b7280'
    };
    return colorMap[fileType] || '#6b7280';
}

/**
 * Format file size
 */
export function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Format date
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return date.toLocaleDateString();
}

/**
 * LocalStorage keys
 */
const STORAGE_KEYS = {
    RECENTLY_VIEWED: 'companyNotes_recentlyViewed',
    FAVORITES: 'companyNotes_favorites',
    RECENTLY_VIEWED_FILES: 'companyNotes_recentlyViewedFiles'
};

/**
 * Get recently viewed companies
 */
export function getRecentlyViewed() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting recently viewed:', error);
        return [];
    }
}

/**
 * Add company to recently viewed
 */
export function addToRecentlyViewed(company) {
    try {
        let recent = getRecentlyViewed();
        // Remove if already exists
        recent = recent.filter(c => c.name !== company.name);
        // Add to beginning
        recent.unshift({
            ...company,
            viewedAt: new Date().toISOString()
        });
        // Keep only last 10
        recent = recent.slice(0, 10);
        localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(recent));
    } catch (error) {
        console.error('Error adding to recently viewed:', error);
    }
}

/**
 * Get favorite companies
 */
export function getFavorites() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
}

/**
 * Toggle favorite company
 */
export function toggleFavorite(company) {
    try {
        let favorites = getFavorites();
        const index = favorites.findIndex(c => c.name === company.name);

        if (index > -1) {
            // Remove from favorites
            favorites.splice(index, 1);
        } else {
            // Add to favorites
            favorites.push({
                ...company,
                favoritedAt: new Date().toISOString()
            });
        }

        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
        return index === -1; // Return true if added, false if removed
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return false;
    }
}

/**
 * Check if company is favorite
 */
export function isFavorite(companyName) {
    const favorites = getFavorites();
    return favorites.some(c => c.name === companyName);
}

/**
 * Get recently viewed files
 */
export function getRecentlyViewedFiles() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED_FILES);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting recently viewed files:', error);
        return [];
    }
}

/**
 * Add file to recently viewed
 */
export function addToRecentlyViewedFiles(file, company) {
    try {
        let recent = getRecentlyViewedFiles();
        // Remove if already exists
        recent = recent.filter(f => f.path !== file.path || f.company !== company);
        // Add to beginning
        recent.unshift({
            ...file,
            company: company,
            viewedAt: new Date().toISOString()
        });
        // Keep only last 20
        recent = recent.slice(0, 20);
        localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED_FILES, JSON.stringify(recent));
    } catch (error) {
        console.error('Error adding to recently viewed files:', error);
    }
}

/**
 * Check if file can be previewed
 */
export function canPreview(fileType) {
    return ['PDF', 'Text', 'HTML', 'Markdown'].includes(fileType);
}

/**
 * Get company logo/icon color
 */
export function getCompanyColor(companyName) {
    const colors = [
        '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
        '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'
    ];
    // Simple hash function to get consistent color for company
    let hash = 0;
    for (let i = 0; i < companyName.length; i++) {
        hash = companyName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}
