import './PageStyles.css'

const Personal = () => {
  const hobbies = [
    { icon: '🏋️', title: 'Gym', description: 'Staying active and maintaining fitness' },
    { icon: '🎹', title: 'Piano', description: 'Playing and practicing classical pieces' },
    { icon: '📚', title: 'Reading', description: 'Devouring books across all genres - 125+ and counting!' },
    { icon: '☕', title: 'Coffee & Matcha', description: 'Endless cups of matcha and coffee fuel my days' },
  ]

  const personality = [
    {
      test: 'Enneagram',
      result: 'Type 3w4',
      description: 'The Achiever with a 4 wing - driven, ambitious, and success-oriented with a creative and introspective edge.'
    },
    {
      test: 'DISC Assessment',
      result: 'High D & I',
      description: 'Dominance and Influence - I combine drive and decisiveness with enthusiasm and collaboration. A highly contradictory yet balanced profile.'
    },
    {
      test: 'Holland Code',
      result: 'Investigative & Enterprising',
      description: 'I enjoy solving complex problems through research and analysis while also leading initiatives and persuading others.'
    },
  ]

  const philosophy = "I believe the more people I talk to and the more different ones I get to know, the more knowledge and learning I gain. That's why I love deep conversations - they open doors to new perspectives and insights."

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Personal Life</h1>
        <p className="page-subtitle">Beyond everything else - who I am outside of work</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2 className="section-title">About My Life</h2>
          <p className="personal-intro">
            Okay, so besides all the resume-worthy stuff... here's the real me. I'm basically a
            walking contradiction - I always have a lot of thought in my mind and sometimes it just gonna blow up. My blood type? Probably 50% matcha, 50% coffee
            at this point. You'll find me at the gym pretending I know what I'm doing, buried in
            a book (125+ and counting - yes, I'm flexing), or baking at Wholefood Monash
            where I work casually. Come say hi, I promise I won't judge.
          </p>
          <p className="personal-philosophy">
            {philosophy}
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card">
                <span className="hobby-icon">{hobby.icon}</span>
                <h3 className="hobby-title">{hobby.title}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Personality Tests</h2>
          <div className="personality-grid">
            {personality.map((item, index) => (
              <div key={index} className="personality-card">
                <div className="personality-test">{item.test}</div>
                <h3 className="personality-result">{item.result}</h3>
                <p className="personality-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Fun Facts</h2>
          <div className="fun-facts">
            <div className="fact-item">
              <span className="fact-number">125+</span>
              <span className="fact-label">Books Read</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">∞</span>
              <span className="fact-label">Matcha & Coffee</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">I + E</span>
              <span className="fact-label">Holland Code</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Current Work</h2>
          <div className="work-card">
            <div className="work-icon">🥗</div>
            <div className="work-info">
              <h3>Casual Team Member</h3>
              <p className="work-place">Wholefood Monash</p>
              <p className="work-description">Working in beverage and food service, connecting with the campus community while balancing studies.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Personal
