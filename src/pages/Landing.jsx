import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Target, Zap, Award, Users, TrendingUp, Code, Database, Globe, Brain, Layout, CheckCircle } from 'lucide-react'
import './Landing.css'

function Landing() {
    const stats = [
        { number: '175+', label: 'Interview Questions' },
        { number: '50+', label: 'Study Resources' },
        { number: '5', label: 'Career Paths' },
        { number: '∞', label: 'AI-Powered Practice' }
    ]

    const features = [
        {
            icon: <Target size={28} />,
            title: 'Role-Based Preparation',
            description: 'Tailored content for Frontend, Backend, Full Stack, Data Analyst, and DevOps roles.',
            color: '#3b82f6',
            size: 'large'
        },
        {
            icon: <Zap size={28} />,
            title: 'Interactive Learning',
            description: 'Engaging quizzes, coding challenges, and scenario-based problems.',
            color: '#f59e0b',
            size: 'small'
        },
        {
            icon: <Award size={28} />,
            title: 'Structured Roadmaps',
            description: 'Step-by-step learning paths designed by industry experts.',
            color: '#10b981',
            size: 'small'
        },
        {
            icon: <Brain size={28} />,
            title: 'AI Mock Interviews',
            description: 'Practice with our advanced AI to simulate real interview scenarios.',
            color: '#8b5cf6',
            size: 'small'
        },
        {
            icon: <Layout size={28} />,
            title: 'Company Specific Notes',
            description: 'Exclusive placement materials for top tech companies.',
            color: '#ec4899',
            size: 'large'
        }
    ]

    const skills = [
        "React", "Node.js", "Python", "System Design", "DSA", "SQL", "DevOps", "Java", "JavaScript", "AWS", "Docker", "Kubernetes", "GraphQL", "MongoDB"
    ]

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="landing-hero">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                    <div className="grid-overlay"></div>

                    {/* Glassy Bubbles Animation */}
                    <div className="bubbles-container">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="glassy-bubble"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 50 + 10}px`,
                                    height: `${Math.random() * 50 + 10}px`,
                                    animationDelay: `${Math.random() * 10}s`,
                                    animationDuration: `${Math.random() * 10 + 10}s`,
                                    opacity: Math.random() * 0.4 + 0.1
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="hero-content">
                    <div className="hero-text-content">
                        <div className="hero-badge">
                            <Sparkles size={14} className="sparkle-icon" />
                            <span>The Ultimate Placement Platform</span>
                        </div>
                        <h1 className="hero-title">
                            Master Your Skills.<br />
                            <span className="gradient-text">Level Up Your Placement.</span>
                        </h1>

                        <p className="hero-subtitle">
                            Transform your preparation journey with our comprehensive resources,
                            and expert-curated content. Everything you need to land your dream tech job.
                        </p>

                        <div className="hero-cta-group">
                            <Link to="/dashboard" className="hero-cta primary">
                                Start Preparing Free <ArrowRight size={20} />
                            </Link>
                            <Link to="/roadmap" className="hero-cta secondary">
                                View Roadmaps
                            </Link>
                        </div>
                    </div>

                    {/* 3D Dashboard Mockup */}
                    <div className="hero-visual">
                        <div className="dashboard-mockup-wrapper">
                            <div className="dashboard-mockup">
                                <div className="mockup-header">
                                    <div className="mockup-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="mockup-search"></div>
                                </div>
                                <div className="mockup-body">
                                    <div className="mockup-sidebar"></div>
                                    <div className="mockup-main">
                                        <div className="mockup-card large"></div>
                                        <div className="mockup-row">
                                            <div className="mockup-card"></div>
                                            <div className="mockup-card"></div>
                                        </div>
                                        <div className="mockup-card wide"></div>
                                    </div>
                                </div>
                                <div className="glow-effect"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Infinite Marquee */}
            <div className="skills-marquee">
                <div className="marquee-content">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            <CheckCircle size={16} /> {skill}
                        </span>
                    ))}
                    {/* Duplicate for seamless scrolling */}
                    {skills.map((skill, index) => (
                        <span key={`dup-${index}`} className="skill-tag">
                            <CheckCircle size={16} /> {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Features Section - Bento Grid */}
            <section className="landing-features">
                <div className="features-container">
                    <div className="features-header">
                        <div className="section-badge">Why Choose Us</div>
                        <h2>Everything You Need to Succeed</h2>
                        <p>Comprehensive preparation platform designed for modern tech interviews</p>
                    </div>

                    <div className="features-bento-grid">
                        {features.map((feature, index) => (
                            <div key={index} className={`feature-card ${feature.size}`} style={{ '--feature-color': feature.color }}>
                                <div className="feature-icon-wrapper">
                                    <div className="feature-icon">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                <div className="feature-shine"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="landing-cta">
                <div className="cta-content">
                    <h2>Ready to Ace Your Interviews?</h2>
                    <p>Join the platform trusted by thousands of aspiring developers</p>
                    <Link to="/dashboard" className="cta-button">
                        Get Started Now <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Landing
