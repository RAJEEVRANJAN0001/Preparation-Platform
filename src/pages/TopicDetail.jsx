import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Award, BookOpen, CheckCircle, ExternalLink } from 'lucide-react'
import { topicsData } from '../data/topicsData'
import './TopicDetail.css'

function TopicDetail() {
    const { topicId } = useParams()
    const navigate = useNavigate()
    const topic = topicsData[topicId]

    if (!topic) {
        return (
            <div className="app-container">
                <div style={{ textAlign: 'center', padding: 60 }}>
                    <h2>Topic Not Found</h2>
                    <Link to="/dashboard">← Back to Dashboard</Link>
                </div>
            </div>
        )
    }

    const handleComplete = () => {
        alert(`Congratulations! You've completed "${topic.title}" and earned 50 XP!`)
    }

    return (
        <div className="app-container">
            {/* Header */}
            <div className="topic-header">
                <button onClick={() => navigate('/dashboard')} className="back-btn">
                    <ArrowLeft size={18} /> Back to Dashboard
                </button>

                <div className="topic-title-section">
                    <h1 className="topic-title">{topic.title}</h1>
                    <p className="topic-description">{topic.description}</p>
                </div>

                <div className="topic-meta">
                    <span className={`badge badge-${topic.difficulty === 'Hard' ? 'orange' : topic.difficulty === 'Medium' ? 'blue' : 'green'}`}>
                        {topic.difficulty}
                    </span>
                    <span className="badge badge-purple">{topic.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                        <Clock size={14} /> {topic.time}
                    </span>
                </div>
            </div>

            {/* Overview */}
            <div className="dense-card" style={{ marginBottom: 24, padding: 24, background: 'var(--primary-light)', borderColor: 'var(--primary)' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Award size={18} /> What You'll Learn
                </h3>
                <p style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>{topic.overview}</p>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {topic.keyPoints.map((point, idx) => (
                        <li key={idx} style={{ marginBottom: 6 }}>{point}</li>
                    ))}
                </ul>
            </div>

            {/* Content Sections */}
            <div className="topic-content">
                {topic.sections.map((section, idx) => (
                    <div key={idx} className="content-section dense-card">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="section-content" dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br/>').replace(/```(\w+)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>') }} />
                    </div>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="topic-sidebar-layout">

                {/* Practice Problems */}
                <div>
                    <h3 style={{ fontSize: 16, marginBottom: 16 }}>Practice Problems</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {topic.practiceProblems.map((problem, idx) => (
                            <div key={idx} className="practice-card dense-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 500, fontSize: 14 }}>{problem.title}</span>
                                    <span className={`badge badge-${problem.difficulty === 'Hard' ? 'orange' : problem.difficulty === 'Medium' ? 'blue' : 'green'}`}>
                                        {problem.difficulty}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 style={{ fontSize: 16, marginBottom: 16 }}>Resources</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {topic.resources.map((resource, idx) => (
                            <div key={idx} className="resource-card dense-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <BookOpen size={18} color="var(--primary)" />
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ fontWeight: 500, fontSize: 14 }}>{resource.title}</div>
                                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{resource.type}</div>
                                    </div>
                                    <ExternalLink size={16} color="var(--text-muted)" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Complete Button */}
                    <button
                        onClick={handleComplete}
                        className="complete-btn"
                        style={{
                            marginTop: 24,
                            width: '100%',
                            padding: 16,
                            background: 'var(--accent-green)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 8,
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            transition: 'all 0.3s'
                        }}
                    >
                        <CheckCircle size={20} /> Mark as Complete
                    </button>
                </div>

            </div>

        </div>
    )
}

export default TopicDetail
