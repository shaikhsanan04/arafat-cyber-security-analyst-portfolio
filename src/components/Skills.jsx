import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Amazon Web Services (AWS)", icon: "☁️" },
        { name: "Microsoft Azure", icon: "🌐" },
        { name: "Docker & Kubernetes", icon: "📦" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Linux Administration", icon: "🐧" }
      ]
    },
    {
      title: "Security Tools",
      skills: [
        { name: "Wazuh SIEM", icon: "🛡️" },
        { name: "Nessus Vulnerability Scanner", icon: "🔍" },
        { name: "Burp Suite", icon: "🕳️" },
        { name: "Wireshark", icon: "📊" },
        { name: "Metasploit", icon: "⚡" }
      ]
    },
    {
      title: "Networking",
      skills: [
        { name: "TCP/IP Protocols", icon: "🌍" },
        { name: "Firewall Configuration", icon: "🔥" },
        { name: "VPN Setup", icon: "🔐" },
        { name: "Network Monitoring", icon: "📈" },
        { name: "DNS & DHCP", icon: "⚙️" }
      ]
    },
    {
      title: "IT Support",
      skills: [
        { name: "System Administration", icon: "💻" },
        { name: "Incident Response", icon: "🚨" },
        { name: "Backup & Recovery", icon: "💾" },
        { name: "Performance Monitoring", icon: "📊" },
        { name: "User Support", icon: "👥" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Technical Documentation", icon: "📝" },
        { name: "Project Management", icon: "📅" },
        { name: "Communication", icon: "💬" }
      ]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container-full">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills