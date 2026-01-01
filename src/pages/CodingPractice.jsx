import { useState } from 'react'
import { Code, Briefcase, CheckCircle2, ChevronRight, Target, BookOpen, AlertCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import { interviewQuestionsByRole } from '../data/questionBankData'
import './CodingPractice.css'

function CodingPractice() {
    const [selectedRole, setSelectedRole] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('technical')
    const [expandedQuestion, setExpandedQuestion] = useState(null)

    const roles = Object.keys(interviewQuestionsByRole)

    const handleRoleSelect = (role) => {
        setSelectedRole(role)
        setSelectedCategory('technical')
        setExpandedQuestion(null)
    }

    const currentRoleData = selectedRole ? interviewQuestionsByRole[selectedRole] : null
    const currentQuestions = currentRoleData ? currentRoleData[selectedCategory] : []

    return (
        <div className="app-container">
            <PageHeader
                title="Interview Question Bank"
                subtitle="Comprehensive interview questions organized by role and category"
                showBack={true}
            />

            {!selectedRole ? (
                /* Role Selection */
                <div>
                    <div className="section-header">
                        <h2>Select Your Target Role</h2>
                        <p>Choose a role to view curated interview questions</p>
                    </div>

                    <div className="role-selection-grid">
                        {roles.map(role => {
                            const roleData = interviewQuestionsByRole[role]
                            const totalQuestions = roleData.technical.length + roleData.behavioral.length + roleData.coding.length
                            return (
                                <button
                                    key={role}
                                    className="role-card-qb"
                                    onClick={() => handleRoleSelect(role)}
                                >
                                    <div className="role-icon-qb" style={{ background: roleData.color }}>
                                        {roleData.icon}
                                    </div>
                                    <h3>{role}</h3>
                                    <div className="role-stats">
                                        <span className="stat-badge technical">{roleData.technical.length} Technical</span>
                                        <span className="stat-badge behavioral">{roleData.behavioral.length} Behavioral</span>
                                        <span className="stat-badge coding">{roleData.coding.length} Coding</span>
                                    </div>
                                    <div className="role-total">{totalQuestions} Questions Total</div>
                                    <ChevronRight className="role-arrow" size={20} />
                                </button>
                            )
                        })}
                    </div>
                </div>
            ) : (
                /* Questions Display */
                <div>
                    <div className="selected-role-header">
                        <button className="back-to-roles" onClick={() => setSelectedRole(null)}>
                            ← Back to Roles
                        </button>
                        <div className="role-title-section">
                            <span className="role-icon-large" style={{ background: currentRoleData.color }}>
                                {currentRoleData.icon}
                            </span>
                            <div>
                                <h2>{selectedRole}</h2>
                                <p>{currentRoleData.technical.length + currentRoleData.behavioral.length + currentRoleData.coding.length} Questions Available</p>
                            </div>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="category-tabs">
                        <button
                            className={`category-tab ${selectedCategory === 'technical' ? 'active' : ''}`}
                            onClick={() => { setSelectedCategory('technical'); setExpandedQuestion(null); }}
                        >
                            <BookOpen size={18} />
                            Technical ({currentRoleData.technical.length})
                        </button>
                        <button
                            className={`category-tab ${selectedCategory === 'behavioral' ? 'active' : ''}`}
                            onClick={() => { setSelectedCategory('behavioral'); setExpandedQuestion(null); }}
                        >
                            <Target size={18} />
                            Behavioral ({currentRoleData.behavioral.length})
                        </button>
                        <button
                            className={`category-tab ${selectedCategory === 'coding' ? 'active' : ''}`}
                            onClick={() => { setSelectedCategory('coding'); setExpandedQuestion(null); }}
                        >
                            <Code size={18} />
                            Coding ({currentRoleData.coding.length})
                        </button>
                    </div>

                    {/* Questions List */}
                    <div className="questions-container">
                        <div className="questions-list">
                            {currentQuestions.map((question, idx) => (
                                <div key={idx} className="question-card">
                                    <div className="question-header-row">
                                        <div className="question-number">Q{idx + 1}</div>
                                        <div className="question-text">{question}</div>
                                        <button
                                            className="expand-btn"
                                            onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
                                        >
                                            {expandedQuestion === idx ? '−' : '+'}
                                        </button>
                                    </div>
                                    {expandedQuestion === idx && (
                                        <div className="question-expanded">
                                            <div className="tip-section">
                                                <AlertCircle size={16} />
                                                <div>
                                                    <strong>Tips for answering:</strong>
                                                    <ul>
                                                        <li>Take a moment to think before answering</li>
                                                        <li>Provide specific examples from your experience</li>
                                                        <li>Structure your answer clearly (STAR method for behavioral)</li>
                                                        <li>Be honest about what you know and don't know</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="practice-actions">
                                                <button className="practice-btn">
                                                    <CheckCircle2 size={16} />
                                                    Mark as Practiced
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Sidebar Tips */}
                        <div className="questions-sidebar-tips">
                            <div className="tip-card">
                                <h4>💡 Preparation Tips</h4>
                                <ul>
                                    <li>Practice explaining concepts out loud</li>
                                    <li>Use the STAR method for behavioral questions</li>
                                    <li>Prepare real examples from your experience</li>
                                    <li>Review these questions daily</li>
                                    <li>Mock interview with peers</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <h4>📚 Study Resources</h4>
                                <p>Check out the <strong>Notes</strong> section for detailed study materials on each topic.</p>
                                <p>Use the <strong>Mock Interview</strong> feature to practice these questions with AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CodingPractice
