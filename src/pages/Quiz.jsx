import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, ArrowRight, RotateCw, ChevronRight } from 'lucide-react'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import { quizTopics, getQuizByTopic } from '../data/quizData'
import './Quiz.css'

function Quiz() {
    const [activeTopic, setActiveTopic] = useState(null)
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [quizFinished, setQuizFinished] = useState(false)

    // Scroll to top when topic changes or quiz starts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [activeTopic, quizFinished])

    const handleStartQuiz = (topicId) => {
        setActiveTopic(topicId)
        setCurrentQuestionIdx(0)
        setScore(0)
        setQuizFinished(false)
        setShowResult(false)
        setSelectedOption(null)
    }

    const handleOptionSelect = (index) => {
        if (showResult) return
        setSelectedOption(index)
    }

    const handleSubmitAnswer = () => {
        if (selectedOption === null) return

        const questions = getQuizByTopic(activeTopic)
        const currentQ = questions[currentQuestionIdx]

        if (currentQ.answer === selectedOption) {
            setScore(s => s + 1)
        }
        setShowResult(true)
    }

    const handleNextQuestion = () => {
        const questions = getQuizByTopic(activeTopic)
        if (currentQuestionIdx + 1 < questions.length) {
            setCurrentQuestionIdx(p => p + 1)
            setSelectedOption(null)
            setShowResult(false)
        } else {
            setQuizFinished(true)
        }
    }

    const questions = activeTopic ? getQuizByTopic(activeTopic) : []
    const currentQ = questions[currentQuestionIdx]
    const currentTopic = quizTopics.find(t => t.id === activeTopic)

    return (
        <div className="app-container">
            <PageHeader
                title="Interactive Quizzes"
                subtitle="Test your knowledge across core engineering domains with our comprehensive question bank."
                showBack={!!activeTopic}
            />

            {/* Topic Selection */}
            {!activeTopic && (
                <div>
                    <div className="quiz-section-header">
                        <h2>Select a Topic</h2>
                        <p>Choose from our wide range of engineering subjects</p>
                    </div>
                    <div className="quiz-topics-grid">
                        {quizTopics.map(topic => (
                            <div key={topic.id} className="quiz-topic-card" onClick={() => handleStartQuiz(topic.id)}>
                                <span className={`quiz-difficulty-badge diff-${topic.difficulty.toLowerCase()}`}>
                                    {topic.difficulty}
                                </span>
                                <div className="quiz-icon-wrapper">
                                    <topic.icon size={24} />
                                </div>
                                <h3 className="quiz-card-title">{topic.name}</h3>
                                <p className="quiz-card-desc">Test your proficiency in {topic.name} concepts.</p>
                                <div className="quiz-count-badge">
                                    {topic.count} QUESTIONS
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quiz Interface */}
            {activeTopic && !quizFinished && currentQ && (
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    {/* Progress Bar */}
                    <div className="progress-container">
                        <Button variant="ghost" size="small" onClick={() => setActiveTopic(null)}>Exit Quiz</Button>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                        <span className="progress-text">
                            {currentQuestionIdx + 1}/{questions.length}
                        </span>
                    </div>

                    <div className="quiz-card-container">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                            <span className="quiz-badge">
                                {currentTopic?.name}
                            </span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Score: {score}
                            </span>
                        </div>

                        <h2 className="question-text">{currentQ.question}</h2>

                        <div className="options-grid">
                            {currentQ.options.map((opt, idx) => {
                                let cardClass = 'option-card'
                                if (showResult) {
                                    cardClass += ' disabled' // Disable hover effect
                                    if (idx === currentQ.answer) {
                                        cardClass += ' correct'
                                    } else if (idx === selectedOption) {
                                        cardClass += ' incorrect'
                                    }
                                } else if (selectedOption === idx) {
                                    cardClass += ' selected'
                                }

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        className={cardClass}
                                    >
                                        <div className="option-indicator">
                                            {showResult && idx === currentQ.answer && <CheckCircle size={14} color="#fff" />}
                                            {showResult && idx === selectedOption && idx !== currentQ.answer && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />}
                                            {!showResult && selectedOption === idx && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />}
                                        </div>
                                        {opt}
                                    </div>
                                )
                            })}
                        </div>

                        {showResult && (
                            <div className="explanation-box">
                                <div className="explanation-title">Explanation</div>
                                <p className="explanation-text">{currentQ.explanation}</p>
                            </div>
                        )}

                        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
                            {!showResult ? (
                                <Button variant="primary" onClick={handleSubmitAnswer} disabled={selectedOption === null}>
                                    Check Answer
                                </Button>
                            ) : (
                                <Button variant="primary" onClick={handleNextQuestion}>
                                    {currentQuestionIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={16} style={{ marginLeft: 8 }} />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Results */}
            {quizFinished && (
                <div className="results-container">
                    <div className="score-circle">
                        <span className="score-number">{score}</span>
                        <span className="score-total">out of {questions.length}</span>
                    </div>

                    <h2 className="result-message">
                        {score === questions.length ? 'Perfect Score! 🌟' :
                            score > questions.length * 0.8 ? 'Excellent Work! 🎉' :
                                score > questions.length * 0.5 ? 'Good Effort! 👍' : 'Keep Practicing! 💪'}
                    </h2>
                    <p className="result-subtext">
                        You've completed the {currentTopic?.name} quiz. Review the notes to improve your score.
                    </p>

                    <div className="action-buttons">
                        <Button variant="secondary" onClick={() => {
                            setQuizFinished(false)
                            setCurrentQuestionIdx(0)
                            setScore(0)
                            setShowResult(false)
                            setSelectedOption(null)
                        }}>
                            <RotateCw size={16} /> Retry Quiz
                        </Button>
                        <Button variant="primary" onClick={() => setActiveTopic(null)}>
                            Explore Other Topics <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz
