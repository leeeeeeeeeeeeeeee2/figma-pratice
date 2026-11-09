import arrowPrev from '../../assets/icons/arrow-prev.svg'
import arrowNext from '../../assets/icons/arrow-next.svg'
import pauseIcon from '../../assets/icons/pause.svg'
import './RelatedBooksPanel.css'

function RelatedBooksPanel({ onPrev, onNext, onPause }) {
  return (
    <div className="related-books">
      <h3 className="related-books__title">함께 대출된 자료</h3>
      <p className="related-books__note">
        *해당 정보는 도서관 정보나루(http://www.data4library.kr) 에서 제공하는 데이터입니다.
      </p>
      <div className="related-books__controls">
        <button type="button" className="related-books__control" aria-label="이전" onClick={onPrev}>
          <img src={arrowPrev} alt="" />
        </button>
        <button type="button" className="related-books__control" aria-label="정지" onClick={onPause}>
          <img src={pauseIcon} alt="" />
        </button>
        <button type="button" className="related-books__control" aria-label="다음" onClick={onNext}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </div>
  )
}

export default RelatedBooksPanel
