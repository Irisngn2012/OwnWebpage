import fptImage from '../assets/Fpt.jpg'
import pwcImage from '../assets/Pwc.jpg'
import mhpLogo from '../assets/MHP.jpeg'
import monashLogo from '../assets/monash.png'
import dcLogo from '../assets/180monash.png'
import mymiLogo from '../assets/mymi monash.jpeg'
import fptLogo from '../assets/fpt.png'
import vpbankLogo from '../assets/vp bank.jpeg'
import './PageStyles.css'

// Organization logo mapping
const orgLogos = {
  'Monash MIME': monashLogo,
  'FPT Smart Cloud': fptLogo,
  'VP Bank': vpbankLogo,
  'Monash Human Power': mhpLogo,
  'Monash Young MedTech': mymiLogo,
  'PwC Australia': pwcImage,
  '180 Degrees Consulting': dcLogo,
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Unique - Neurodivergent Support App',
      description: 'Full-stack MVP pilot application designed to support neurodivergent users. Independently designed and developed using Figma and TypeScript with integrated AI features for content summarisation.',
      category: 'Full-Stack Development',
      technologies: ['TypeScript', 'Figma', 'AI Integration', 'React'],
      organization: 'Monash MIME',
      link: 'https://www.monash.edu/mime/projects/all-projects/a-unique-approach-to-autism'
    },
    {
      id: 2,
      title: 'AI Mentor Learning Platform',
      description: 'AI-assisted learning platform with configured AI agent flows, prompt logic, and response behavior. Includes PDF/document processing and NLP content preparation.',
      category: 'AI Engineering',
      technologies: ['AI Agents', 'NLP', 'Prompt Engineering', 'Python'],
      organization: 'FPT Smart Cloud',
      link: 'https://fpt.ai/products/fpt-ai-mentor/',
      image: fptImage
    },
    {
      id: 3,
      title: 'Next-Gen HR Chatbot',
      description: 'Developed chatbot achieving 40% faster response times while maintaining industry-leading accuracy. Applied RAG techniques and AI agent workflows using Dify.',
      category: 'AI & Chatbot',
      technologies: ['RAG', 'Dify', 'NLP', 'Power BI'],
      organization: 'VP Bank'
    },
    {
      id: 4,
      title: 'Bike Riding Simulator App',
      description: 'Building an app to simulate bike riding using real-time data and Bluetooth Low Energy integration for human-powered bikes.',
      category: 'IoT & Mobile',
      technologies: ['Next.js', 'Bluetooth LE', 'Real-time Data'],
      organization: 'Monash Human Power',
      link: 'https://monashhumanpower.org/'
    },
    {
      id: 5,
      title: 'Children Social Stories App',
      description: 'Developing an app to help children with social stories when visiting doctors. Collaborating with clinicians at Monash Health for UI/UX design.',
      category: 'Healthcare App',
      technologies: ['Figma', 'iOS', 'Android', 'UI/UX'],
      organization: 'Monash Young MedTech'
    },
    {
      id: 6,
      title: 'PDF Parsing Tool & BI Dashboard',
      description: 'Built PDF parsing tool and real-time Power BI dashboards to improve data extraction, monitoring, and customer experience insights.',
      category: 'Data Engineering',
      technologies: ['Python', 'Power BI', 'PDF Processing'],
      organization: 'VP Bank'
    },
    {
      id: 7,
      title: 'Wage Trust Remediation Analysis',
      description: 'Analyzed payroll and timesheet data to ensure compliance and accuracy across large datasets. Developed structured data workflows for testing efficiency.',
      category: 'Data Analytics',
      technologies: ['SQL', 'ACL', 'Alteryx', 'Excel'],
      organization: 'PwC Australia',
      image: pwcImage,
      imagePosition: 'center 20%'
    },
    {
      id: 8,
      title: 'ASRC Intake System Research',
      description: 'Researched and evaluated triage and intake systems to support standardized, evidence-based intake processes for the Asylum Seeker Resource Centre.',
      category: 'Consulting',
      technologies: ['Research', 'Digital Platforms', 'Data Analysis'],
      organization: '180 Degrees Consulting'
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Explore my work and creations</p>
      </div>

      <div className="page-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-image"
                style={project.image ? {
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.imagePosition || 'center'
                } : {}}
              >
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <div className="project-org-wrapper">
                    {orgLogos[project.organization] ? (
                      <img
                        src={orgLogos[project.organization]}
                        alt={project.organization}
                        className="project-org-logo"
                      />
                    ) : (
                      <div className="project-org-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                    )}
                    <span className="project-org">{project.organization}</span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
