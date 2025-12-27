import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Folder, Star, Clock, TrendingUp, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedBackground from '../components/AnimatedBackground';
import {
    getRecentlyViewed,
    getFavorites,
    toggleFavorite,
    isFavorite,
    getCompanyColor
} from '../utils/companyNotesUtils';
import companyFilesData from '../data/companyFiles.json';
import './CompanyNotes.css';

function CompanyNotes() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load data directly from static JSON (generated at build time)
        // This solves Vercel connection issues and size limits
        try {
            if (companyFilesData) {
                setCompanies(companyFilesData);
            } else {
                setError('No company data found. Please run "npm run generate-data"');
            }
        } catch (err) {
            console.error('Error loading company data:', err);
            setError('Failed to load company data');
        } finally {
            setLoading(false);
        }

        setFavorites(getFavorites());
        setRecentlyViewed(getRecentlyViewed());
    }, []);

    const handleCompanyClick = (company) => {
        navigate(`/company-notes/${company.name}`);
    };

    const handleToggleFavorite = (e, company) => {
        e.stopPropagation();
        toggleFavorite(company);
        setFavorites(getFavorites());
    };

    const filteredCompanies = companies.filter(company =>
        company.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const favoriteCompanies = companies.filter(company =>
        isFavorite(company.name)
    );

    if (loading) {
        return (
            <div className="app-container">
                <AnimatedBackground />
                <PageHeader
                    title="Company Placement Notes"
                    subtitle="Loading companies..."
                />
                <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Loading company data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app-container">
                <AnimatedBackground />
                <PageHeader
                    title="Company Placement Notes"
                    subtitle="Error loading data"
                />
                <div className="error-state">
                    <div className="error-icon">⚠️</div>
                    <h3>Unable to load companies</h3>
                    <p>{error}</p>
                    <button onClick={fetchCompanies} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <AnimatedBackground />
            <PageHeader
                title="Company Placement Notes"
                subtitle={`${companies.length} companies • ${companies.reduce((sum, c) => sum + c.fileCount, 0)} total files`}
            />

            <div className="company-notes-layout">
                {/* Search Bar */}
                <div className="search-section">
                    <div className="search-bar-wrapper">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search companies..."
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
                </div>

                {/* Favorites Section */}
                {favoriteCompanies.length > 0 && !searchQuery && (
                    <div className="section">
                        <div className="section-header">
                            <Star size={18} className="section-icon" />
                            <h2>Favorite Companies</h2>
                            <span className="section-count">{favoriteCompanies.length}</span>
                        </div>
                        <div className="companies-grid">
                            {favoriteCompanies.map(company => (
                                <CompanyCard
                                    key={company.name}
                                    company={company}
                                    onClick={() => handleCompanyClick(company)}
                                    onToggleFavorite={(e) => handleToggleFavorite(e, company)}
                                    isFavorite={true}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Recently Viewed Section */}
                {recentlyViewed.length > 0 && !searchQuery && (
                    <div className="section">
                        <div className="section-header">
                            <Clock size={18} className="section-icon" />
                            <h2>Recently Viewed</h2>
                            <span className="section-count">{recentlyViewed.length}</span>
                        </div>
                        <div className="companies-grid">
                            {recentlyViewed.slice(0, 4).map(company => {
                                const fullCompany = companies.find(c => c.name === company.name);
                                if (!fullCompany) return null;
                                return (
                                    <CompanyCard
                                        key={company.name}
                                        company={fullCompany}
                                        onClick={() => handleCompanyClick(fullCompany)}
                                        onToggleFavorite={(e) => handleToggleFavorite(e, fullCompany)}
                                        isFavorite={isFavorite(fullCompany.name)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* All Companies Section */}
                <div className="section">
                    <div className="section-header">
                        <Folder size={18} className="section-icon" />
                        <h2>{searchQuery ? 'Search Results' : 'All Companies'}</h2>
                        <span className="section-count">{filteredCompanies.length}</span>
                    </div>

                    {filteredCompanies.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">🔍</div>
                            <h3>No companies found</h3>
                            <p>Try adjusting your search query</p>
                        </div>
                    ) : (
                        <div className="companies-grid">
                            {filteredCompanies.map(company => (
                                <CompanyCard
                                    key={company.name}
                                    company={company}
                                    onClick={() => handleCompanyClick(company)}
                                    onToggleFavorite={(e) => handleToggleFavorite(e, company)}
                                    isFavorite={isFavorite(company.name)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function CompanyCard({ company, onClick, onToggleFavorite, isFavorite }) {
    const color = getCompanyColor(company.name);

    return (
        <div className="company-card" onClick={onClick}>
            <div className="company-card-header">
                <div
                    className="company-icon"
                    style={{
                        background: `linear-gradient(135deg, ${color}22, ${color}11)`,
                        borderColor: `${color}33`
                    }}
                >
                    <Folder size={28} style={{ color }} />
                </div>
                <button
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={onToggleFavorite}
                    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
            </div>

            <div className="company-card-body">
                <h3 className="company-name">{company.displayName}</h3>
                <div className="company-stats">
                    <div className="stat-item">
                        <FileText size={14} />
                        <span>{company.fileCount} files</span>
                    </div>
                </div>
            </div>

            <div className="company-card-footer">
                <span className="view-files-btn">
                    View Files →
                </span>
            </div>

            <div className="card-shine"></div>
        </div>
    );
}

export default CompanyNotes;
