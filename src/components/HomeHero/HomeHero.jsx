import { useRef, useState } from 'react'
import MobileIcon from '../MobileIcon/MobileIcon'
import DesktopIcon from '../DesktopIcon/DesktopIcon'
import { LIBRARIES } from '../LibraryCheckboxGrid/libraries'
import useIsDesktop from '../../hooks/useIsDesktop'
import './HomeHero.css'

const heroIcons = import.meta.glob('../../assets/icons/hero/*.svg', { eager: true, import: 'default' })
const heroIcon = (name) => heroIcons[`../../assets/icons/hero/${name}.svg`]

/* Figma에서 4열씩 줄바꿈된 순서 그대로 */
const MENU_ITEMS = [
  { icon: 'popular', label: '인기도서' },
  { icon: 'new-books', label: '신착도서' },
  { icon: 'e-library', label: '전자도서관' },
  { icon: 'gyeonggi-library', label: '경기도서관' },
  { icon: 'recommend', label: '추천도서' },
  { icon: 'wish-book', label: '희망도서 신청' },
  { icon: 'magazine', label: '도서관매거진' },
  { icon: 'ebook', label: '수원시 E-BOOK 자료관' },
  { icon: 'regional-library', label: '지역도서관 통합검색' },
  { icon: 'integrated-reserve', label: '통합예약신청' },
  { icon: 'digital-room', label: '디지털자료실 PC예약' },
  { icon: 'reading-room', label: '열람실 좌석조회' },
  { icon: 'notice', label: '공지사항' },
  { icon: 'service-guide', label: '서비스안내' },
  { icon: 'library-intro', label: '도서관소개' },
  { icon: 'facebook', label: 'FACEBOOK' },
]

/* Figma 데스크톱 시안의 순서와 이름. 전자도서관과 E-BOOK은 시안에서 같은 아이콘을 쓴다. */
const DESKTOP_MENU_ITEMS = [
  { icon: 'popular', label: '인기도서' },
  { icon: 'new-books', label: '신착도서' },
  { icon: 'recommend', label: '추천도서' },
  { icon: 'wish-book', label: '희망도서신청' },
  { icon: 'regional-library', label: '지역도서관 통합검색' },
  { icon: 'integrated-reserve', label: '통합 예약신청' },
  { icon: 'notice', label: '공지사항' },
  { icon: 'service-guide', label: '서비스안내' },
  { icon: 'e-library', label: '전자도서관' },
  { icon: 'gyeonggi-library', label: '경기도서관' },
  { icon: 'magazine', label: '도서관 매거진' },
  { icon: 'e-library', label: '수원시 E-BOOK 자료관' },
  { icon: 'digital-room', label: '디지털자료실 PC 예약' },
  { icon: 'reading-room', label: '열람실 좌석조회' },
  { icon: 'library-intro', label: '도서관소개' },
  { icon: 'facebook', label: 'FACEBOOK' },
]

function HomeHero({ keywords = [], onSearch }) {
  const isDesktop = useIsDesktop()
  const menuItems = isDesktop ? DESKTOP_MENU_ITEMS : MENU_ITEMS
  const [library, setLibrary] = useState('')
  const [query, setQuery] = useState('')
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const menuRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.({ query, library })
  }

  const moveMenu = (direction) => {
    const menu = menuRef.current
    menu.scrollBy({ left: direction * menu.clientWidth, behavior: 'smooth' })
  }

  const updateMenuPosition = () => {
    const menu = menuRef.current
    setIsAtStart(menu.scrollLeft <= 1)
    setIsAtEnd(menu.scrollLeft + menu.clientWidth >= menu.scrollWidth - 1)
  }

  return (
    <section className="home-hero">
      <form className="home-hero__search" onSubmit={handleSubmit}>
        <div className="home-hero__library">
          <MobileIcon name="grid" />
          <select
            className="home-hero__select"
            aria-label="도서관 선택"
            value={library}
            onChange={(event) => setLibrary(event.target.value)}
          >
            <option value="">도서관선택</option>
            {LIBRARIES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="home-hero__field">
          <input
            className="home-hero__input"
            type="search"
            aria-label="검색어"
            placeholder="검색어를 입력하세요."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" className="home-hero__submit" aria-label="검색">
            {isDesktop ? <DesktopIcon name="search" /> : <MobileIcon name="hero-search" />}
          </button>
        </div>
      </form>

      {isDesktop && keywords.length > 0 && (
        <div className="home-hero__keywords">
          <h2 className="home-hero__keywords-title">
            <span className="home-hero__star" aria-hidden="true">
              <DesktopIcon name="popular-star" />
            </span>
            인기검색어
          </h2>
          <ul className="home-hero__keyword-list">
            {keywords.map((keyword) => (
              <li key={keyword}>
                <button
                  type="button"
                  className="home-hero__keyword"
                  onClick={() => onSearch?.({ query: keyword, library })}
                >
                  #{keyword}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="home-hero__panel">
        <ul className="home-hero__menu" ref={menuRef} onScroll={updateMenuPosition}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <button type="button" className="home-hero__item">
                <span className="home-hero__icon">
                  <img src={heroIcon(item.icon)} alt="" width="40" height="40" />
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {!isAtStart && (
          <button
            type="button"
            className="home-hero__nav home-hero__nav--prev"
            aria-label="이전 메뉴"
            onClick={() => moveMenu(-1)}
          >
            <MobileIcon name="menu-prev" />
          </button>
        )}
        {!isAtEnd && (
          <button
            type="button"
            className="home-hero__nav home-hero__nav--next"
            aria-label="다음 메뉴"
            onClick={() => moveMenu(1)}
          >
            <MobileIcon name="hero-next" />
          </button>
        )}
      </div>
    </section>
  )
}

export default HomeHero
