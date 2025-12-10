import { useState } from 'react'
import { CheckCircle2, Circle, Clock, BookOpen, TrendingUp } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import roadmapData from '../data/roadmapData'
import './Roadmap.css'

function Roadmap() {
    const [selectedRoadmap, setSelectedRoadmap] = useState('frontend')
    const [completedMilestones, setCompletedMilestones] = useState(() => {
        const saved = localStorage.getItem('roadmap_progress')
        return saved ? JSON.parse(saved) : {}
    })

    const toggleMilestone = (roadmapId, milestoneId) => {
        const key = `${roadmapId}_${milestoneId}`
        const newCompleted = {
            ...completedMilestones,
            [key]: !completedMilestones[key]
        }
        setCompletedMilestones(newCompleted)
        localStorage.setItem('roadmap_progress', JSON.stringify(newCompleted))
    }

    const isMilestoneCompleted = (roadmapId, milestoneId) => {
        return completedMilestones[`${roadmapId}_${milestoneId}`] || false
    }

    const getCompletionPercentage = (roadmapId) => {
        const roadmap = roadmapData[roadmapId]
        if (!roadmap) return 0
        const total = roadmap.milestones.length
        const completed = roadmap.milestones.filter(m =>
            isMilestoneCompleted(roadmapId, m.id)
        ).length
        return Math.round((completed / total) * 100)
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return '#10b981'
            case 'Intermediate': return '#ffa726'
            case 'Advanced': return '#f5576c'
            default: return '#667eea'
        }
    }

    const currentRoadmap = roadmapData[selectedRoadmap]

    return (
        <div className="app-container">
            <PageHeader
                title="Learning Roadmaps"
                subtitle="Structured paths to master different tech domains"
                showBack={false}
            />

            {/* Roadmap Selector */}
            <div className="roadmap-selector">
                {Object.values(roadmapData).map((roadmap) => (
                    <button
                        key={roadmap.id}
                        className={`roadmap-tab ${selectedRoadmap === roadmap.id ? 'active' : ''}`}
                        onClick={() => setSelectedRoadmap(roadmap.id)}
                        style={{
                            '--roadmap-color': roadmap.color
                        }}
                    >
                        <span className="roadmap-icon">{roadmap.icon}</span>
                        <div className="roadmap-tab-info">
                            <span className="roadmap-tab-title">{roadmap.title}</span>
                            <span className="roadmap-tab-progress">
                                {getCompletionPercentage(roadmap.id)}% Complete
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Roadmap Header */}
            <div className="roadmap-header" style={{ background: currentRoadmap.color }}>
                <div className="roadmap-header-content">
                    <div className="roadmap-icon-large">{currentRoadmap.icon}</div>
                    <div>
                        <h2>{currentRoadmap.title}</h2>
                        <p>{currentRoadmap.description}</p>
                    </div>
                </div>
                <div className="roadmap-stats">
                    <div className="roadmap-stat">
                        <Clock size={20} />
                        <span>{currentRoadmap.estimatedTime}</span>
                    </div>
                    <div className="roadmap-stat">
                        <TrendingUp size={20} />
                        <span>{getCompletionPercentage(currentRoadmap.id)}% Done</span>
                    </div>
                    <div className="roadmap-stat">
                        <BookOpen size={20} />
                        <span>{currentRoadmap.milestones.length} Milestones</span>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="roadmap-timeline">
                {currentRoadmap.milestones.map((milestone, index) => {
                    const isCompleted = isMilestoneCompleted(currentRoadmap.id, milestone.id)

                    return (
                        <div key={milestone.id} className={`milestone-card ${isCompleted ? 'completed' : ''}`}>
                            {/* Timeline Connector */}
                            <div className="timeline-connector">
                                <div className="timeline-dot" style={{
                                    background: isCompleted ? '#10b981' : getDifficultyColor(milestone.difficulty)
                                }}>
                                    {isCompleted ? (
                                        <CheckCircle2 size={20} color="white" />
                                    ) : (
                                        <span className="milestone-number">{index + 1}</span>
                                    )}
                                </div>
                                {index < currentRoadmap.milestones.length - 1 && (
                                    <div className={`timeline-line ${isCompleted ? 'completed' : ''}`} />
                                )}
                            </div>

                            {/* Milestone Content */}
                            <div className="milestone-content">
                                <div className="milestone-header">
                                    <div>
                                        <h3>{milestone.title}</h3>
                                        <p className="milestone-description">{milestone.description}</p>
                                    </div>
                                    <button
                                        className={`milestone-check-btn ${isCompleted ? 'checked' : ''}`}
                                        onClick={() => toggleMilestone(currentRoadmap.id, milestone.id)}
                                    >
                                        {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                                    </button>
                                </div>

                                <div className="milestone-meta">
                                    <span
                                        className="difficulty-badge"
                                        style={{ background: getDifficultyColor(milestone.difficulty) }}
                                    >
                                        {milestone.difficulty}
                                    </span>
                                    <span className="time-badge">
                                        <Clock size={14} />
                                        {milestone.estimatedHours}h
                                    </span>
                                </div>

                                {/* Topics */}
                                <div className="milestone-topics">
                                    <h4>Topics to Cover:</h4>
                                    <ul>
                                        {milestone.topics.map((topic, idx) => (
                                            <li key={idx}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Resources */}
                                {milestone.resources && milestone.resources.length > 0 && (
                                    <div className="milestone-resources">
                                        <h4>Recommended Resources:</h4>
                                        <div className="resource-links">
                                            {milestone.resources.map((resource, idx) => (
                                                <a
                                                    key={idx}
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="resource-link"
                                                >
                                                    {resource.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Roadmap
