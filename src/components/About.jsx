import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container-full">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated cloud support engineer with expertise in cybersecurity, 
            infrastructure management, and system optimization.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-profile-card">
            <div className="profile-image-container">
              <img 
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Arafat Mulla - Cloud Support Engineer" 
                className="profile-image"
              />
              <div className="profile-badge">
                <span className="badge-text">Cybersecurity Analyst</span>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="about-intro">
              <h3 className="profile-name">Arafat Mulla — Cybersecurity Analyst | Cloud Security Specialist</h3>
              <p className="profile-description">
Driven cybersecurity professional with 3+ years of experience in protecting enterprise infrastructure, performing vulnerability assessments, and optimizing security operations. Currently pursuing CEH certification to deepen ethical hacking and incident response skills.
              </p>
              
              <div className="social-links">
                <a href="mailto:arafatmullaofficial@gmail.com" className="social-link" aria-label="Email">
                  <span>📧</span>
                </a>
                <a href="https://www.linkedin.com/in/arafat-mulla-59104736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span>💼</span>
                </a>
                <a href="tel:+918668446136" className="social-link" aria-label="Phone">
                  <span>📞</span>
                </a>
              </div>
            </div>
            
            <div className="experience-highlights">
              <h4 className="highlights-title">Professional Experience</h4>
              <p className="highlights-subtitle">
                I am a passionate cybersecurity analyst with hands-on experience in SIEM tools, threat detection, firewall configurations, and vulnerability management. He has supported large-scale infrastructure, secured over 15+ government systems, and collaborated on proactive defense strategies. Dedicated to building safer and more resilient digital environments.
              </p>
              
              <ul className="highlights-list">
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <span>⚡</span>
                  </div>
                  <span>Over 3+ years of cloud infrastructure and technology expertise</span>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <span>🏢</span>
                  </div>
                  <span>Before founding the company, I worked as a Manager</span>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <span>🔧</span>
                  </div>
                  <span>Deep experience in technological innovations that led the industry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About