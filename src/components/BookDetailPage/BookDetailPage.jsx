import BookResultCard from '../BookResultCard/BookResultCard'
import BookInfoTabs from '../BookInfoTabs/BookInfoTabs'
import { SAMPLE_HOLDINGS } from '../../data/sampleData'
import './BookDetailPage.css'

function BookDetailPage({ book }) {
  if (!book) {
    return (
      <main className="book-detail">
        <p className="book-detail__missing">도서 정보를 찾을 수 없습니다.</p>
      </main>
    )
  }

  return (
    <main className="book-detail">
      <BookResultCard {...book} />
      <BookInfoTabs holdings={SAMPLE_HOLDINGS} />
    </main>
  )
}

export default BookDetailPage
