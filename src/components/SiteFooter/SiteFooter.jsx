import footerLogo from '../../assets/images/footer-logo.png'
import './SiteFooter.css'

/* variant: 'home'은 홈, 'page'는 자료검색·상세 화면 시안의 푸터다. 모바일에서는 모양이 같다. */
function SiteFooter({ variant = 'page' }) {
  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <nav className="site-footer__links" aria-label="약관">
        <a href="#/">개인정보처리방침</a>
        <a href="#/">홈페이지 이용약관</a>
      </nav>
      <p className="site-footer__address">
        <span>16258</span>
        <span>경기도 수원시 팔달구 신풍로 23번길 68(신풍동)</span>
      </p>
      <p className="site-footer__copyright">COPYRIGHT BY 수원시 도서관사업소 ALL RIGHT RESERVED.</p>
      <img className="site-footer__logo" src={footerLogo} alt="수원시 도서관" />
    </footer>
  )
}

export default SiteFooter
