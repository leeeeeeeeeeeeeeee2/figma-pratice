import DesktopIcon from '../DesktopIcon/DesktopIcon'
import './DesktopHeader.css'

/* 메뉴 이동 경로는 자료검색만 정해져 있다. 나머지는 경로가 정해지면 연결한다. */
const NAV_ITEMS = [
  { label: '자료검색', href: '#/search' },
  { label: '큐레이션' },
  { label: '전자도서관' },
  { label: '지역도서관 통합검색' },
  { label: '나의도서관' },
]

function DesktopHeader({ onLogin, onSignup, onMenu }) {
  return (
    <header className="desktop-header">
      <div className="desktop-header__top">
        <span className="desktop-header__org">도서관 사업부</span>
        <button type="button" className="desktop-header__auth" onClick={onLogin}>
          <span className="desktop-header__auth-icon">
            <DesktopIcon name="login" />
          </span>
          로그인
        </button>
        <button type="button" className="desktop-header__auth" onClick={onSignup}>
          <span className="desktop-header__auth-icon">
            <DesktopIcon name="signup" />
          </span>
          회원가입
        </button>
      </div>

      <div className="desktop-header__bar">
        <a className="desktop-header__logo" href="#/">
          <DesktopIcon name="logo" alt="수원시 도서관 홈" />
        </a>
        <div className="desktop-header__right">
          <nav className="desktop-header__nav" aria-label="주 메뉴">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <a key={item.label} className="desktop-header__nav-item" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <button key={item.label} type="button" className="desktop-header__nav-item">
                  {item.label}
                </button>
              ),
            )}
          </nav>
          <button type="button" className="desktop-header__menu" aria-label="전체 메뉴" onClick={onMenu}>
            <DesktopIcon name="hamburger" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader
