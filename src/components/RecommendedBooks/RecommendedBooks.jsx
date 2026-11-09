import { useRef, useState } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import CarouselControls from '../CarouselControls/CarouselControls'
import CarouselPaging from '../CarouselPaging/CarouselPaging'
import HomeBookCover from '../HomeBookCover/HomeBookCover'
import './RecommendedBooks.css'

function RecommendedBooks({ books = [], libraryLabel, onSelectBook, onMore }) {
  const [index, setIndex] = useState(0)
  const miniListRef = useRef(null)
  const selected = books[index]

  const move = (step) => {
    const nextIndex = (index + step + books.length) % books.length
    const list = miniListRef.current
    setIndex(nextIndex)
    list.scrollTo({ left: list.children[nextIndex].offsetLeft - list.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="recommended">
      <div className="recommended__top">
        <div className="recommended__header">
          <HomeSectionHeader title="추천도서" onMore={onMore}>
            <CarouselPaging current={index + 1} total={books.length} />
            <CarouselControls onPrev={() => move(-1)} onNext={() => move(1)} />
          </HomeSectionHeader>
        </div>
        <span className="recommended__library">{libraryLabel}</span>
      </div>

      <div className="recommended__body">
        {selected && (
          <div className="recommended__detail">
            <HomeBookCover book={selected} size="plain" onSelect={onSelectBook} />
            <div className="recommended__text">
              {selected.title && <h3 className="recommended__title">{selected.title}</h3>}
              {selected.title && (
                <dl className="recommended__meta">
                  <div>
                    <dt>저자</dt>
                    <dd>{selected.author}</dd>
                  </div>
                  <div>
                    <dt>발행처</dt>
                    <dd>{selected.publisher}</dd>
                  </div>
                  <div>
                    <dt>발행년</dt>
                    <dd>{selected.year}</dd>
                  </div>
                </dl>
              )}
              {selected.tags && (
                <ul className="recommended__tags">
                  {selected.tags.map((tag) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              )}
              <div className="recommended__intro">
                <p className="recommended__description">
                  <span className="recommended__description-text">{selected.description}</span>
                </p>
                <button type="button" className="recommended__intro-button">
                  + 책소개
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="recommended__minis" ref={miniListRef}>
          {books.map((book) => (
            <HomeBookCover key={book.id} book={book} size="mini" onSelect={onSelectBook} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedBooks
