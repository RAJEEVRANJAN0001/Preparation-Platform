import React, { useState } from 'react';
import { interviewRoles } from '../data/interviewData';
import { analyzeAnswer } from '../utils/api';
import ReactMarkdown from 'react-markdown';
import {
    Code2, Database, Layers, Infinity as InfinityIcon,
    BarChart, Users, Palette, Briefcase, ChevronLeft,
    ChevronRight, Send, Smartphone, TestTube, Shield,
    Cloud, Brain, TrendingUp, FileText, Server
} from 'lucide-react';
import './Interview.css';

const Interview = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setCurrentQuestionIndex(0);
        setUserAnswer('');
        setFeedback(null);
        setError(null);
    };

    const handleBackToRoles = () => {
        setSelectedRole(null);
        setUserAnswer('');
        setFeedback(null);
        setError(null);
    };

    const handleAnswerChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleSubmit = async () => {
        if (!userAnswer.trim()) return;

        setLoading(true);
        setError(null);
        try {
            const currentQuestion = selectedRole.questions[currentQuestionIndex];
            const result = await analyzeAnswer(currentQuestion, userAnswer, selectedRole.title);
            setFeedback(result);
        } catch (err) {
            setError(err.message || 'Failed to analyze answer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < selectedRole.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setUserAnswer('');
            setFeedback(null);
            setError(null);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setUserAnswer('');
            setFeedback(null);
            setError(null);
        }
    };

    // Helper to get icon for role
    const getRoleIcon = (roleId) => {
        const icons = {
            'frontend': <Code2 size={24} />,
            'backend': <Database size={24} />,
            'fullstack': <Layers size={24} />,
            'devops': <InfinityIcon size={24} />,
            'datascientist': <BarChart size={24} />,
            'productmanager': <Users size={24} />,
            'uiux': <Palette size={24} />,
            'mobile': <Smartphone size={24} />,
            'qa': <TestTube size={24} />,
            'security': <Shield size={24} />,
            'cloudarchitect': <Cloud size={24} />,
            'mlengineer': <Brain size={24} />,
            'businessanalyst': <TrendingUp size={24} />,
            'technicalwriter': <FileText size={24} />,
            'sysadmin': <Server size={24} />
        };
        return icons[roleId] || <Briefcase size={24} />;
    };

    if (!selectedRole) {
        return (
            <div className="interview-container">
                <header className="interview-header">
                    <h1>Tech Interview Practice</h1>
                    <p>Select a role to start your professional mock interview</p>
                </header>

                <div className="roles-grid">
                    {interviewRoles.map(role => (
                        <div
                            key={role.id}
                            className="role-card"
                            onClick={() => handleRoleSelect(role)}
                        >
                            <div className="role-icon">
                                {getRoleIcon(role.id)}
                            </div>
                            <h3>{role.title}</h3>
                            <p>{role.description}</p>
                            <span className="question-count">{role.questions.length} Questions</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="interview-container">
            <button className="back-button" onClick={handleBackToRoles}>
                <ChevronLeft size={20} /> Back to Roles
            </button>

            <div className="question-section">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestionIndex + 1) / selectedRole.questions.length) * 100}%` }}
                    ></div>
                </div>

                <span className="question-counter">
                    Question {currentQuestionIndex + 1} of {selectedRole.questions.length}
                </span>

                <h2 className="question-text">
                    {selectedRole.questions[currentQuestionIndex]}
                </h2>

                <div className="answer-area">
                    <textarea
                        value={userAnswer}
                        onChange={handleAnswerChange}
                        placeholder="Type your professional answer here..."
                        disabled={loading}
                    />

                    <div className="action-buttons">
                        <button
                            className="nav-button"
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0 || loading}
                        >
                            <ChevronLeft size={16} /> Previous
                        </button>

                        <button
                            className="submit-button"
                            onClick={handleSubmit}
                            disabled={!userAnswer.trim() || loading}
                        >
                            {loading ? 'Analyzing...' : <>Analyze Answer <Send size={16} /></>}
                        </button>

                        <button
                            className="nav-button"
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === selectedRole.questions.length - 1 || loading}
                        >
                            Next <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                {feedback && (
                    <div className="feedback-section">
                        <h3>AI Feedback</h3>
                        <div className="feedback-content">
                            <ReactMarkdown>{feedback}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Interview;
