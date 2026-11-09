import moreArrow from '../../assets/icons/common/more-arrow.svg'
import './HomeSectionHeader.css'

function HomeSectionHeader({ title, onMore, children }) {
  return (
    <div className="home-section-header">
      <div className="home-section-header__title-group">
        <h2 className="home-section-header__title">{title}</h2>
        {onMore && (
          <button type="button" className="home-section-header__more" onClick={onMore}>
            더보기
            <img src={moreArrow} alt="" />
          </button>
        )}
      </div>
      {children && <div className="home-section-header__side">{children}</div>}
    </div>
  )
}

export default HomeSectionHeader
