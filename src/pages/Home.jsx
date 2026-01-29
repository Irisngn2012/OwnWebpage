import { Link } from 'react-router-dom'
import profileImage from '../assets/Image for apply.jpeg'
import './Home.css'

const Home = () => {
  const featuredSections = [
    {
      title: 'Work Experience',
      items: [
        { id: 1, title: 'AI Engineer Intern', category: 'FPT Smart Cloud' },
        { id: 2, title: 'ISI Developer Intern', category: 'Monash MIME' },
        { id: 3, title: 'Data Assurance Risk', category: 'PwC Australia' },
        { id: 4, title: 'IT Intern', category: 'VP Bank' },
      ]
    },
    {
      title: 'Awards & Achievements',
      items: [
        { id: 1, title: 'SEED Incubator', category: '1st Place' },
        { id: 2, title: 'Ancora Imparo', category: 'Top 40/2000' },
        { id: 3, title: 'MSFIN Case Comp', category: 'Winner' },
        { id: 4, title: 'CCA Hackathon', category: 'Finalist' },
      ]
    }
  ]

  return (
    <div className="home">
      {/* Hero Section - Netflix Style */}
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
              AI Engineer | Full-Stack Developer | Data Analyst
            </p>
            <p className="hero-description">
              Currently seeking part-time opportunities and internships in AI, data analytics,
              and software development. I love turning ideas into impactful solutions and
              connecting with people who share a passion for tech and innovation.
            </p>
            <p className="hero-cta-text">
              Let's connect! I'd love to chat about potential collaborations, opportunities,
              or just share ideas over a coffee (or matcha).
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
                  <div className="card-image">
                    <div className="card-overlay">
                      <span className="card-category">{item.category}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
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
