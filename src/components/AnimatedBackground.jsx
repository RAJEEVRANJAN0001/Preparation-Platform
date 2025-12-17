import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // Generate gradient orbs
    const orbs = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 400 + 300, // 300-700px
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 20 + 30, // 30-50s
    }));

    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2, // 2-6px
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 15 + 20, // 20-35s
        opacity: Math.random() * 0.4 + 0.2 // 0.2-0.6
    }));

    // Generate mesh grid lines
    const gridLines = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        position: (i / 11) * 100, // Evenly spaced
        delay: i * 0.5,
    }));

    return (
        <div className="animated-background">
            {/* Gradient Mesh Background */}
            <div className="gradient-mesh">
                {orbs.map((orb) => (
                    <div
                        key={`orb-${orb.id}`}
                        className="gradient-orb"
                        style={{
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            left: `${orb.left}%`,
                            top: `${orb.top}%`,
                            animationDelay: `${orb.delay}s`,
                            animationDuration: `${orb.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <div className="particles-layer">
                {particles.map((particle) => (
                    <div
                        key={`particle-${particle.id}`}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            opacity: particle.opacity
                        }}
                    />
                ))}
            </div>

            {/* Shadow Birds Layer */}
            <div className="birds-layer">
                {/* User requested 100 birds */}
                {[...Array(100)].map((_, i) => (
                    <div
                        key={`bird-${i}`}
                        className="shadow-bird"
                        style={{
                            top: `${Math.random() * 80 + 5}%`,
                            '--bird-scale': Math.random() * 0.5 + 0.5,
                            '--bird-delay': `${Math.random() * 100}s`,
                            '--bird-duration': `${Math.random() * 30 + 20}s`,
                            '--flap-duration': `${Math.random() * 0.3 + 0.4}s`,
                            '--bob-duration': `${Math.random() * 2 + 2}s`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    >
                        <div className="bird-body"></div>
                        <div className="bird-wing-left"></div>
                        <div className="bird-wing-right"></div>
                    </div>
                ))}
            </div>

            {/* Animated Grid Lines */}
            <div className="grid-lines">
                {gridLines.map((line) => (
                    <React.Fragment key={`line-${line.id}`}>
                        <div
                            className="grid-line horizontal"
                            style={{
                                top: `${line.position}%`,
                                animationDelay: `${line.delay}s`,
                            }}
                        />
                        <div
                            className="grid-line vertical"
                            style={{
                                left: `${line.position}%`,
                                animationDelay: `${line.delay + 0.25}s`,
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className="radial-overlay" />
        </div>
    );
};

export default AnimatedBackground;
