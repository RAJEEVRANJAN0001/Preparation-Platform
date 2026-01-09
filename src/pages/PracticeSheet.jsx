import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, CheckCircle, Circle, Trophy, Search, PlayCircle, BookOpen } from 'lucide-react';
import { striverSheetData } from '../data/striverSheetData';
import { blind75Data } from '../data/blind75Data';
import { sdeSheetData } from '../data/sdeSheetData';
import { dsaSheetData } from '../data/dsaSheetData';
import { sql50Data } from '../data/sql50Data';
import ReactMarkdown from 'react-markdown';
import './PracticeSheet.css';

import { useLocation } from 'react-router-dom';

const PracticeSheet = () => {
    const location = useLocation();
    const [activeSheet, setActiveSheet] = useState('striver'); // 'striver', 'blind75', 'sde', 'dsa', 'sql50'
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [striverProgress, setStriverProgress] = useState({});
    const [blind75Progress, setBlind75Progress] = useState({});
    const [sdeProgress, setSdeProgress] = useState({});

    const [dsaProgress, setDsaProgress] = useState({});
    const [sql50Progress, setSql50Progress] = useState({});
    const [searchTerm, setSearchTerm] = useState('');


    // Load progress from localStorage
    useEffect(() => {
        const savedStriver = localStorage.getItem('striverSheetProgress');
        const savedBlind75 = localStorage.getItem('blind75Progress');
        const savedSde = localStorage.getItem('sdeSheetProgress');
        const savedDsa = localStorage.getItem('dsaSheetProgress');
        const savedSql50 = localStorage.getItem('sql50SheetProgress');

        if (savedStriver) setStriverProgress(JSON.parse(savedStriver));
        if (savedBlind75) setBlind75Progress(JSON.parse(savedBlind75));
        if (savedSde) setSdeProgress(JSON.parse(savedSde));
        if (savedDsa) setDsaProgress(JSON.parse(savedDsa));
        if (savedSql50) setSql50Progress(JSON.parse(savedSql50));

        // Check for navigation state to switch tab
        if (location.state && location.state.activeTab) {
            setActiveSheet(location.state.activeTab);
        }
    }, [location]);

    let currentData;
    let currentProgress;

    if (activeSheet === 'striver') {
        currentData = striverSheetData;
        currentProgress = striverProgress;
    } else if (activeSheet === 'blind75') {
        currentData = blind75Data;
        currentProgress = blind75Progress;
    } else if (activeSheet === 'sde') {
        currentData = sdeSheetData;
        currentProgress = sdeProgress;
    } else if (activeSheet === 'dsa') {
        currentData = dsaSheetData;
        currentProgress = dsaProgress;
    } else {
        currentData = sql50Data;
        currentProgress = sql50Progress;
    }

    const toggleProblem = (problemTitle) => {
        const newProgress = { ...currentProgress, [problemTitle]: !currentProgress[problemTitle] };

        if (activeSheet === 'striver') {
            setStriverProgress(newProgress);
            localStorage.setItem('striverSheetProgress', JSON.stringify(newProgress));
        } else if (activeSheet === 'blind75') {
            setBlind75Progress(newProgress);
            localStorage.setItem('blind75Progress', JSON.stringify(newProgress));
        } else if (activeSheet === 'sde') {
            setSdeProgress(newProgress);
            localStorage.setItem('sdeSheetProgress', JSON.stringify(newProgress));
        } else if (activeSheet === 'dsa') {
            setDsaProgress(newProgress);
            localStorage.setItem('dsaSheetProgress', JSON.stringify(newProgress));
        } else {
            setSql50Progress(newProgress);
            localStorage.setItem('sql50SheetProgress', JSON.stringify(newProgress));
        }
    };

    const toggleTopic = (index) => {
        setExpandedTopic(expandedTopic === index ? null : index);
    };

    const calculateProgress = () => {
        let total = 0;
        let completed = 0;
        currentData.forEach(topic => {
            topic.subtopics.forEach(sub => {
                sub.problems.forEach(prob => {
                    total++;
                    if (currentProgress[prob.title]) completed++;
                });
            });
        });
        return total === 0 ? 0 : Math.round((completed / total) * 100);
    };

    const getSearchLink = (problem) => {
        const query = encodeURIComponent(`${problem.title} ${problem.platform}`);
        return `https://www.google.com/search?q=${query}`;
    };

    const filteredTopics = currentData.map(topic => {
        const matchesTopic = topic.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchingSubtopics = topic.subtopics.map(sub => {
            const matchesSub = sub.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchingProblems = sub.problems.filter(p =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (matchesSub || matchingProblems.length > 0) {
                return { ...sub, problems: matchesSub ? sub.problems : matchingProblems };
            }
            return null;
        }).filter(Boolean);

        if (matchesTopic || matchingSubtopics.length > 0) {
            return { ...topic, subtopics: matchesTopic ? topic.subtopics : matchingSubtopics };
        }
        return null;
    }).filter(Boolean);

    return (
        <div className="practice-sheet-container">
            <div className="practice-hero">
                <div className="hero-content">
                    <h1>Practice Sheets</h1>
                    <p>Master Data Structures and Algorithms with curated problem sets.</p>

                    <div className="controls-wrapper">
                        <div className="sheet-tabs">
                            <button
                                className={`sheet-tab ${activeSheet === 'striver' ? 'active' : ''}`}
                                onClick={() => { setActiveSheet('striver'); setExpandedTopic(null); }}
                            >
                                Striver's A2Z
                            </button>
                            <button
                                className={`sheet-tab ${activeSheet === 'blind75' ? 'active' : ''}`}
                                onClick={() => { setActiveSheet('blind75'); setExpandedTopic(null); }}
                            >
                                Blind 75
                            </button>
                            <button
                                className={`sheet-tab ${activeSheet === 'sde' ? 'active' : ''}`}
                                onClick={() => { setActiveSheet('sde'); setExpandedTopic(null); }}
                            >
                                Striver's SDE
                            </button>
                            <button
                                className={`sheet-tab ${activeSheet === 'dsa' ? 'active' : ''}`}
                                onClick={() => { setActiveSheet('dsa'); setExpandedTopic(null); }}
                            >
                                Placement DSA
                            </button>
                            <button
                                className={`sheet-tab ${activeSheet === 'sql50' ? 'active' : ''}`}
                                onClick={() => { setActiveSheet('sql50'); setExpandedTopic(null); }}
                            >
                                Top 50 SQL
                            </button>
                        </div>

                        <div className="search-bar-wrapper">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search topics or problems..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="progress-card">
                    <div className="progress-header">
                        <span className="progress-label">
                            {activeSheet === 'striver' ? "Striver's A2Z" : activeSheet === 'blind75' ? "Blind 75" : activeSheet === 'sde' ? "Striver's SDE" : activeSheet === 'dsa' ? "Placement DSA" : "Top SQL 50"} Progress
                        </span>
                        <span className="progress-percentage">{calculateProgress()}%</span>
                    </div>
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${calculateProgress()}%` }}
                        ></div>
                    </div>
                    <div className="progress-stats">
                        <Trophy size={16} className="text-yellow-500" />
                        <span>Keep pushing! You're doing great.</span>
                    </div>
                </div>
            </div>

            <div className="topics-list">
                {filteredTopics.length > 0 ? (
                    filteredTopics.map((topic, index) => (
                        <div key={index} className={`topic-card ${expandedTopic === index ? 'expanded' : ''}`}>
                            <div
                                className="topic-header"
                                onClick={() => toggleTopic(index)}
                            >
                                <div className="topic-info">
                                    <div className="topic-index">{index + 1}</div>
                                    <div className="topic-title-wrapper">
                                        <h3>{topic.title}</h3>
                                        {topic.description && (
                                            <span className="notes-badge">
                                                <BookOpen size={12} style={{ marginRight: '4px' }} />
                                                Notes
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="topic-actions">
                                    <span className="problem-badge">{topic.totalProblems} Problems</span>
                                    {expandedTopic === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </div>
                            </div>

                            {expandedTopic === index && (
                                <div className="topic-body">
                                    {topic.description && (
                                        <div className="topic-notes">
                                            <ReactMarkdown>{topic.description}</ReactMarkdown>
                                        </div>
                                    )}
                                    {topic.subtopics.map((subtopic, subIndex) => (
                                        <div key={subIndex} className="subtopic-group">
                                            <h4 className="subtopic-title">{subtopic.title}</h4>
                                            <div className="problems-grid">
                                                {subtopic.problems.map((problem, pIndex) => (
                                                    <div key={pIndex} className={`problem-item ${currentProgress[problem.title] ? 'is-completed' : ''}`}>
                                                        <div
                                                            className="checkbox-area"
                                                            onClick={() => toggleProblem(problem.title)}
                                                        >
                                                            {currentProgress[problem.title] ?
                                                                <CheckCircle size={22} className="check-icon completed" /> :
                                                                <Circle size={22} className="check-icon" />
                                                            }
                                                        </div>

                                                        <div className="problem-content">
                                                            <div className="problem-main">
                                                                <span className="problem-name">{problem.title}</span>
                                                                <span className={`platform-badge ${problem.platform.toLowerCase().replace(/\s/g, '-')}`}>
                                                                    {problem.platform}
                                                                </span>
                                                                {problem.companies && problem.companies.length > 0 && (
                                                                    <div className="company-tags">
                                                                        {problem.companies.slice(0, 3).map((company, i) => (
                                                                            <span key={i} className="company-badge">{company}</span>
                                                                        ))}
                                                                        {problem.companies.length > 3 && (
                                                                            <span className="company-badge more">+{problem.companies.length - 3}</span>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="problem-actions">
                                                                {/* Single Action Button with Priority: Link > Article > Search */}
                                                                {(() => {
                                                                    if (problem.link && problem.link !== '#') {
                                                                        return (
                                                                            <a href={problem.link} target="_blank" rel="noopener noreferrer" className="action-btn solve-btn">
                                                                                <PlayCircle size={14} />
                                                                                Solve
                                                                            </a>
                                                                        );
                                                                    } else if (problem.articleLink) {
                                                                        return (
                                                                            <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="action-btn notes-btn">
                                                                                <BookOpen size={14} />
                                                                                Read
                                                                            </a>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <a href={getSearchLink(problem)} target="_blank" rel="noopener noreferrer" className="action-btn search-btn">
                                                                                <Search size={14} />
                                                                                Find
                                                                            </a>
                                                                        );
                                                                    }
                                                                })()}


                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <Search size={48} className="text-gray-400 mb-4" />
                        <h3>No topics found</h3>
                        <p>Try searching for a different term matching a topic or problem.</p>
                    </div>
                )}
            </div>


        </div>
    );
};

export default PracticeSheet;
