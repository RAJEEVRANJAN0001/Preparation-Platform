import { useEffect, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })

            const target = e.target
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            )
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div
                className={`cursor-dot ${isPointer ? 'active' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`cursor-ring ${isPointer ? 'active' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    )
}

export default CustomCursor
