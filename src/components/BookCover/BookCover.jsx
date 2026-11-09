import placeholderCover from '../../assets/covers/placeholder.jpg'
import './BookCover.css'

/* src가 없으면 표지 없음 이미지를 보여 준다. position="top"은 이미지 위쪽을 기준으로 자른다. */
function BookCover({ src, alt = '', position = 'center' }) {
  return (
    <img
      className={`book-cover book-cover--${position}`}
      src={src || placeholderCover}
      alt={alt}
    />
  )
}

export default BookCover
