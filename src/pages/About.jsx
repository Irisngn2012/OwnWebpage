import aboutImage from '../assets/About me.jpg'
import './PageStyles.css'

const About = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Get to know who I am</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="about-intro">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="Iris Nguyen"
                className="about-profile-image"
              />
            </div>
            <div className="about-text">
              <h2>Hello, I'm Iris (Me Again!) </h2>
              <p>
                I was born and raised in Viet Nam. I'm a curious and motivated Monash University student pursuing a double degree
                in Information Technology and Commerce, majoring in Business Information Systems
                and Econometrics. Based in Melbourne, Australia, I'm passionate about applying
                data analytics, AI tools, and software development to support real-world business
                and learning platforms.
              </p>
              <p>
                I've worked across banking, consulting, and cloud environments, contributing to
                AI-assisted systems, data analysis, and digital solutions. I bring strong analytical
                thinking, adaptability, and a collaborative mindset to multidisciplinary teams.
                I'm particularly interested in building solutions that help neurodivergent users
                and contribute to human development through technology.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <h3>AI & Data</h3>
              <p>LLMs, Prompt Engineering, RAG, NLP, PDF Parsing, Python, R</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Software Engineering</h3>
              <p>Python, JavaScript, SQL, Java, React, Node.js, Svelte, REST APIs</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h3>Analytics & BI</h3>
              <p>Power BI, Excel (VBA), SQL Analytics, Regression, Data Visualisation</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>Cloud & Tools</h3>
              <p>Google Cloud Platform (GCP), Figma, Alteryx, ACL, Dify</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Soft Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🧠</div>
              <h3>Analytical Thinking</h3>
              <p>Strong problem-solving and data-driven decision making</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💡</div>
              <h3>Creative Thinking</h3>
              <p>Innovative solutions and out-of-the-box approaches</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">👥</div>
              <h3>Leadership</h3>
              <p>Team coordination and stakeholder management</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤝</div>
              <h3>Teamwork</h3>
              <p>Adaptability and collaboration in multidisciplinary teams</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - 2027</div>
              <div className="timeline-content">
                <h3>Bachelor of Information Technology & Commerce</h3>
                <p>Monash University, Melbourne, Australia</p>
                <p style={{marginTop: '8px', color: 'var(--primary-color)', fontWeight: '600'}}>
                  GPA: 3.813 | WAM: 81.826
                </p>
                <p style={{marginTop: '4px', color: 'var(--text-muted)'}}>
                  Major: Business Information Systems & Econometrics
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2023</div>
              <div className="timeline-content">
                <h3>Hanoi Amsterdam High School for Gifted Students</h3>
                <p>Hanoi, Vietnam</p>
                <p style={{marginTop: '8px', color: 'var(--primary-color)', fontWeight: '600'}}>
                  GPA: 9.7/10
                </p>
                <p style={{marginTop: '4px', color: 'var(--text-muted)'}}>
                  Major: Biology
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Leadership Programs</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🏆</div>
              <h3>Ancora Imparo Leadership Program</h3>
              <p>2025-2026 | Selected Participant (Top 40 / 2000)</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎓</div>
              <h3>Monash International Grant</h3>
              <p>High Achievers Recognition</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-provider">Databricks</div>
              <h3>Databricks Fundamentals</h3>
              <p>Issued Nov 2025 · Expires Nov 2026</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Udemy</div>
              <h3>GCP Vertex AI | Google AI & ML | Agentic AI (ADK)</h3>
              <p>Issued Oct 2025</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Packt</div>
              <h3>Alteryx for Beginners</h3>
              <p>Issued Jul 2025</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Coursera</div>
              <h3>Microsoft Excel VBA and Macros</h3>
              <p>Issued Jul 2025</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Forage</div>
              <h3>BCG - GenAI Job Simulation</h3>
              <p>Issued Jun 2025</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Coursera</div>
              <h3>Mastering Data Analysis with Pandas</h3>
              <p>Issued Feb 2025</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">Coursera</div>
              <h3>IBM Web Development with HTML, CSS, JavaScript</h3>
              <p>Issued Jul 2024</p>
            </div>
            <div className="cert-card">
              <div className="cert-provider">HackerRank</div>
              <h3>SQL Skill Test (Advanced)</h3>
              <p>Skills: SQL</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
