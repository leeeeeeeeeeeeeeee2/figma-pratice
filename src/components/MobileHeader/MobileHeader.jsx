import MobileIcon from '../MobileIcon/MobileIcon'
import './MobileHeader.css'

function MobileHeader({ onHome, onLogin, onSignup, onMenu }) {
  return (
    <header className="mobile-header">
      <a className="mobile-header__logo" href="#/" onClick={onHome}>
        <MobileIcon name="logo" alt="수원시 도서관 홈" />
      </a>
      <div className="mobile-header__actions">
        <div className="mobile-header__auth">
          <button type="button" className="mobile-header__link" onClick={onLogin}>
            로그인
          </button>
          <span className="mobile-header__divider" aria-hidden="true" />
          <button type="button" className="mobile-header__link" onClick={onSignup}>
            회원가입
          </button>
        </div>
        <button type="button" className="mobile-header__menu" aria-label="전체 메뉴" onClick={onMenu}>
          <MobileIcon name="hamburger" />
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
