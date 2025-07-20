import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Wazuh SIEM Deployment & Monitoring",
      shortDescription: "Comprehensive SIEM solution for real-time security monitoring and threat detection.",
      fullDescription: "Deployed and configured Wazuh SIEM platform to provide centralized security monitoring for enterprise infrastructure. The solution includes log aggregation, threat detection, compliance monitoring, and incident response automation.",
      role: "Security Engineer & System Administrator",
      tools: ["Wazuh", "Elasticsearch", "Kibana", "Linux", "Docker", "JSON", "Python"],
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Vulnerability Management with Nessus",
      shortDescription: "Automated vulnerability assessment and remediation tracking system.",
      fullDescription: "Implemented comprehensive vulnerability management program using Nessus Professional. Created automated scanning schedules, custom dashboards for vulnerability tracking, and integrated remediation workflows with ticketing systems.",
      role: "Cybersecurity Analyst",
      tools: ["Nessus", "PowerShell", "Python", "CVSS", "Excel", "Active Directory"],
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "IoT-Based Home Automation",
      shortDescription: "Smart home system with security monitoring and remote control capabilities.",
      fullDescription: "Developed IoT-based home automation system with focus on security and energy efficiency. Features include smart lighting, temperature control, security cameras, and mobile app integration with real-time monitoring.",
      role: "IoT Developer & Security Consultant",
      tools: ["Arduino", "Raspberry Pi", "Node.js", "MQTT", "Firebase", "React Native"],
      image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects" className="section projects">
      <div className="container-full">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary"
                    onClick={() => openModal(project)}
                  >
                    Read More
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                
                <div className="project-tools">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="tool-tag more">+{project.tools.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✕</span>
            </button>
            
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <div className="modal-title-section">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-role">{selectedProject.role}</p>
              </div>
            </div>
            
            <div className="modal-body">
              <h4>Project Overview</h4>
              <p>{selectedProject.fullDescription}</p>
              
              <h4>Tools & Technologies</h4>
              <div className="modal-tools">
                {selectedProject.tools.map((tool, index) => (
                  <span key={index} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
