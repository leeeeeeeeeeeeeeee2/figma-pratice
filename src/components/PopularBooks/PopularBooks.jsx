import { useRef } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import CarouselControls from '../CarouselControls/CarouselControls'
import HomeBookCover from '../HomeBookCover/HomeBookCover'
import './PopularBooks.css'

function PopularBooks({ books = [], onSelectBook, onMore }) {
  const listRef = useRef(null)

  const scroll = (direction) => {
    const list = listRef.current
    list.scrollBy({ left: direction * list.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="popular-books">
      <div className="popular-books__header">
        <HomeSectionHeader title="인기도서" onMore={onMore}>
          <CarouselControls onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
        </HomeSectionHeader>
      </div>
      <div className="popular-books__list" ref={listRef}>
        {books.map((book) => (
          <HomeBookCover key={book.id} book={book} hasOverlay onSelect={onSelectBook} />
        ))}
      </div>
    </section>
  )
}

export default PopularBooks
