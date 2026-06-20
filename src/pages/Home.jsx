import { Link } from 'react-router-dom'
import profileImage from '../assets/Image for apply.jpeg'
import './Home.css'

const Home = () => {
  const featuredSections = [
    {
      title: 'Experience',
      items: [
        { id: 1, title: 'Casual Research Officer', category: 'Monash Design Dept', description: 'Survey data analysis in R for a Monash Design Department product.' },
        { id: 2, title: 'Software Engineer', category: 'Lewis Australia', description: 'Building and maintaining software solutions with the engineering team.' },
        { id: 3, title: 'Data Analytics', category: 'Veiramal Consulting', description: 'Analysing payroll data to support accurate processing and reporting.' },
        { id: 4, title: 'AI Fitness Trainer', category: 'Monash University', description: 'Helping Monash staff and lecturers understand and adopt AI.' },
        { id: 5, title: 'AI Engineer Intern', category: 'FPT Smart Cloud', description: 'Configuring AI agent flows for an AI-assisted learning platform.' },
        { id: 6, title: 'ISI Developer Intern', category: 'Monash MIME', description: 'Full-stack MVP supporting neurodivergent users.' },
        { id: 7, title: 'Data Assurance Risk', category: 'PwC Australia', description: 'Payroll and timesheet data analysis for wage remediation.' },
        { id: 8, title: 'IT Intern', category: 'VP Bank', description: 'RAG chatbot and BI dashboards, ~40% efficiency gain.' },
      ]
    },
    {
      title: 'Awards & Achievements',
      items: [
        { id: 1, title: 'SEED Incubator', category: '1st Place', description: 'First place at the Monash SEED Incubator.' },
        { id: 2, title: 'Ancora Imparo', category: 'Top 40/2000', description: 'Selected for Monash\'s flagship leadership program.' },
        { id: 3, title: 'MSFIN Case Comp', category: 'Winner', description: 'Winner of the MSFIN x Cause case competition.' },
        { id: 4, title: 'CCA Hackathon', category: 'Finalist', description: 'Finalist at the CCA Hackathon 2025.' },
      ]
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Welcome</span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Iris Nguyen</span>
            </h1>
            <p className="hero-subtitle">
              AI Engineer | Data Analyst
            </p>
            <p className="hero-description">
            I study IT & Commerce at Monash and enjoy building thoughtful, data-driven tech with AI and analytics. I’ve worked across banking, consulting, and cloud environments, and I’m particularly interested in creating inclusive tools for neurodivergent users.            <br /><br />
            Always happy to chat about ideas, projects, or anything interesting you’re working on.
          </p>

            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Explore More
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img
                src={profileImage}
                alt="Iris Nguyen"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="featured-sections">
        {featuredSections.map((section, index) => (
          <div key={index} className="featured-row">
            <h2 className="row-title">{section.title}</h2>
            <div className="row-items">
              {section.items.map((item) => (
                <div key={item.id} className="featured-card">
                  <div className="featured-card-accent"></div>
                  <div className="featured-card-body">
                    <span className="card-category">{item.category}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">3.81</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Awards</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40%</span>
            <span className="stat-label">Efficiency Boost</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
