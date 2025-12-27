import { X, Download, Maximize2, ExternalLink, FileText, Code, Loader, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getFileIcon } from '../utils/companyNotesUtils';
import './FilePreviewModal.css';

function FilePreviewModal({ file, company, onClose }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle different file paths
    // With Vercel/Static deployment, all files are in public/Company NOTES
    // We can access them directly via URL
    // We can access them directly via URL
    // Ensure we handle subdirectories correctly by encoding segments but keeping slashes
    const fileUrl = `/Company NOTES/${company}/${file.path.split('/').map(encodeURIComponent).join('/')}`;

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
        link.href = fileUrl;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return createPortal(
        <div className={`file-preview-overlay ${isFullscreen ? 'fullscreen' : ''}`} onClick={onClose}>
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
                            href={fileUrl}
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
                            <div className="error-icon">⚠️</div>
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
                                <p>This file is ready to view</p>
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

                            {/* Fallback / Iframe content */}
                            {isIframe && (
                                <iframe
                                    src={fileUrl}
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
                        <span>{file.sizeFormatted}</span>
                        <span className="separator">•</span>
                        <span>{isMarkdown ? 'Markdown View' : isTextFile ? 'Text View' : 'Preview Mode'}</span>
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
