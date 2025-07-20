import './Header.css'

const Header = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-brand">
            <span className="logo">AM</span>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span style={{ fontSize: '18px' }}>☀️</span>
              ) : (
                <span style={{ fontSize: '18px' }}>🌙</span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header