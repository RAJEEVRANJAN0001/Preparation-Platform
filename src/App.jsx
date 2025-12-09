import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Chat from './pages/Chat'
import Quiz from './pages/Quiz'
import StudyPlan from './pages/StudyPlan'
import TopicDetail from './pages/TopicDetail'
import './App.css'

function AppContent({ theme, toggleTheme }) {
    const location = useLocation()
    const isLanding = location.pathname === '/'

    return (
        <div className="app">
            {!isLanding && <Navbar theme={theme} toggleTheme={toggleTheme} />}
            <main className={!isLanding ? "main-content" : ""}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/study-plan" element={<StudyPlan />} />
                    <Route path="/topic/:topicId" element={<TopicDetail />} />
                </Routes>
            </main>
        </div>
    )
}

function App() {
    // Theme State
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <Router>
            <AppContent theme={theme} toggleTheme={toggleTheme} />
        </Router>
    )
}

export default App
