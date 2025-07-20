import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "arafatmullaofficial@gmail.com",
      link: "mailto:arafatmullaofficial@gmail.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      type: "Phone",
      value: "+91 8668446136",
      link: "tel:+918668446136",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/arafat-mulla",
      link: "https://www.linkedin.com/in/arafat-mulla-59104736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container-full">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm always interested in discussing new opportunities, cybersecurity challenges, 
              and innovative tech solutions. Whether you're looking for a dedicated cloud engineer 
              or want to collaborate on exciting projects, I'd love to hear from you.
            </p>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                className="contact-card card"
                target={info.type === "LinkedIn" ? "_blank" : "_self"}
                rel={info.type === "LinkedIn" ? "noopener noreferrer" : ""}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <div className="contact-type">{info.type}</div>
                  <div className="contact-value">{info.value}</div>
                </div>
                <div className="contact-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="contact-footer">
            <p>
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact