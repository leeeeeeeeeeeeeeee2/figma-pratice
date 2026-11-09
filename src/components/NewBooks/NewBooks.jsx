import { useState } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import CarouselControls from '../CarouselControls/CarouselControls'
import HomeBookCover from '../HomeBookCover/HomeBookCover'
import MobileIcon from '../MobileIcon/MobileIcon'
import './NewBooks.css'

const PAGE_SIZE = 3

function NewBooks({ books = [], onSelectBook, onMore }) {
  const [page, setPage] = useState(0)
  const pageCount = Math.max(Math.ceil(books.length / PAGE_SIZE), 1)
  const visibleBooks = books.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
  const featured = visibleBooks[0]

  const move = (step) => setPage((page + step + pageCount) % pageCount)

  return (
    <section className="new-books">
      <div className="new-books__top">
        <HomeSectionHeader title="신착도서" onMore={onMore}>
          <CarouselControls onPrev={() => move(-1)} onNext={() => move(1)} />
        </HomeSectionHeader>
        {featured && (
          <div className="new-books__featured">
            <HomeBookCover book={featured} size="featured" hasOverlay onSelect={onSelectBook}>
              <span className="new-books__plus">
                <MobileIcon name="book-plus" />
              </span>
              <span className="new-books__caption">
                <span className="new-books__caption-title">{featured.title}</span>
                <span className="new-books__caption-text">{featured.author}</span>
                <span className="new-books__caption-text">{featured.publisher}</span>
              </span>
            </HomeBookCover>
          </div>
        )}
      </div>

      <ul className="new-books__list">
        {visibleBooks.map((book) => (
          <li className="new-books__item" key={book.id}>
            <HomeBookCover book={book} size="list" onSelect={onSelectBook} />
            <div className="new-books__text">
              <h3 className="new-books__title">{book.title}</h3>
              <p className="new-books__meta">
                {book.author}
                <span className="new-books__divider" aria-hidden="true" />
                {book.publisher}
              </p>
              <ul className="new-books__tags">
                {book.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NewBooks
