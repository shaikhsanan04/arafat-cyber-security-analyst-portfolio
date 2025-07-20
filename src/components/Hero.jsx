import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="mesh-gradient"></div>
        <div className="geometric-pattern"></div>
        <div className="cyber-grid"></div>
        <div className="binary-rain"></div>
        <div className="security-nodes"></div>
        <div className="cyber-lines"></div>
      </div>

      <div className="container-full">
        <div className="hero-content fade-in-up">
          <h1 className="hero-name">Arafat Mulla</h1>
          <h2 className="hero-title">Cybersecurity Analyst | Cloud Security Specialist | IT Infrastructure Defender</h2>
          <p className="hero-subtitle">Protecting systems from threats, securing digital infrastructure, and detecting vulnerabilities before attackers do.</p>

          <div className="hero-actions">
            <a href={`${import.meta.env.BASE_URL}arafat-resume.pdf`} target="_blank"
              rel="noopener noreferrer"
              download="Arafat_Mulla_Resume.pdf" className="btn btn-primary" >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9,9 9,15 15,15" />
              </svg>
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero