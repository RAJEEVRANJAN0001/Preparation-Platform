import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // Generate 18 bubbles with random properties
    const bubbles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 150 + 50, // 50-200px
        left: Math.random() * 100, // 0-100%
        delay: Math.random() * 20, // 0-20s
        duration: Math.random() * 20 + 20, // 20-40s
        opacity: Math.random() * 0.15 + 0.05 // 0.05-0.2
    }));

    return (
        <div className="animated-background">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                        opacity: bubble.opacity
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
