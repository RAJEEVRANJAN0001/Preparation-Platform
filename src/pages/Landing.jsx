import { Link } from 'react-router-dom'

import { ArrowRight, Sparkles, Target, Zap, Award, Users, TrendingUp, Code, Database, Globe, Brain, Layout, CheckCircle, FileText, HelpCircle } from 'lucide-react'
import './Landing.css'

function Landing() {
    const stats = [
        { number: '600+', label: 'Practice Problems' },
        { number: '600+', label: 'Quiz Questions' },
        { number: '20+', label: 'Career Paths' },
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
            icon: <FileText size={28} />,
            title: 'Practice Sheets',
            description: 'Comprehensive practice problems and coding exercises for hands-on learning.',
            color: '#06b6d4',
            size: 'small'
        },
        {
            icon: <HelpCircle size={28} />,
            title: 'Interactive Quizzes',
            description: 'Test your knowledge with topic-wise quizzes and instant feedback.',
            color: '#f97316',
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
            <section className="landing-hero glass-hero-mode">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                    <div className="grid-overlay"></div>
                </div>

                {/* Floating Glass Spheres */}
                <div className="glass-spheres-container">
                    <div className="glass-sphere sphere-1"></div>
                    <div className="glass-sphere sphere-2"></div>
                    <div className="glass-sphere sphere-3"></div>
                </div>

                {/* Top Right Logo */}
                <div className="landing-hero-logo">
                    <img src="/logo.png" alt="Creata Mentor" />
                </div>

                <div className="hero-content centered-poster">
                    <div className="hero-badge">
                        <Sparkles size={14} className="sparkle-icon" />
                        <span>The Ultimate Placement Platform</span>
                    </div>

                    <h1 className="hero-title massive-type custom-gradient-header">
                        MASTER<br />
                        YOUR SKILLS
                    </h1>

                    <p className="hero-subtitle">
                        Transform your preparation journey with our comprehensive resources.<br />
                        Everything you need to land your dream tech job.
                    </p>

                    <div className="hero-cta-group">
                        <Link to="/dashboard" className="hero-cta primary">
                            Start Preparing Free <ArrowRight size={20} />
                        </Link>
                        <Link to="/roadmap" className="hero-cta secondary">
                            View Roadmaps
                        </Link>
                    </div>

                    {/* Stats moved inline or below */}
                    <div className="hero-stats compact">
                        {stats.map((stat, index) => (
                            <div key={index} className="hero-stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
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
