import { Link, useLocation } from 'react-router-dom';
import { Bot, LayoutDashboard, FileText, Sun, Moon } from 'lucide-react';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <Bot className="logo-icon" size={28} />
          <span>Creata Mentor</span>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
          </li>
          <li>
            <Link to="/chat" className={`nav-link ${isActive('/chat')}`}>AI Chat</Link>
          </li>
          <li>
            <Link to="/interview" className={`nav-link ${isActive('/interview')}`}>Interview</Link>
          </li>
          <li>
            <Link to="/roadmap" className={`nav-link ${isActive('/roadmap')}`}>Roadmap</Link>
          </li>
          <li>
            <Link to="/notes" className={`nav-link ${isActive('/notes')}`}>Notes</Link>
          </li>
          <li>
            <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`}>Quiz</Link>
          </li>

          {/* Theme Toggle */}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
