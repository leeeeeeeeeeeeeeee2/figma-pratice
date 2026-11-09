import footerLogo from '../../assets/images/footer-logo.png'
import './SiteFooter.css'

function SiteFooter() {
  return (
    <footer className="site-footer">
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
