import { Link } from 'react-router-dom'
import { ArrowRight, Bot, BookOpen, BrainCircuit, Calendar } from 'lucide-react'
import './Landing.css'

function Landing() {
    const features = [
        {
            icon: <Bot size={24} />,
            title: 'AI-Powered Mentor',
            description: 'Get instant answers to your technical questions with our advanced Gemini-powered AI assistant.'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Curated Resources',
            description: 'Access a comprehensive library of notes covering DSA, System Design, and Core CS subjects.'
        },
        {
            icon: <BrainCircuit size={24} />,
            title: 'Interactive Quizzes',
            description: 'Test your knowledge with topic-wise MCQs and get instant feedback with explanations.'
        },
        {
            icon: <Calendar size={24} />,
            title: 'Study Roadmaps',
            description: 'Follow structured learning paths for Frontend, Backend, DSA, and System Design.'
        },
        {
            icon: <Bot size={24} />,
            title: 'Mock Interviews',
            description: 'Practice with AI-powered mock interviews and get real-time feedback on your responses.'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Resume Analyzer',
            description: 'Get AI-powered feedback on your resume with ATS compatibility scores and suggestions.'
        }
    ]

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="landing-hero">
                <div className="hero-content">
                    <div className="hero-badge">Placement Preparation Platform</div>

                    <h1 className="hero-title">
                        Master Your Technical Interviews
                    </h1>

                    <p className="hero-subtitle">
                        A complete suite of AI-powered tools, structured notes, and practice quizzes
                        to help you crack your dream job at top tech companies.
                    </p>

                    <Link to="/dashboard" className="hero-cta">
                        Get Started <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="landing-features">
                <div className="features-container">
                    <div className="features-header">
                        <h2>Everything You Need to Succeed</h2>
                        <p>Comprehensive tools and resources in one unified platform</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
