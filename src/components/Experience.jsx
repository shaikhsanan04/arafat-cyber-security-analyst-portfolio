import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      role: "Cloud Support Engineer",
      company: "Dynacons Systems & Solutions",
      duration: "2022 - 2023",
      achievements: [
        "Managed 15+ government websites with 99.9% uptime",
        "Reduced infrastructure costs by 30% through cloud optimization",
        "Implemented automated monitoring systems reducing incident response time by 50%",
        "Led migration of legacy systems to AWS cloud infrastructure"
      ]
    },
    {
      role: "ITSM Consultant",
      company: "Inspyrisys Systems – MRF Goa Plant",
      duration: "2023 - 2024",
      achievements: [
        "Designed and deployed secure network architectures for 10+ clients",
        "Established comprehensive backup and disaster recovery procedures",
        "Maintained security compliance across all managed systems",
        "Provided 24/7 technical support with 95% customer satisfaction rate"
      ]
    },

  ]

  return (
    <section id="experience" className="section experience">
      <div className="container-full">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-duration">{exp.duration}</div>
              </div>
              
              <div className="experience-body">
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <svg className="achievement-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience