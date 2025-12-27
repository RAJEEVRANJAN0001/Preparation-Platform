import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Search, Download, Eye, Filter, FileText, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedBackground from '../components/AnimatedBackground';
import FilePreviewModal from '../components/FilePreviewModal';
import {
    getFileIcon,
    getFileTypeColor,
    addToRecentlyViewed,
    addToRecentlyViewedFiles,
    canPreview
} from '../utils/companyNotesUtils';
import './CompanyDetail.css';

function CompanyDetail() {
    const { companyName } = useParams();
    const navigate = useNavigate();
    const [companyData, setCompanyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [previewFile, setPreviewFile] = useState(null);

    useEffect(() => {
        fetchCompanyData();
    }, [companyName]);

    const fetchCompanyData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/api/company-notes/${companyName}`);
            const data = await response.json();

            if (data.success) {
                setCompanyData(data.data);
                // Add to recently viewed
                addToRecentlyViewed({
                    name: companyName,
                    displayName: data.data.displayName,
                    fileCount: data.data.totalFiles
                });
            } else {
                setError('Company not found');
            }
        } catch (err) {
            console.error('Error fetching company data:', err);
            setError('Failed to load company data');
        } finally {
            setLoading(false);
        }
    };

    const handleFileClick = (file) => {
        addToRecentlyViewedFiles(file, companyName);

        if (canPreview(file.type)) {
            setPreviewFile(file);
        } else {
            // Download file
            const fileUrl = `http://localhost:3001/api/company-notes/file/${companyName}?path=${encodeURIComponent(file.path)}`;
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const filteredFiles = companyData?.files.filter(file => {
        const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === 'All' || file.type === selectedType;
        return matchesSearch && matchesType;
    }) || [];

    if (loading) {
        return (
            <div className="app-container">
                <AnimatedBackground />
                <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Loading files...</p>
                </div>
            </div>
        );
    }

    if (error || !companyData) {
        return (
            <div className="app-container">
                <AnimatedBackground />
                <div className="error-state">
                    <div className="error-icon">⚠️</div>
                    <h3>Company not found</h3>
                    <p>{error}</p>
                    <button onClick={() => navigate('/company-notes')} className="back-btn">
                        ← Back to Companies
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <AnimatedBackground />

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <Link to="/company-notes" className="breadcrumb-link">
                    <ArrowLeft size={16} />
                    Companies
                </Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{companyData.displayName}</span>
            </div>

            <PageHeader
                title={companyData.displayName}
                subtitle={`${companyData.totalFiles} files • ${companyData.types.length} file types`}
            />

            <div className="company-detail-layout">
                {/* Sidebar - Filters */}
                <div className="filters-sidebar">
                    <div className="filter-section">
                        <div className="filter-header">
                            <Filter size={16} />
                            <h3>File Types</h3>
                        </div>
                        <div className="filter-options">
                            <button
                                className={`filter-option ${selectedType === 'All' ? 'active' : ''}`}
                                onClick={() => setSelectedType('All')}
                            >
                                <span>All Files</span>
                                <span className="filter-count">{companyData.totalFiles}</span>
                            </button>
                            {companyData.types.map(type => (
                                <button
                                    key={type}
                                    className={`filter-option ${selectedType === type ? 'active' : ''}`}
                                    onClick={() => setSelectedType(type)}
                                >
                                    <span style={{ color: getFileTypeColor(type) }}>● {type}</span>
                                    <span className="filter-count">
                                        {companyData.filesByType[type]?.length || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="files-content">
                    {/* Search Bar */}
                    <div className="search-bar-wrapper">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        {searchQuery && (
                            <button
                                className="clear-search"
                                onClick={() => setSearchQuery('')}
                            >
                                ×
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="results-info">
                        Showing <strong>{filteredFiles.length}</strong> of <strong>{companyData.totalFiles}</strong> files
                        {selectedType !== 'All' && ` in ${selectedType}`}
                    </div>

                    {/* Files Grid */}
                    {filteredFiles.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">📁</div>
                            <h3>No files found</h3>
                            <p>Try adjusting your search or filter</p>
                        </div>
                    ) : (
                        <div className="files-grid">
                            {filteredFiles.map((file, index) => (
                                <FileCard
                                    key={index}
                                    file={file}
                                    companyName={companyName}
                                    onClick={() => handleFileClick(file)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* File Preview Modal */}
            {previewFile && (
                <FilePreviewModal
                    file={previewFile}
                    company={companyName}
                    onClose={() => setPreviewFile(null)}
                />
            )}
        </div>
    );
}

function FileCard({ file, companyName, onClick }) {
    const Icon = getFileIcon(file.type, file.extension);
    const typeColor = getFileTypeColor(file.type);
    const isPreviewing = canPreview(file.type);

    const handleDownload = (e) => {
        e.stopPropagation();
        const fileUrl = `http://localhost:3001/api/company-notes/file/${companyName}?path=${encodeURIComponent(file.path)}`;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="file-card" onClick={onClick}>
            <div className="file-card-icon" style={{ background: `${typeColor}15`, color: typeColor }}>
                <Icon size={24} />
            </div>

            <div className="file-card-body">
                <h4 className="file-name" title={file.name}>{file.name}</h4>
                <div className="file-meta">
                    <span className="file-type" style={{ color: typeColor }}>
                        {file.type}
                    </span>
                    <span className="file-size">{file.sizeFormatted}</span>
                </div>
            </div>

            <div className="file-card-actions">
                {isPreviewing ? (
                    <button className="file-action-btn preview" title="Preview">
                        <Eye size={16} />
                    </button>
                ) : (
                    <button className="file-action-btn download" onClick={handleDownload} title="Download">
                        <Download size={16} />
                    </button>
                )}
            </div>

            <div className="file-card-hover"></div>
        </div>
    );
}

export default CompanyDetail;
