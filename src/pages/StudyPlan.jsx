import { useState } from 'react';
import { Calendar, Download, ArrowRight, CheckCircle, Clock, Target, TrendingUp, Book, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { STUDY_PLANS, ROLE_CATEGORIES } from '../data/studyPlans';
import './StudyPlan.css';

function StudyPlan() {
    const [selectedRole, setSelectedRole] = useState('');
    const [customRole, setCustomRole] = useState('');
    const [generated, setGenerated] = useState(false);
    const [expandedWeeks, setExpandedWeeks] = useState(new Set([1]));
    const [completedWeeks, setCompletedWeeks] = useState(new Set());
    const [showCategories, setShowCategories] = useState(true);

    const handleGenerate = () => {
        const role = customRole || selectedRole;
        if (!role) return;
        setGenerated(true);
        setExpandedWeeks(new Set([1])); // Expand first week by default
    };

    const toggleWeek = (weekNum) => {
        const newExpanded = new Set(expandedWeeks);
        if (newExpanded.has(weekNum)) {
            newExpanded.delete(weekNum);
        } else {
            newExpanded.add(weekNum);
        }
        setExpandedWeeks(newExpanded);
    };

    const toggleComplete = (weekNum) => {
        const newCompleted = new Set(completedWeeks);
        if (newCompleted.has(weekNum)) {
            newCompleted.delete(weekNum);
        } else {
            newCompleted.add(weekNum);
        }
        setCompletedWeeks(newCompleted);
    };

    const currentRole = customRole || selectedRole;
    const currentPlan = STUDY_PLANS[currentRole] || STUDY_PLANS['Frontend Developer'];
    const progress = (completedWeeks.size / (currentPlan.weeks?.length || 6)) * 100;

    if (!generated) {
        return (
            <div className="study-plan-container">
                <header className="study-plan-header">
                    <h1>Personalized Study Roadmap</h1>
                    <p>Generate a structured 6-week plan tailored to your target role</p>
                </header>

                <div className="role-selection-card">
                    <div className="selection-header">
                        <h3>Select Your Target Role</h3>
                        <p>Choose from popular roles or enter a custom role</p>
                    </div>

                    {showCategories ? (
                        <div className="role-categories">
                            {Object.entries(ROLE_CATEGORIES).map(([category, roles]) => (
                                <div key={category} className="category-section">
                                    <h4 className="category-title">{category}</h4>
                                    <div className="role-grid">
                                        {roles.map(role => (
                                            <button
                                                key={role}
                                                className={`role-button ${selectedRole === role ? 'active' : ''}`}
                                                onClick={() => {
                                                    setSelectedRole(role);
                                                    setCustomRole('');
                                                }}
                                            >
                                                <span className="role-name">{role}</span>
                                                {STUDY_PLANS[role] && (
                                                    <span className="role-badge">
                                                        {STUDY_PLANS[role].totalHours}h
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    <div className="custom-role-input">
                        <label>Or enter a custom role</label>
                        <input
                            type="text"
                            placeholder="e.g., Machine Learning Engineer, Blockchain Developer..."
                            value={customRole}
                            onChange={(e) => {
                                setCustomRole(e.target.value);
                                setSelectedRole('');
                            }}
                            className="role-input"
                        />
                    </div>

                    <button
                        className="generate-button"
                        onClick={handleGenerate}
                        disabled={!selectedRole && !customRole}
                    >
                        Generate Roadmap <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="study-plan-container">
            <div className="roadmap-header">
                <div className="header-content">
                    <button className="back-link" onClick={() => setGenerated(false)}>
                        ← Back to Role Selection
                    </button>
                    <h1>{currentRole} Study Roadmap</h1>
                    <p className="roadmap-description">{currentPlan.description}</p>
                </div>

                <div className="roadmap-stats">
                    <div className="stat-card">
                        <Clock size={20} />
                        <div>
                            <span className="stat-label">Duration</span>
                            <span className="stat-value">{currentPlan.duration}</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Target size={20} />
                        <div>
                            <span className="stat-label">Total Hours</span>
                            <span className="stat-value">{currentPlan.totalHours}h</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <TrendingUp size={20} />
                        <div>
                            <span className="stat-label">Difficulty</span>
                            <span className="stat-value">{currentPlan.difficulty}</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Award size={20} />
                        <div>
                            <span className="stat-label">Progress</span>
                            <span className="stat-value">{Math.round(progress)}%</span>
                        </div>
                    </div>
                </div>

                {progress > 0 && (
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className="progress-text">
                            {completedWeeks.size} of {currentPlan.weeks.length} weeks completed
                        </span>
                    </div>
                )}
            </div>

            <div className="weeks-container">
                {currentPlan.weeks.map((week) => {
                    const isExpanded = expandedWeeks.has(week.week);
                    const isCompleted = completedWeeks.has(week.week);

                    return (
                        <div key={week.week} className={`week-card ${isCompleted ? 'completed' : ''}`}>
                            <div className="week-header" onClick={() => toggleWeek(week.week)}>
                                <div className="week-title-section">
                                    <div className="week-number">{week.week}</div>
                                    <div className="week-info">
                                        <h3>Week {week.week}: {week.topic}</h3>
                                        <p className="week-focus">{week.focus}</p>
                                        <div className="week-meta">
                                            <span className="meta-item">
                                                <Clock size={14} /> {week.hours} hours
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="week-actions">
                                    <button
                                        className={`complete-button ${isCompleted ? 'completed' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleComplete(week.week);
                                        }}
                                    >
                                        <CheckCircle size={18} />
                                        {isCompleted ? 'Completed' : 'Mark Complete'}
                                    </button>
                                    <button className="expand-button">
                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <div className="week-details">
                                    <div className="detail-section">
                                        <h4><Calendar size={16} /> Daily Breakdown</h4>
                                        <ul className="task-list">
                                            {week.dailyTasks.map((task, idx) => (
                                                <li key={idx}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4><Book size={16} /> Learning Resources</h4>
                                        <div className="resource-tags">
                                            {week.resources.map((resource, idx) => (
                                                <span key={idx} className="resource-tag">{resource}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="detail-section">
                                        <h4><Target size={16} /> Projects</h4>
                                        <ul className="project-list">
                                            {week.projects.map((project, idx) => (
                                                <li key={idx}>{project}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="detail-section assessment-section">
                                        <h4><Award size={16} /> Week Assessment</h4>
                                        <p className="assessment-text">{week.assessment}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="roadmap-footer">
                <div className="footer-content">
                    <h3>Ready to start a different path?</h3>
                    <p>Generate a new roadmap for another role</p>
                    <button className="regenerate-button" onClick={() => {
                        setGenerated(false);
                        setCompletedWeeks(new Set());
                        setExpandedWeeks(new Set([1]));
                    }}>
                        Generate New Roadmap
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudyPlan;
