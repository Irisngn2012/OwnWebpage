import './PageStyles.css'
import mhpLogo from '../assets/MHP.jpeg'
import msacLogo from '../assets/Msac.jpg'
import monashLogo from '../assets/monash.png'
import dcLogo from '../assets/180monash.png'
import mymiLogo from '../assets/mymi monash.jpeg'
import impetusLogo from '../assets/Impetus Monash.jpeg'

// Organization logo mapping
const orgLogos = {
  'Monash Human Power': mhpLogo,
  'Monash Young MedTech Innovators (MYMI)': mymiLogo,
  'Monash Residential Services': monashLogo,
  'Monash Statistical Analytics Club (MSAC)': msacLogo,
  'Monash Assistive Tech Team (MATT)': monashLogo,
  'Monash Programming Bootcamp': monashLogo,
  'Monash Peer Mentor Program': monashLogo,
  'Monash Jumpstart Orientation': monashLogo,
  'WIRED Monash': monashLogo,
  'Impetus Consulting Group': impetusLogo,
  '180 Degrees Consulting - Monash University': dcLogo,
}

const Extracurricular = () => {
  const volunteerWork = [
    {
      id: 1,
      title: 'Electrical Software Lead',
      organization: 'Monash Human Power',
      duration: 'Oct 2025 – Present',
      description: 'Promoted from Software Developer to lead the electrical software team. Building an app to simulate bike riding using Next.js, real-time data, and Bluetooth Low Energy integration for the human-powered bike.',
      previousRole: 'Software Developer (July 2024 – Oct 2025)'
    },
    {
      id: 2,
      title: 'Software Team Member & MYMEURON Co-Lead',
      organization: 'Monash Young MedTech Innovators (MYMI)',
      duration: 'Feb 2024 – Present',
      description: 'Working on multiple healthcare technology projects. Co-leading the MYMEURON project and contributing to the AESOP project. Developing apps to help children with social stories when visiting doctors, collaborating with clinicians at Monash Health using Figma for UI/UX design and implementing both iOS and Android versions.',
      projects: ['MYMEURON (Co-Lead)', 'AESOP']
    },
    {
      id: 3,
      title: 'Resident Advisor - Briggs Hall',
      organization: 'Monash Residential Services',
      duration: 'Feb 2025 – Present',
      description: 'Managing and supporting 30+ students in residential community. Leading sustainability initiatives and fostering an inclusive living environment. Providing pastoral care and organizing community events.'
    },
    {
      id: 4,
      title: 'Business Developer Officer',
      organization: 'Monash Statistical Analytics Club (MSAC)',
      duration: 'Sep 2025 – Present',
      description: 'Driving business development initiatives and building partnerships to grow the club\'s reach and impact within the Monash community.'
    },
    {
      id: 5,
      title: 'Software Team Member',
      organization: 'Monash Assistive Tech Team (MATT)',
      duration: 'Mar 2024 – Jul 2025',
      description: 'Developed "Happy Morning," an app designed to assist neurodivergent school children in completing morning routines. Features customizable visual schedules with icons or images for each task.'
    },
  ]

  const communityRoles = [
    {
      id: 1,
      title: 'Tutor',
      organization: 'Monash Programming Bootcamp',
      duration: 'Feb 2024',
      description: 'Guiding beginners through Python with a curriculum encompassing both basic and advanced content.'
    },
    {
      id: 2,
      title: 'Peer Mentor',
      organization: 'Monash Peer Mentor Program',
      duration: 'Jan 2024 – Jun 2024',
      description: 'Volunteering as faculty support for first-year IT students, aiding them in their activities and studies.'
    },
    {
      id: 3,
      title: 'Team Leader',
      organization: 'Monash Jumpstart Orientation',
      duration: 'Feb 2024',
      description: 'Served as a team leader for orientation event, enabling connections with fellow students while honing and applying leadership skills.'
    },
    {
      id: 4,
      title: 'Marketing Team Member',
      organization: 'WIRED Monash',
      duration: 'Feb 2024 – Jun 2024',
      description: 'Volunteered as a Marketing officer for printing posters and scripts for WIRED events, contributing to event promotion and outreach.'
    },
  ]

  const consulting = [
    {
      id: 1,
      title: 'Consulting Director',
      organization: 'Impetus Consulting Group',
      duration: 'Nov 2025 – Present',
      description: 'Conducting interviews and assessment centers for prospective consultants. Overseeing documentation and improving internal processes. Enhancing the organization\'s growth and training standards.'
    },
    {
      id: 2,
      title: 'Project Consultant',
      organization: '180 Degrees Consulting - Monash University',
      duration: 'Jun 2024 – June 2025',
      description: 'Worked in a consulting team to address operational and strategic challenges for nonprofit clients including StreetSmart and the Asylum Seeker Resource Centre (ASRC). Researched and evaluated triage and intake systems to support evidence-based intake processes.',
      clients: ['StreetSmart', 'ASRC']
    },
  ]

  const achievements = [
    {
      id: 1,
      title: 'VP Bank HR Chatbot',
      description: 'Contributed to the development of next-gen HR chatbot, achieving 40% faster response times while maintaining industry-leading accuracy.'
    },
    {
      id: 3,
      title: 'Most Funded Project',
      description: 'Led the most funded project in Monash BAP x MSFIN Case Competition, delivering a compelling pitch to enhance donor attraction and retention.'
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Extracurricular</h1>
        <p className="page-subtitle">Activities and involvement outside academics</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2 className="section-title">Volunteer Experience</h2>
          <div className="activities-list">
            {volunteerWork.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="activity-logo">
                  {orgLogos[activity.organization] ? (
                    <img src={orgLogos[activity.organization]} alt={activity.organization} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  )}
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-org">{activity.organization}</p>
                  <p className="activity-duration">{activity.duration}</p>
                  {activity.previousRole && (
                    <p style={{color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic'}}>
                      Previously: {activity.previousRole}
                    </p>
                  )}
                  <p className="activity-description">{activity.description}</p>
                  {activity.projects && (
                    <div style={{marginTop: '10px'}}>
                      <span style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>Projects: </span>
                      {activity.projects.map((project, i) => (
                        <span key={i} className="tech-tag" style={{marginRight: '8px'}}>{project}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Community & Mentorship</h2>
          <div className="activities-list">
            {communityRoles.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="activity-logo">
                  {orgLogos[activity.organization] ? (
                    <img src={orgLogos[activity.organization]} alt={activity.organization} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  )}
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-org">{activity.organization}</p>
                  <p className="activity-duration">{activity.duration}</p>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Consulting Experience</h2>
          <div className="activities-list">
            {consulting.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="activity-logo">
                  {orgLogos[activity.organization] ? (
                    <img src={orgLogos[activity.organization]} alt={activity.organization} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-org">{activity.organization}</p>
                  <p className="activity-duration">{activity.duration}</p>
                  <p className="activity-description">{activity.description}</p>
                  {activity.clients && (
                    <div style={{marginTop: '10px'}}>
                      <span style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>Clients: </span>
                      {activity.clients.map((client, i) => (
                        <span key={i} className="tech-tag" style={{marginRight: '8px'}}>{client}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Key Achievements</h2>
          <div className="skills-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="skill-card">
                <div className="skill-icon">🏆</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Extracurricular
