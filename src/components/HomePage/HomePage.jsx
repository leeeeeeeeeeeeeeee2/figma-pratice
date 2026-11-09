import HomeHero from '../HomeHero/HomeHero'
import HomeBanner from '../HomeBanner/HomeBanner'
import PopularBooks from '../PopularBooks/PopularBooks'
import NewBooks from '../NewBooks/NewBooks'
import HolidaySchedule from '../HolidaySchedule/HolidaySchedule'
import RecommendedBooks from '../RecommendedBooks/RecommendedBooks'
import {
  BANNERS,
  HOLIDAY_SCHEDULE,
  NEW_BOOKS,
  POPULAR_BOOKS,
  POPULAR_KEYWORDS,
  RECOMMENDED_BOOKS,
} from '../../data/sampleData'
import useIsDesktop from '../../hooks/useIsDesktop'
import './HomePage.css'

function HomePage({ onSearch, onSelectBook }) {
  const isDesktop = useIsDesktop()

  return (
    <main className="home-page">
      <HomeHero keywords={POPULAR_KEYWORDS} onSearch={onSearch} />
      {!isDesktop && <HomeBanner banners={BANNERS} />}
      <PopularBooks books={POPULAR_BOOKS} onSelectBook={onSelectBook} onMore={() => {}} />
      <div className="home-page__middle">
        <NewBooks books={NEW_BOOKS} onSelectBook={onSelectBook} onMore={() => {}} />
        <HolidaySchedule
          schedule={HOLIDAY_SCHEDULE}
          defaultYear={2026}
          defaultMonth={9}
          defaultLibrary="선경도서관"
        />
      </div>
      <RecommendedBooks
        books={RECOMMENDED_BOOKS}
        libraryLabel="선경도서관"
        onSelectBook={onSelectBook}
        onMore={() => {}}
      />
    </main>
  )
}

export default HomePage
