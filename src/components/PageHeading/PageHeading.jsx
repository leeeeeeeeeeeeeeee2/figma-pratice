import homeIcon from '../../assets/icons/desktop/breadcrumb-home.png'
import arrowIcon from '../../assets/icons/desktop/breadcrumb-arrow.png'
import './PageHeading.css'

/* crumbs: [{ label, href }]. 마지막 항목이 현재 화면이다. compact는 상세 화면의 좁은 간격이다. */
function PageHeading({ title, crumbs = [], compact = false }) {
  return (
    <div className={`page-heading${compact ? ' page-heading--compact' : ''}`}>
      {title && <h1 className="page-heading__title">{title}</h1>}
      <nav className="page-heading__crumbs" aria-label="현재 위치">
        <a className="page-heading__home" href="#/" aria-label="홈">
          <img src={homeIcon} alt="" />
        </a>
        {crumbs.map((crumb, index) => (
          <span className="page-heading__crumb" key={crumb.label}>
            <img className="page-heading__arrow" src={arrowIcon} alt="" />
            {crumb.href && index < crumbs.length - 1 ? (
              <a className="page-heading__label" href={crumb.href}>
                {crumb.label}
              </a>
            ) : (
              <span className="page-heading__label page-heading__label--current">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  )
}

export default PageHeading
