import { useState, useEffect, useRef } from 'react'
import { Send, Bot, User, Download, RefreshCw, Loader2, CheckCircle2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { InterviewManager, ConversationState } from '../utils/interviewManager'
import Button from '../components/Button'
import './Interview.css'

function Interview() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '')
    const [showSettings, setShowSettings] = useState(!localStorage.getItem('gemini_api_key'))
    const [interviewManager, setInterviewManager] = useState(null)
    const [interviewStarted, setInterviewStarted] = useState(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const startInterview = async () => {
        if (!apiKey) {
            setShowSettings(true)
            return
        }

        const manager = new InterviewManager(apiKey)
        setInterviewManager(manager)
        setInterviewStarted(true)

        // Get greeting
        const greeting = await manager.processMessage('')
        setMessages([{ id: Date.now(), sender: 'ai', text: greeting }])
    }

    const resetInterview = () => {
        setMessages([])
        setInterviewManager(null)
        setInterviewStarted(false)
        setInput('')
    }

    const exportTranscript = () => {
        if (!interviewManager) return

        const transcript = interviewManager.exportTranscript()
        const blob = new Blob([JSON.stringify(transcript, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `interview-${transcript.candidate.fullName || 'transcript'}-${Date.now()}.json`
        a.click()
        URL.revokeObjectURL(url)
    }

    const handleSend = async () => {
        if (!input.trim() || !interviewManager) return

        const userMessage = { id: Date.now(), sender: 'user', text: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await interviewManager.processMessage(input)
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: response }])
        } catch (error) {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'ai',
                text: 'Error: Could not process your message. Please try again.'
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const saveApiKey = (key) => {
        setApiKey(key)
        localStorage.setItem('gemini_api_key', key)
        setShowSettings(false)
    }

    const getProgressColor = (percentage) => {
        if (percentage < 30) return '#f5576c'
        if (percentage < 70) return '#ffa726'
        return '#10b981'
    }

    return (
        <div className="app-container">
            {/* Settings Modal */}
            {showSettings && (
                <div className="settings-modal-overlay">
                    <div className="settings-modal">
                        <h2 className="page-title" style={{ fontSize: 18, marginBottom: 16 }}>Configure API Key</h2>
                        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
                            You need a Gemini API key to use the mock interview feature.
                        </p>
                        <input
                            type="password"
                            placeholder="Paste Gemini API Key"
                            className="api-input"
                            defaultValue={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                        />
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                            <Button variant="primary" onClick={() => saveApiKey(apiKey)}>Save Key</Button>
                            {interviewStarted && (
                                <Button variant="ghost" onClick={() => setShowSettings(false)}>Cancel</Button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="interview-container">
                {/* Sidebar */}
                <div className="interview-sidebar">
                    <div className="sidebar-header">
                        <h2>Interview Dashboard</h2>
                    </div>

                    {interviewStarted && interviewManager ? (
                        <>
                            {/* Current Stage */}
                            <div className="sidebar-section">
                                <h3>Current Stage</h3>
                                <div className="stage-badge">
                                    {interviewManager.getStateDescription()}
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="sidebar-section">
                                <h3>Progress</h3>
                                <div className="progress-circle-container">
                                    <svg className="progress-circle" viewBox="0 0 120 120">
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            fill="none"
                                            stroke="var(--border-color)"
                                            strokeWidth="8"
                                        />
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            fill="none"
                                            stroke={getProgressColor(interviewManager.candidate.getCompletionPercentage())}
                                            strokeWidth="8"
                                            strokeDasharray={`${2 * Math.PI * 54}`}
                                            strokeDashoffset={`${2 * Math.PI * 54 * (1 - interviewManager.candidate.getCompletionPercentage() / 100)}`}
                                            strokeLinecap="round"
                                            transform="rotate(-90 60 60)"
                                        />
                                        <text x="60" y="60" textAnchor="middle" dy="7" fontSize="24" fontWeight="700" fill="var(--text-main)">
                                            {interviewManager.candidate.getCompletionPercentage()}%
                                        </text>
                                    </svg>
                                </div>
                            </div>

                            {/* Candidate Info */}
                            {interviewManager.candidate.fullName && (
                                <div className="sidebar-section">
                                    <h3>Candidate Info</h3>
                                    <div className="candidate-info">
                                        {interviewManager.candidate.fullName && (
                                            <div className="info-item">
                                                <span className="info-label">Name:</span>
                                                <span className="info-value">{interviewManager.candidate.fullName}</span>
                                            </div>
                                        )}
                                        {interviewManager.candidate.email && (
                                            <div className="info-item">
                                                <span className="info-label">Email:</span>
                                                <span className="info-value">{interviewManager.candidate.email}</span>
                                            </div>
                                        )}
                                        {interviewManager.candidate.yearsExperience !== null && (
                                            <div className="info-item">
                                                <span className="info-label">Experience:</span>
                                                <span className="info-value">{interviewManager.candidate.yearsExperience} years</span>
                                            </div>
                                        )}
                                        {interviewManager.candidate.desiredPositions.length > 0 && (
                                            <div className="info-item">
                                                <span className="info-label">Position:</span>
                                                <span className="info-value">{interviewManager.candidate.desiredPositions.join(', ')}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="sidebar-section">
                                <h3>Actions</h3>
                                <div className="sidebar-actions">
                                    <Button variant="outline" size="small" onClick={exportTranscript} style={{ width: '100%' }}>
                                        <Download size={16} /> Export
                                    </Button>
                                    <Button variant="outline" size="small" onClick={resetInterview} style={{ width: '100%' }}>
                                        <RefreshCw size={16} /> Reset
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="sidebar-section">
                            <div className="welcome-info">
                                <h3>Welcome!</h3>
                                <p>Start the mock interview to practice your interview skills with our AI interviewer.</p>

                                <div className="interview-steps">
                                    <h4>Interview Process:</h4>
                                    <ol>
                                        <li>Basic Information</li>
                                        <li>Professional Experience</li>
                                        <li>Technical Skills</li>
                                        <li>Technical Q&A</li>
                                        <li>Wrap Up</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Main Chat Area */}
                <div className="interview-main">
                    {!interviewStarted ? (
                        <div className="interview-welcome">
                            <div className="welcome-card-interview">
                                <div className="welcome-icon">
                                    <Bot size={64} />
                                </div>
                                <h1>Mock Interview Practice</h1>
                                <p>
                                    Practice your interview skills with our AI-powered interviewer.
                                    Get real-time feedback and improve your responses.
                                </p>
                                <Button variant="primary" size="large" onClick={startInterview}>
                                    Start Interview
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Messages */}
                            <div className="interview-messages">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                                        <div className="message-avatar">
                                            {msg.sender === 'ai' ? <Bot size={20} /> : <User size={20} />}
                                        </div>
                                        <div className="message-bubble">
                                            {msg.sender === 'ai' ? (
                                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="message-wrapper ai">
                                        <div className="message-avatar"><Bot size={20} /></div>
                                        <div className="message-bubble">
                                            <Loader2 className="animate-spin" size={16} style={{ marginRight: 8 }} />
                                            Thinking...
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            {interviewManager?.state !== ConversationState.ENDED ? (
                                <div className="interview-input-area">
                                    <textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault()
                                                handleSend()
                                            }
                                        }}
                                        placeholder="Type your response..."
                                        rows={2}
                                        className="interview-input"
                                    />
                                    <button
                                        className="interview-send-btn"
                                        onClick={handleSend}
                                        disabled={isLoading || !input.trim()}
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            ) : (
                                <div className="interview-completed">
                                    <CheckCircle2 size={48} style={{ color: '#10b981' }} />
                                    <h2>Interview Completed!</h2>
                                    <p>Thank you for completing the mock interview. You can export the transcript or start a new interview.</p>
                                    <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                                        <Button variant="primary" onClick={exportTranscript}>
                                            <Download size={16} /> Export Transcript
                                        </Button>
                                        <Button variant="outline" onClick={resetInterview}>
                                            <RefreshCw size={16} /> New Interview
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Interview
