import arrowPrev from '../../assets/icons/arrow-prev.svg'
import arrowNext from '../../assets/icons/arrow-next.svg'
import pauseIcon from '../../assets/icons/pause.svg'
import './CarouselControls.css'

function CarouselControls({ onPrev, onNext }) {
  return (
    <div className="carousel-controls">
      <button type="button" className="carousel-controls__button" aria-label="이전" onClick={onPrev}>
        <img src={arrowPrev} alt="" />
      </button>
      <button type="button" className="carousel-controls__button" aria-label="자동 재생 정지">
        <img src={pauseIcon} alt="" />
      </button>
      <button type="button" className="carousel-controls__button" aria-label="다음" onClick={onNext}>
        <img src={arrowNext} alt="" />
      </button>
    </div>
  )
}

export default CarouselControls
