import BookCover from '../BookCover/BookCover'
import './HomeBookCover.css'

function HomeBookCover({ book, size = 'popular', hasOverlay = false, onSelect, children }) {
  return (
    <button
      type="button"
      className={`home-book home-book--${size}`}
      aria-label={book.title ?? '도서 상세 보기'}
      onClick={() => onSelect?.(book)}
    >
      <BookCover src={book.coverUrl} position={book.coverPosition} />
      {hasOverlay && <span className="home-book__overlay" />}
      <span className="home-book__spine" />
      {children}
    </button>
  )
}

export default HomeBookCover
