import { useState } from 'react'
import MobileIcon from '../MobileIcon/MobileIcon'
import './HomeBanner.css'

function HomeBanner({ banners = [] }) {
  const [index, setIndex] = useState(0)

  const move = (step) => setIndex((index + step + banners.length) % banners.length)

  return (
    <section className="home-banner" aria-label="홍보 배너">
      <div className="home-banner__viewport">
        <div className="home-banner__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {banners.map((banner, bannerIndex) => (
            <img
              key={banner.id}
              className="home-banner__image"
              src={banner.image}
              alt={banner.title}
              aria-hidden={bannerIndex !== index}
            />
          ))}
        </div>
      </div>
      <div className="home-banner__controls">
        <button type="button" className="home-banner__control" aria-label="이전 배너" onClick={() => move(-1)}>
          <MobileIcon name="banner-prev" />
        </button>
        <button type="button" className="home-banner__control" aria-label="자동 재생">
          <MobileIcon name="banner-play" />
        </button>
        <button
          type="button"
          className="home-banner__control home-banner__control--next"
          aria-label="다음 배너"
          onClick={() => move(1)}
        >
          <MobileIcon name="banner-next" />
        </button>
      </div>
    </section>
  )
}

export default HomeBanner
