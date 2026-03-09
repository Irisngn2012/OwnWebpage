import { useMemo } from 'react'
import petal1 from '../assets/sakura-petal-1.svg'
import petal2 from '../assets/sakura-petal-2.svg'
import petal3 from '../assets/sakura-petal-3.svg'
import petal4 from '../assets/sakura-petal-4.svg'
import './SakuraPetals.css'

const petalImages = [petal1, petal2, petal3, petal4]

const SakuraPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      image: petalImages[i % petalImages.length],
      left: Math.random() * 100,
      size: Math.random() * 24 + 18,
      delay: Math.random() * 15,
      duration: Math.random() * 8 + 10,
      swayDuration: Math.random() * 4 + 3,
      opacity: Math.random() * 0.5 + 0.3,
      rotateStart: Math.random() * 360,
    }))
  }, [])

  return (
    <div className="sakura-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          <img
            src={petal.image}
            alt=""
            className="sakura-petal-img"
            style={{
              animationDuration: `${petal.swayDuration}s`,
              transform: `rotate(${petal.rotateStart}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default SakuraPetals
