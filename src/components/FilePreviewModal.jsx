import { X, Download, Maximize2, ExternalLink, FileText, Code, Loader, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './FilePreviewModal.css';

function FilePreviewModal({ file, company, onClose }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle different file paths
    // With Vercel/Static deployment, all files are in public/Company NOTES
    // We can access them directly via URL
    const fileUrl = `/Company NOTES/${company}/${encodeURIComponent(file.path)}`;

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

    return (
        <div className={`file-preview-overlay ${isFullscreen ? 'fullscreen' : ''}`} onClick={onClose}>
            <div className="preview-backdrop" />

            <div
                className={`preview-container ${isFullscreen ? 'fullscreen' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Premium Modern Header */}
                <div className="preview-header">
                    <div className="window-controls">
                        <button className="window-btn close" onClick={onClose} title="Close" />
                        <button className="window-btn minimize" onClick={() => { }} disabled />
                        <button className="window-btn maximize" onClick={() => setIsFullscreen(!isFullscreen)} title="Fullscreen" />
                    </div>

                    <div className="preview-title">
                        <span className="file-icon-wrapper">
                            {isMarkdown ? <Code size={16} /> : <FileText size={16} />}
                        </span>
                        <span className="filename">{file.name}</span>
                        <span className="file-badge">{file.type}</span>
                    </div>

                    <div className="header-actions">
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
                        <div className="preview-error">
                            <div className="error-icon">📄</div>
                            <h3>Preview not available</h3>
                            <p>This file type cannot be opened in the browser.</p>
                            <button className="retry-btn" onClick={handleDownload}>
                                <Download size={16} style={{ marginRight: 8 }} /> Download File
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
        </div>
    );
}

function getTypeColor(type) {
    const colors = {
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
    return colors[type] || '#6b7280';
}

export default FilePreviewModal;
