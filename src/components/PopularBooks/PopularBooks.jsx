import { useRef, useState } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import CarouselControls from '../CarouselControls/CarouselControls'
import CarouselPaging from '../CarouselPaging/CarouselPaging'
import HomeBookCover from '../HomeBookCover/HomeBookCover'
import useIsDesktop from '../../hooks/useIsDesktop'
import './PopularBooks.css'

function PopularBooks({ books = [], onSelectBook, onMore }) {
  const listRef = useRef(null)
  const [index, setIndex] = useState(0)
  const isDesktop = useIsDesktop()

  const move = (step) => {
    const list = listRef.current
    if (!isDesktop) {
      list.scrollBy({ left: step * list.clientWidth, behavior: 'smooth' })
      return
    }
    const nextIndex = (index + step + books.length) % books.length
    setIndex(nextIndex)
    list.scrollTo({ left: list.children[nextIndex].offsetLeft - list.children[0].offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="popular-books">
      <div className="popular-books__header">
        <HomeSectionHeader title="인기도서" onMore={onMore}>
          {isDesktop && <CarouselPaging current={index + 1} total={books.length} />}
          <CarouselControls onPrev={() => move(-1)} onNext={() => move(1)} />
        </HomeSectionHeader>
      </div>
      <div className="popular-books__list" ref={listRef}>
        {books.map((book) => (
          <HomeBookCover key={book.id} book={book} hasOverlay={!isDesktop} onSelect={onSelectBook} />
        ))}
      </div>
    </section>
  )
}

export default PopularBooks
