import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Network } from 'lucide-react'

// Simple D3-like Force Graph Visualization tailored for React
// Note: Using a simplified canvas approach for performance and "Holographic" feel

function ConceptMap() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = canvas.width = canvas.offsetWidth
        let height = canvas.height = canvas.offsetHeight
        let animationFrameId

        // Data: Nodes and Links
        const nodes = [
            { id: 'DSA', x: width / 2, y: height / 2, color: '#06b6d4', size: 15 },
            { id: 'Arrays', x: width / 2 - 100, y: height / 2 - 50, color: '#3b82f6', size: 10 },
            { id: 'Trees', x: width / 2 + 100, y: height / 2 - 80, color: '#3b82f6', size: 10 },
            { id: 'Graphs', x: width / 2 + 80, y: height / 2 + 80, color: '#3b82f6', size: 10 },
            { id: 'DP', x: width / 2 - 80, y: height / 2 + 100, color: '#8b5cf6', size: 12 },
            { id: 'Recursion', x: width / 2 + 150, y: height / 2, color: '#3b82f6', size: 8 },
            { id: 'Stack', x: width / 2 - 150, y: height / 2, color: '#3b82f6', size: 8 },
        ]

        const links = [
            { source: 'DSA', target: 'Arrays' },
            { source: 'DSA', target: 'Trees' },
            { source: 'DSA', target: 'Graphs' },
            { source: 'DSA', target: 'DP' },
            { source: 'DSA', target: 'Stack' },
            { source: 'Trees', target: 'Recursion' },
            { source: 'Graphs', target: 'Trees' },
            { source: 'DP', target: 'Recursion' },
        ]

        // Animation Loop
        let time = 0
        const animate = () => {
            time += 0.005
            ctx.clearRect(0, 0, width, height)

            // Update Positions (Floating Effect)
            nodes.forEach((node, i) => {
                // Simple orbiting math for visual effect
                if (node.id !== 'DSA') {
                    node.x += Math.cos(time + i) * 0.2
                    node.y += Math.sin(time + i) * 0.2
                }
            })

            // Draw Links
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)'
            ctx.lineWidth = 1
            links.forEach(link => {
                const source = nodes.find(n => n.id === link.source)
                const target = nodes.find(n => n.id === link.target)
                if (source && target) {
                    ctx.beginPath()
                    ctx.moveTo(source.x, source.y)
                    ctx.lineTo(target.x, target.y)
                    ctx.stroke()
                }
            })

            // Draw Nodes
            nodes.forEach(node => {
                // Glow
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2)
                gradient.addColorStop(0, node.color)
                gradient.addColorStop(1, 'transparent')

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2)
                ctx.fill()

                // Core
                ctx.fillStyle = '#fff'
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.size * 0.3, 0, Math.PI * 2)
                ctx.fill()

                // Text
                ctx.fillStyle = 'rgba(255,255,255,0.8)'
                ctx.font = '10px Inter'
                ctx.textAlign = 'center'
                ctx.fillText(node.id, node.x, node.y + node.size + 12)
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Resize Handler
        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth
            height = canvas.height = canvas.offsetHeight
        }
        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="glass-card" style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 16, left: 24, zIndex: 10 }}>
                <h3 className="text-gradient" style={{ margin: 0, fontSize: '1.2rem' }}>Knowledge Universe</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Live Concept Map</p>
            </div>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
            <div style={{ position: 'absolute', bottom: 16, right: 24 }}>
                <Link to="/notes"><Network size={20} color="var(--color-neon-cyan)" /></Link>
            </div>
        </div>
    )
}

export default ConceptMap
