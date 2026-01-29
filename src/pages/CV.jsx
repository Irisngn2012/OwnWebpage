import './PageStyles.css'
import fptLogo from '../assets/Fpt.jpg'
import pwcLogo from '../assets/Pwc.jpg'
import monashLogo from '../assets/monash.png'
import dcLogo from '../assets/180monash.png'

// Organization logo mapping
const companyLogos = {
  'FPT Smart Cloud': fptLogo,
  'Monash Institute of Medical Engineering (MIME)': monashLogo,
  'PwC Australia': pwcLogo,
  'Vietnam Prosperity Joint-Stock Commercial Bank (VP Bank)': null,
  '180 Degrees Consulting - Monash University': dcLogo,
  'Monash University, Melbourne, Australia': monashLogo,
}

const CV = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Curriculum Vitae</h1>
        <p className="page-subtitle">My professional background and experience</p>
      </div>

      <div className="page-content">
        <div className="cv-container">
          <div className="cv-download">
            <a href="/src/assets/IrisN_Resume.pdf" download className="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
          </div>

          <section className="cv-section">
            <h2 className="cv-section-title">Work Experience</h2>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>AI Engineer Intern</h3>
                <span className="cv-date">Dec 2025</span>
              </div>
              <p className="cv-company">FPT Smart Cloud</p>
              <ul className="cv-list">
                <li>Work within the AI team on AI Mentor, an AI-assisted learning platform</li>
                <li>Configure and refine AI agent flows, prompt logic, and response behavior</li>
                <li>Assist in training, testing, and improving AI bots including PDF/document processing</li>
                <li>Prepare content for NLP and support data preparation</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>ISI Intern - Full-Stack Developer</h3>
                <span className="cv-date">Feb 2026</span>
              </div>
              <p className="cv-company">Monash Institute of Medical Engineering (MIME)</p>
              <ul className="cv-list">
                <li>Building an MVP pilot for Unique, an app designed to support neurodivergent users</li>
                <li>Independently designed and developed the application using Figma and TypeScript</li>
                <li>Integrated AI features for content summarisation</li>
                <li>Collaborated with researchers and lecturers for accessibility principles</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Data Assurance Risk Internship</h3>
                <span className="cv-date">July 2025 – November 2025</span>
              </div>
              <p className="cv-company">PwC Australia</p>
              <ul className="cv-list">
                <li>Supported Wage Trust Remediation Project analyzing payroll and timesheet data</li>
                <li>Utilized SQL, ACL, and Alteryx to extract, clean, and reconcile financial data</li>
                <li>Improved process transparency and reporting accuracy</li>
                <li>Developed structured data workflows for testing efficiency</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Customer Experience & IT Intern</h3>
                <span className="cv-date">Nov 2023 – Feb 2024 & Nov 2024 – Feb 2025</span>
              </div>
              <p className="cv-company">Vietnam Prosperity Joint-Stock Commercial Bank (VP Bank)</p>
              <ul className="cv-list">
                <li>Applied prompt engineering, RAG techniques, and AI agent workflows (Dify)</li>
                <li>Improved chatbot response accuracy and increased efficiency by ~40%</li>
                <li>Built PDF parsing tool and real-time Power BI dashboards</li>
                <li>Prepared and processed NLP training data for AI systems</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Project Consultant</h3>
                <span className="cv-date">Jun 2024 – June 2025</span>
              </div>
              <p className="cv-company">180 Degrees Consulting - Monash University</p>
              <ul className="cv-list">
                <li>Addressed operational and strategic challenges for nonprofit clients</li>
                <li>Worked with StreetSmart and Asylum Seeker Resource Centre (ASRC)</li>
                <li>Researched triage and intake systems for evidence-based processes</li>
                <li>Delivered recommendations on digital platforms for decision-making</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Bachelor of Information Technology & Commerce</h3>
                <span className="cv-date">2023 - Present</span>
              </div>
              <p className="cv-company">Monash University, Melbourne, Australia</p>
              <p className="cv-detail">GPA: 3.813 | WAM: 81.826</p>
              <p className="cv-detail">Major: Business Information Systems & Econometrics</p>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Technical Skills</h2>
            <div className="cv-skills">
              <div className="cv-skill-category">
                <h4>AI & Data</h4>
                <p>LLMs (prompt engineering, RAG), NLP, PDF parsing, text chunking, Python, R</p>
              </div>
              <div className="cv-skill-category">
                <h4>Software Engineering</h4>
                <p>Python, JavaScript, SQL, Java, React, Node.js, Svelte, HTML, CSS, REST APIs</p>
              </div>
              <div className="cv-skill-category">
                <h4>Analytics & BI</h4>
                <p>Power BI, Excel (VBA), SQL analytics, regression, clustering, data visualisation</p>
              </div>
              <div className="cv-skill-category">
                <h4>Cloud & Tools</h4>
                <p>Google Cloud Platform (GCP), Figma, Alteryx, ACL, Dify</p>
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Soft Skills</h2>
            <div className="cv-certifications">
              <div className="certification-item">Analytical Thinking</div>
              <div className="certification-item">Communication</div>
              <div className="certification-item">Creative Thinking</div>
              <div className="certification-item">Business Analysis</div>
              <div className="certification-item">Leadership</div>
              <div className="certification-item">Stakeholder Management</div>
              <div className="certification-item">Teamwork & Adaptability</div>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Awards & Certifications</h2>
            <div className="cv-certifications">
              <div className="certification-item">Ancora Imparo Leadership Program (Top 40/2000)</div>
              <div className="certification-item">Monash SEED Incubator - 1st Place</div>
              <div className="certification-item">MSFIN x Cause Case Competition - Winner</div>
              <div className="certification-item">ESSA x Monash Business School - Finalist</div>
              <div className="certification-item">CCA Hackathon 2025 - Finalist</div>
              <div className="certification-item">Monash International Grant for High Achievers</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CV
