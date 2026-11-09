import { useState } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import CarouselControls from '../CarouselControls/CarouselControls'
import CarouselPaging from '../CarouselPaging/CarouselPaging'
import HomeBookCover from '../HomeBookCover/HomeBookCover'
import MobileIcon from '../MobileIcon/MobileIcon'
import useIsDesktop from '../../hooks/useIsDesktop'
import './NewBooks.css'

const VISIBLE_COUNT = 3

function NewBooks({ books = [], onSelectBook, onMore }) {
  const [index, setIndex] = useState(0)
  const isDesktop = useIsDesktop()
  const visibleBooks = Array.from(
    { length: Math.min(VISIBLE_COUNT, books.length) },
    (_, offset) => books[(index + offset) % books.length],
  )
  const featured = visibleBooks[0]

  /* 모바일은 3권씩, 데스크톱은 시안의 1 / 12 표시에 맞춰 1권씩 넘긴다. */
  const move = (direction) => {
    const step = isDesktop ? 1 : VISIBLE_COUNT
    setIndex((index + direction * step + books.length) % books.length)
  }

  return (
    <section className="new-books">
      <div className="new-books__top">
        <div className="new-books__header">
          <HomeSectionHeader title="신착도서" onMore={onMore}>
            {isDesktop && <CarouselPaging current={index + 1} total={books.length} />}
            <CarouselControls onPrev={() => move(-1)} onNext={() => move(1)} />
          </HomeSectionHeader>
        </div>
        {featured && (
          <div className="new-books__featured">
            <HomeBookCover book={featured} size="featured" hasOverlay={!isDesktop} onSelect={onSelectBook}>
              {!isDesktop && (
                <>
                  <span className="new-books__plus">
                    <MobileIcon name="book-plus" />
                  </span>
                  <span className="new-books__caption">
                    <span className="new-books__caption-title">{featured.title}</span>
                    <span className="new-books__caption-text">{featured.author}</span>
                    <span className="new-books__caption-text">{featured.publisher}</span>
                  </span>
                </>
              )}
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
