import { Link, useLocation } from 'react-router-dom';
import {
  Bot, LayoutDashboard, FileText, Sun, Moon,
  MessageSquare, Video, Map, BrainCircuit
} from 'lucide-react';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'AI Chat', path: '/chat', icon: <MessageSquare size={18} /> },
    { name: 'Interview', path: '/interview', icon: <Video size={18} /> },
    { name: 'Roadmap', path: '/roadmap', icon: <Map size={18} /> },
    { name: 'Notes', path: '/notes', icon: <FileText size={18} /> },
    { name: 'Quiz', path: '/quiz', icon: <BrainCircuit size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <div className="logo-badge">
            <Bot className="logo-icon" size={24} />
          </div>
          <span>Creata Mentor</span>
        </Link>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className={`nav-link ${isActive(item.path)}`}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

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
