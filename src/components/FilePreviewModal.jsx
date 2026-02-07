import { X, Download, Maximize2, ExternalLink, FileText, Code, Loader, ChevronDown, File, FileCode, FileImage, FileSpreadsheet, Presentation, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './FilePreviewModal.css';

// GitHub raw base URL for serving files in production (Vercel can't host 526MB+ of PDFs)
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/RAJEEVRANJAN0001/Preparation-Platform/main/public';
const isProduction = import.meta.env.PROD;

// Local helper function to get file icon
function getFileIcon(type, extension) {
    if (type === 'PDF') return FileText;
    if (type === 'Document') return FileText;
    if (type === 'Text') return FileText;
    if (type === 'HTML') return FileCode;
    if (type === 'Markdown') return Code;
    if (type === 'Image') return FileImage;
    if (type === 'Spreadsheet') return FileSpreadsheet;
    if (type === 'Presentation') return Presentation;
    if (type === 'Encrypted') return Lock;
    return File;
}


function FilePreviewModal({ file, company, onClose }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Build file URLs based on environment
    // In development: files are served from public/ by Vite dev server
    // In production (Vercel): files are too large to deploy, so we use GitHub raw URLs
    let fileUrl;
    let downloadUrl;
    let previewUrl; // For PDF iframe preview (may use Google Docs Viewer in production)

    if (company === 'PLACEMENT NOTES') {
        if (isProduction) {
            // Production: serve from GitHub raw
            const rawUrl = `${GITHUB_RAW_BASE}/PLACEMENT%20NOTES/${encodeURIComponent(file.path)}`;
            fileUrl = rawUrl;
            downloadUrl = rawUrl;
            // Use Google Docs Viewer for PDF preview in production (raw.githubusercontent.com doesn't set correct Content-Type for iframe embedding)
            if (file.type === 'PDF') {
                previewUrl = `https://docs.google.com/gview?url=${encodeURIComponent(rawUrl)}&embedded=true`;
            } else {
                previewUrl = rawUrl;
            }
        } else {
            // Development: serve from local public/
            fileUrl = `/PLACEMENT NOTES/${encodeURIComponent(file.path)}`;
            downloadUrl = fileUrl;
            previewUrl = fileUrl;
        }
    } else {
        // Company NOTES (also use GitHub raw in production)
        if (isProduction) {
            const rawUrl = `${GITHUB_RAW_BASE}/Company%20NOTES/${company}/${file.path.split('/').map(encodeURIComponent).join('/')}`;
            fileUrl = rawUrl;
            downloadUrl = rawUrl;
            if (file.type === 'PDF') {
                previewUrl = `https://docs.google.com/gview?url=${encodeURIComponent(rawUrl)}&embedded=true`;
            } else {
                previewUrl = rawUrl;
            }
        } else {
            const baseUrl = `/Company NOTES/${company}`;
            fileUrl = `${baseUrl}/${file.path.split('/').map(encodeURIComponent).join('/')}`;
            downloadUrl = fileUrl;
            previewUrl = fileUrl;
        }
    }

    const isTextFile = file.type === 'Text';
    const isMarkdown = file.type === 'Markdown';
    // We treat PDFs and HTML as 'iframe' content
    const isIframe = file.type === 'PDF' || file.type === 'HTML';

    // Check if we can actually preview this file type in browser
    const canPreview = isTextFile || isMarkdown || isIframe || file.type === 'Image';

    useEffect(() => {
        if (isTextFile || isMarkdown) {
            fetchContent();
        }
    }, [file, company]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const fetchContent = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error('Failed to load file content');
            const text = await response.text();
            setContent(text);
        } catch (err) {
            console.error('Error loading file:', err);
            setError('Failed to load file content');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = file.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return createPortal(
        <div
            className={`file-preview-overlay ${isFullscreen ? 'fullscreen' : ''}`}
            onClick={onClose}
            onWheel={(e) => e.stopPropagation()}
        >
            <div className="preview-backdrop" />

            <div
                className={`preview-container ${isFullscreen ? 'fullscreen' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Premium Modern Header */}
                <div className="preview-header">
                    <div className="preview-title">
                        <span className="file-icon-wrapper">
                            {isMarkdown ? <Code size={16} /> : <FileText size={16} />}
                        </span>
                        <span className="filename">{file.name}</span>
                        <span className="file-badge">{file.type}</span>
                    </div>

                    <div className="header-actions">
                        <button className="action-btn" onClick={() => setIsFullscreen(!isFullscreen)} title="Toggle Fullscreen">
                            <Maximize2 size={18} />
                        </button>
                        <button className="action-btn" onClick={handleDownload} title="Download">
                            <Download size={18} />
                        </button>
                        <a
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn"
                            title="Open in new tab"
                        >
                            <ExternalLink size={18} />
                        </a>
                        <div className="separator-vertical" style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 8px' }}></div>
                        <button className="action-btn close-btn" onClick={onClose} title="Close Preview">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="preview-body">
                    {loading ? (
                        <div className="preview-loading">
                            <Loader className="animate-spin" size={32} />
                            <p>Loading content...</p>
                        </div>
                    ) : error ? (
                        <div className="preview-error">
                            <div className="error-icon">!</div>
                            <h3>Preview Failed</h3>
                            <p>{error}</p>
                            <button className="retry-btn" onClick={fetchContent}>Try Again</button>
                        </div>
                    ) : !canPreview ? (
                        <div className="preview-download-card">
                            <div className="file-icon-large" style={{ color: getTypeColor(file.type), background: `${getTypeColor(file.type)}10` }}>
                                {(() => {
                                    const FileIcon = getFileIcon(file.type, file.extension);
                                    return <FileIcon size={64} />;
                                })()}
                            </div>
                            <div className="download-info">
                                <h3>{file.name}</h3>
                                <p>This file type ({file.type}) cannot be previewed in the browser. Download it to open with a compatible application.</p>
                            </div>
                            <button className="primary-download-btn" onClick={handleDownload}>
                                <Download size={20} />
                                <span>Download to Open</span>
                            </button>
                        </div>
                    ) : (
                        <div className="content-wrapper custom-scrollbar">
                            {isMarkdown && content && (
                                <div className="markdown-preview">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {content}
                                    </ReactMarkdown>
                                </div>
                            )}

                            {isTextFile && content && (
                                <pre className="text-preview">
                                    {content}
                                </pre>
                            )}

                            {/* Image content */}
                            {file.type === 'Image' && (
                                <div className="image-preview-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                                    <img
                                        src={fileUrl}
                                        alt={file.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                    />
                                </div>
                            )}

                            {/* Fallback / Iframe content — uses Google Docs Viewer in production for PDFs */}
                            {isIframe && (
                                <iframe
                                    src={previewUrl}
                                    title={file.name}
                                    className="preview-iframe"
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Status Bar */}
                <div className="preview-footer">
                    <div className="footer-info">
                        <span>{file.type}</span>
                        <span className="separator">•</span>
                        <span>{isMarkdown ? 'Markdown View' : isTextFile ? 'Text View' : isIframe ? 'Document Preview' : file.type === 'Image' ? 'Image Preview' : 'Download Mode'}</span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

function getTypeColor(type) {
    const colors = {
        'PDF': '#ef4444',
        'Document': '#3b82f6',
        'Text': '#10b981',
        'HTML': '#f59e0b',
        'Markdown': '#8b5cf6',
        'Image': '#d946ef',
        'Presentation': '#ec4899',
        'Spreadsheet': '#14b8a6',
        'Encrypted': '#6b7280',
        'Other': '#6b7280'
    };
    return colors[type] || '#6b7280';
}

export default FilePreviewModal;
