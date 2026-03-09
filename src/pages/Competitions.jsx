import medhackImage from '../assets/MedHack.jpg'
import anzImage from '../assets/Anz x Advisory Challenge.jpg'
import essaImage from '../assets/Essa Case.jpg'
import ancoraImage from '../assets/Ancora.jpg'
import seedImage from '../assets/Seed Incubator.jpg'
import './PageStyles.css'

const Competitions = () => {
  const competitions = [
    {
      id: 11,
      title: 'MedHack Hackathon 2026',
      result: '1st Place',
      description: 'Won first place out of 200+ applicants. Built an application for dementia care and competed in the coding track, working with 2 million rows of data. Trained the ML model achieving 92% accuracy and delivered the final pitch.',
      date: '2026',
      organizer: 'MedHack',
      image: medhackImage
    },
    {
      id: 1,
      title: 'Monash SEED x ANZ Advisory Challenge',
      result: '2nd Place',
      description: 'Placed 2nd in the advisory challenge, demonstrating strong strategic thinking and business advisory skills.',
      date: '2025',
      organizer: 'Monash SEED & ANZ',
      image: anzImage
    },
    {
      id: 2,
      title: 'Monash SEED Incubator Competition',
      result: '1st Place',
      description: 'Overall first place in the startup incubator competition, demonstrating innovative business ideas and execution.',
      date: '2024',
      organizer: 'Monash University',
      image: seedImage
    },
    {
      id: 4,
      title: 'ESSA x Monash Business School Case Competition',
      result: 'Top 3/40',
      description: 'Finalist among 40 teams, demonstrating strong analytical and presentation skills in business case solving.',
      date: '2024',
      organizer: 'ESSA & Monash Business School',
      image: essaImage
    },
    {
      id: 5,
      title: 'Computer & Commerce Association Hackathon 2025',
      result: 'Top 5/30',
      description: 'Finalist in the hackathon, showcasing technical skills and innovative problem-solving abilities.',
      date: '2025',
      organizer: 'CCA'
    },
    {
      id: 6,
      title: 'Monash BAP x MSFIN Case Competition',
      result: 'Most Funded',
      description: 'Led the most funded project in the competition, delivering a compelling pitch to enhance donor attraction and retention.',
      date: '2024',
      organizer: 'Monash BAP & MSFIN'
    },
    {
      id: 7,
      title: 'Monash Data Science Society Datathon',
      result: 'Participant',
      description: 'Competed in the datathon, gaining valuable experience in data analysis and problem-solving under time pressure. A great learning opportunity!',
      date: '2025',
      organizer: 'Monash Data Science Society'
    },
    {
      id: 8,
      title: 'MYMI XMLAI Hackathon',
      result: 'Participant',
      description: 'Participated in the healthcare-focused AI hackathon, exploring innovative solutions and learning from the experience.',
      date: '2025',
      organizer: 'MYMI'
    },
    {
      id: 9,
      title: 'Monash Business School Internal Case Competition',
      result: 'Participant',
      description: 'Competed as a first-year student in the internal case competition. Did not win but gained invaluable experience in business case analysis and presentation skills.',
      date: '2024',
      organizer: 'Monash Business School'
    },
    {
      id: 10,
      title: 'McKinsey x BAP Case Competition',
      result: 'Melbourne Finals',
      description: 'Advanced to the Melbourne finals round, competing against top teams in strategic business analysis and presentation.',
      date: '2025',
      organizer: 'University of Sydney'
    },
  ]

  const grants = [
    {
      id: 1,
      title: 'Monash International Grant for High Achievers',
      description: 'Awarded for academic excellence and outstanding achievements.',
      type: 'Scholarship'
    },
    {
      id: 2,
      title: 'University of Melbourne Scholarship',
      description: 'Partial scholarship offer for academic excellence.',
      type: 'Scholarship'
    },
    {
      id: 3,
      title: 'University of Queensland Scholarship',
      description: 'Partial scholarship offer for academic excellence.',
      type: 'Scholarship'
    },
    {
      id: 4,
      title: 'University of Sydney Scholarship',
      description: 'Partial scholarship offer for academic excellence.',
      type: 'Scholarship'
    },
    {
      id: 5,
      title: 'UTS Scholarship',
      description: 'Partial scholarship offer for academic excellence.',
      type: 'Scholarship'
    },
    {
      id: 6,
      title: 'Ancora Imparo Leadership Program',
      description: 'Selected as one of the top 40 participants out of 2000 applicants for this prestigious leadership development program.',
      type: 'Top 40/2000',
      image: ancoraImage
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Competitions & Awards</h1>
        <p className="page-subtitle">Recognition and achievements in competitive events</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2 className="section-title">Competition Achievements</h2>
          <div className="competitions-grid">
            {competitions.map((competition) => (
              <div key={competition.id} className="competition-card">
                {competition.image && (
                  <div
                    className="competition-image"
                    style={{
                      backgroundImage: `url(${competition.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}
                <div className="competition-badge">{competition.result}</div>
                <h3 className="competition-title">{competition.title}</h3>
                <p className="competition-description">{competition.description}</p>
                <div className="competition-meta">
                  <span className="competition-date">{competition.date}</span>
                  <span className="competition-organizer">{competition.organizer}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Grants & Scholarships</h2>
          <div className="competitions-grid">
            {grants.map((grant) => (
              <div key={grant.id} className="competition-card">
                {grant.image && (
                  <div
                    className="competition-image"
                    style={{
                      backgroundImage: `url(${grant.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}
                <div className="competition-badge">{grant.type}</div>
                <h3 className="competition-title">{grant.title}</h3>
                <p className="competition-description">{grant.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Competitions
