import BookCover from '../BookCover/BookCover'
import infoIcon from '../../assets/icons/info.png'
import LoanStatus from '../LoanStatus/LoanStatus'
import EbookLinkButton from '../EbookLinkButton/EbookLinkButton'
import './BookResultCard.css'

function BookResultCard({
  variant = 'book',
  libraryName,
  libraryColor,
  title,
  author,
  publisher,
  year,
  location,
  tags = [],
  coverUrl,
  coverPosition,
  loanType = 'unavailable',
  loanStatus,
  loanNote,
  reservedCount,
  reservationCapacity,
  onSelect,
  onOpenEbook,
}) {
  const isEbook = variant === 'ebook'

  return (
    <article className={`book-card${isEbook ? ' book-card--ebook' : ''}`}>
      <div className="book-card__cover">
        <BookCover src={coverUrl} alt={`${title} 표지`} position={coverPosition} />
        <span className="book-card__spine" aria-hidden="true" />
      </div>

      <div className="book-card__content">
        {libraryName && (
          <p className="book-card__library" style={{ '--library-color': libraryColor }}>
            <span className="book-card__library-mark" aria-hidden="true" />
            {libraryName}
          </p>
        )}
        <h3 className="book-card__heading">
          <button type="button" className="book-card__title" onClick={onSelect}>
            {title}
          </button>
        </h3>

        <div className="book-card__body">
          <div className="book-card__details">
            <dl className="book-card__meta">
              {author && (
                <div>
                  <dt>저자</dt>
                  <dd>{author}</dd>
                </div>
              )}
              {publisher && (
                <div>
                  <dt>발행처</dt>
                  <dd>{publisher}</dd>
                </div>
              )}
              {year && (
                <div>
                  <dt>발행년</dt>
                  <dd>{year}</dd>
                </div>
              )}
              {location && (
                <div>
                  <dt>자료위치</dt>
                  <dd>{location}</dd>
                </div>
              )}
            </dl>
            <ul className="book-card__tags">
              {tags.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          </div>

          {isEbook ? (
            <EbookLinkButton onClick={onOpenEbook} />
          ) : loanStatus && (
            <div className="book-card__loan">
              <LoanStatus type={loanType} label={loanStatus} note={loanNote} />
              <p className="book-card__reservation">
                <span className="book-card__reservation-label">예약자수 :</span>
                <span className="book-card__reserved">{reservedCount}</span>/
                {reservationCapacity}
                <img src={infoIcon} alt="" width="16" height="16" />
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default BookResultCard
