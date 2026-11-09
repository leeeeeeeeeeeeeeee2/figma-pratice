import emptyBox from '../../assets/icons/empty-box.png'
import './BookStatsPanel.css'

const SECTIONS = [
  { id: 'trend', title: '대출 추이', isSquare: true },
  { id: 'tags', title: '태그 클라우드' },
  { id: 'group', title: '다대출 이용자 그룹' },
]

function BookStatsPanel() {
  return (
    <div className="book-stats">
      {SECTIONS.map((section) => (
        <section key={section.id}>
          <h3 className="book-stats__title">{section.title}</h3>
          <div className={`book-stats__box${section.isSquare ? ' book-stats__box--square' : ''}`}>
            <img src={emptyBox} alt="" width="80" height="80" />
            <p className="book-stats__empty">데이터가 없습니다.</p>
          </div>
        </section>
      ))}
      <p className="book-stats__note">
        * 상기 정보는 도서관정보나루(http://www.data4library.kr) 에서 제공하는 데이터입니다.
      </p>
    </div>
  )
}

export default BookStatsPanel
