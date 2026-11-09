import BookResultCard from '../BookResultCard/BookResultCard'
import BookInfoTabs from '../BookInfoTabs/BookInfoTabs'
import LoanStatus from '../LoanStatus/LoanStatus'
import ReservationCount from '../ReservationCount/ReservationCount'
import PageHeading from '../PageHeading/PageHeading'
import useIsDesktop from '../../hooks/useIsDesktop'
import { SAMPLE_HOLDINGS } from '../../data/sampleData'
import './BookDetailPage.css'

function BookDetailPage({ book }) {
  const isDesktop = useIsDesktop()

  if (!book) {
    return (
      <main className="book-detail">
        <p className="book-detail__missing">도서 정보를 찾을 수 없습니다.</p>
      </main>
    )
  }

  if (!isDesktop) {
    return (
      <main className="book-detail">
        <BookResultCard {...book} />
        <BookInfoTabs holdings={SAMPLE_HOLDINGS} />
      </main>
    )
  }

  return (
    <main className="book-detail">
      <PageHeading compact crumbs={[{ label: '도서검색', href: '#/search' }, { label: '도서상세' }]} />
      <section className="book-detail__summary">
        <BookResultCard {...book} hideLoan />
        <div className="book-detail__actions">
          <button type="button" className="book-detail__action">
            미리보기
          </button>
          <button type="button" className="book-detail__action book-detail__action--primary">
            상세보기
          </button>
        </div>

        <div className="book-detail__side">
          {book.loanStatus && (
            <div className="book-detail__loan">
              <LoanStatus type={book.loanType} label={book.loanStatus} note={book.loanNote} />
              <ReservationCount reserved={book.reservedCount} capacity={book.reservationCapacity} />
            </div>
          )}
          {book.description && (
            <div className="book-detail__intro">
              <p className="book-detail__intro-text">{book.description}</p>
              <button type="button" className="book-detail__more">
                + 더보기
              </button>
            </div>
          )}
        </div>
      </section>
      <BookInfoTabs holdings={SAMPLE_HOLDINGS} />
    </main>
  )
}

export default BookDetailPage
