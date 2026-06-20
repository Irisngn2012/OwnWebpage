import './PageStyles.css'
import './Experience.css'
import fptLogo from '../assets/fpt.png'
import pwcLogo from '../assets/Pwc.jpg'
import monashLogo from '../assets/monash.png'
import dcLogo from '../assets/180monash.png'
import vpbankLogo from '../assets/vp bank.jpeg'
import lewisLogo from '../assets/lewis.png'

const experiences = [
  {
    id: 1,
    role: 'Casual Research Officer',
    company: 'Monash University — Design Department (Caulfield)',
    logo: monashLogo,
    date: 'May 2026 – Present',
    summary:
      'Data analyst on a one-off applied research project for a product built by Monash University’s Design Department.',
    points: [
      'Conducting survey data analysis in R for a product developed by the Design Department',
      'Translating raw survey responses into actionable, data-driven design insights',
      'Supporting the product team with statistical findings and clear reporting',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Lewis Australia',
    logo: lewisLogo,
    date: 'May 2026 – Present',
    summary: 'Software engineer building and maintaining applications with the engineering team.',
    points: [
      'Developing and maintaining software solutions as part of the engineering team',
      'Building, testing, and refining application features to meet business requirements',
    ],
  },
  {
    id: 3,
    role: 'Data Analytics',
    company: 'Veiramal Consulting',
    logo: null,
    date: 'May 2026 – Present',
    summary: 'Data analyst focused on payroll data for accurate processing and reporting.',
    points: [
      'Performing data analytics on payroll data to support accurate processing and reporting',
      'Cleaning, reconciling, and analysing payroll datasets to surface actionable insights',
    ],
  },
  {
    id: 4,
    role: 'AI Fitness Trainer',
    company: 'Monash University',
    logo: monashLogo,
    date: 'Apr 2026 – Present',
    summary: 'Helping Monash staff and lecturers build confidence and capability with AI.',
    points: [
      'Helping Monash staff and lecturers understand and adopt AI tools at Monash',
      'Translating AI concepts into practical, everyday use for non-technical audiences',
    ],
  },
  {
    id: 5,
    role: 'AI Engineer Intern',
    company: 'FPT Smart Cloud',
    logo: fptLogo,
    date: 'Dec 2025',
    summary: 'Worked within the AI team on AI Mentor, an AI-assisted learning platform.',
    points: [
      'Configured and refined AI agent flows, prompt logic, and response behavior',
      'Assisted in training, testing, and improving AI bots, including PDF/document processing',
      'Prepared content for NLP and supported data preparation',
    ],
  },
  {
    id: 6,
    role: 'ISI Intern — Full-Stack Developer',
    company: 'Monash Institute of Medical Engineering (MIME)',
    logo: monashLogo,
    date: 'Feb 2026',
    summary: 'Built an MVP pilot for Unique, an app designed to support neurodivergent users.',
    points: [
      'Independently designed and developed the application using Figma and TypeScript',
      'Integrated AI features for content summarisation',
      'Collaborated with researchers and lecturers to apply accessibility principles',
    ],
  },
  {
    id: 7,
    role: 'Data Assurance Risk Intern',
    company: 'PwC Australia',
    logo: pwcLogo,
    date: 'Jul 2025 – Nov 2025',
    summary: 'Supported the Wage Trust Remediation Project analysing payroll and timesheet data.',
    points: [
      'Used SQL, ACL, and Alteryx to extract, clean, and reconcile financial data',
      'Improved process transparency and reporting accuracy',
      'Developed structured data workflows for testing efficiency',
    ],
  },
  {
    id: 8,
    role: 'Customer Experience & IT Intern',
    company: 'Vietnam Prosperity Bank (VP Bank)',
    logo: vpbankLogo,
    date: 'Nov 2023 – Feb 2024 & Nov 2024 – Feb 2025',
    summary: 'Built AI and analytics tools to improve customer experience operations.',
    points: [
      'Applied prompt engineering, RAG techniques, and AI agent workflows (Dify)',
      'Improved chatbot response accuracy and increased efficiency by ~40%',
      'Built a PDF parsing tool and real-time Power BI dashboards',
      'Prepared and processed NLP training data for AI systems',
    ],
  },
  {
    id: 9,
    role: 'Project Consultant',
    company: '180 Degrees Consulting — Monash University',
    logo: dcLogo,
    date: 'Jun 2024 – Jun 2025',
    summary: 'Addressed operational and strategic challenges for nonprofit clients.',
    points: [
      'Worked with StreetSmart and the Asylum Seeker Resource Centre (ASRC)',
      'Researched triage and intake systems for evidence-based processes',
      'Delivered recommendations on digital platforms for decision-making',
    ],
  },
]

const Experience = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Work Experience</h1>
        <p className="page-subtitle">What I&apos;ve worked on and what I did</p>
      </div>

      <div className="page-content">
        <div className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-card">
              <div className="experience-logo-wrap">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="experience-logo" />
                ) : (
                  <div className="experience-logo-placeholder" aria-hidden="true">
                    {exp.company.charAt(0)}
                  </div>
                )}
              </div>

              <div className="experience-body">
                <div className="experience-head">
                  <h2 className="experience-role">{exp.role}</h2>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-summary">{exp.summary}</p>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
