import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      status: "Pursuing",
      organization: "EC-Council",
      icon: "🎖️",
      description: "Advanced ethical hacking and penetration testing certification"
    },
    {
      title: "CCNA Fundamentals",
      status: "Completed",
      organization: "Cisco",
      icon: "🌐",
      description: "Networking fundamentals and infrastructure management"
    }
  ]

  const achievements = [
    {
      title: "2nd Place - Ethical Hacking Workshop",
      organization: "CyberSec Conference 2023",
      icon: "🏆",
      description: "Advanced penetration testing and vulnerability assessment"
    },
    {
      title: "Kalpak IoT Exhibition",
      organization: "Tech Innovation Expo",
      icon: "💡",
      description: "Showcased smart home automation project"
    },
    {
      title: "Cloud Migration Excellence",
      organization: "Tech Solutions Inc.",
      icon: "☁️",
      description: "Successfully migrated 15+ legacy systems to cloud"
    },
    {
      title: "Security Implementation Award",
      organization: "Digital Systems Corp",
      icon: "🛡️",
      description: "Implemented comprehensive security framework"
    }
  ]

  return (
    <section id="certifications" className="section certifications">
      <div className="container-full">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="cert-grid">
          <div className="cert-section">
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="cert-cards">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card card">
                  <div className="cert-icon">
                    <span>{cert.icon}</span>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-org">{cert.organization}</div>
                    <div className={`cert-status ${cert.status.toLowerCase()}`}>
                      {cert.status}
                    </div>
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cert-section">
            <h3 className="subsection-title">Awards & Recognition</h3>

              <div className="achievement-cards">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card card">
                    <div className="achievement-icon">
                      <span>{achievement.icon}</span>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <div className="achievement-org">{achievement.organization}</div>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications