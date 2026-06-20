import { useMemo } from 'react'
import './SakuraPetals.css'

const starColors = ['#FFD23F', '#FFC107', '#FFE082', '#FFB300']

const SakuraPetals = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      color: starColors[i % starColors.length],
      left: Math.random() * 100,
      size: Math.random() * 24 + 22,
      delay: Math.random() * 15,
      duration: Math.random() * 8 + 10,
      swayDuration: Math.random() * 4 + 3,
      opacity: Math.random() * 0.5 + 0.4,
      rotateStart: Math.random() * 360,
    }))
  }, [])

  return (
    <div className="sakura-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="sakura-petal"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        >
          <svg
            className="sakura-petal-img"
            viewBox="0 0 24 24"
            fill={star.color}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animationDuration: `${star.swayDuration}s`,
              transform: `rotate(${star.rotateStart}deg)`,
            }}
          >
            <path d="M12 1.8l2.95 6.66 7.25.62-5.5 4.78 1.65 7.1L12 17.9l-6.3 3.86 1.65-7.1-5.5-4.78 7.25-.62z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default SakuraPetals
