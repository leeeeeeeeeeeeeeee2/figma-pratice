/*
 * 컴포넌트 확인용 임시 화면. 아래 값은 Figma 시안의 예시이며 실제 데이터가 아니다.
 * 실제 페이지를 만들면 이 폴더와 App.jsx의 연결을 제거한다.
 */
import BookInfoTabs from '../BookInfoTabs/BookInfoTabs'
import MaterialResults from '../MaterialResults/MaterialResults'
import LibrarySearch from '../LibrarySearch/LibrarySearch'
import LoginButton from '../LoginButton/LoginButton'
import LoginTabs from '../LoginTabs/LoginTabs'
import SearchModeButton from '../SearchModeButton/SearchModeButton'
import SearchModeTabs from '../SearchModeTabs/SearchModeTabs'
import MaterialTypeTab from '../MaterialTypeTab/MaterialTypeTab'
import InfoTabButton from '../InfoTabButton/InfoTabButton'
import BookCover from '../BookCover/BookCover'
import LibraryCheckbox from '../LibraryCheckbox/LibraryCheckbox'
import LoanStatus from '../LoanStatus/LoanStatus'
import EbookLinkButton from '../EbookLinkButton/EbookLinkButton'
import MobileIcon from '../MobileIcon/MobileIcon'
import { MOBILE_MENU_ICONS, MOBILE_COMMON_ICONS } from '../MobileIcon/mobileIconNames'
import DesktopIcon from '../DesktopIcon/DesktopIcon'
import {
  DESKTOP_MENU_ICONS,
  DESKTOP_HEADER_ICONS,
  DESKTOP_COMMON_ICONS,
} from '../DesktopIcon/desktopIconNames'
import moonWhiteCover from '../../assets/covers/moon-white.jpg'
import moonDarkCover from '../../assets/covers/moon-dark.jpg'
import ebookCover from '../../assets/covers/ebook-lee-jungseop.jpg'
import './ComponentPreview.css'

const HOLDINGS = [
  { id: 1, status: 'x 대출불가', dueDate: '2026/10/30', libraryName: '서수원', libraryColor: 'var(--color-library-seosuwon-holding)', room: '[서수원]종합자료실' },
  { id: 2, status: 'x 대출불가', libraryName: '한아름', libraryColor: 'var(--color-library-hanareum)', room: '[한아름]청소년자료실' },
  { id: 3, status: 'x 대출불가', dueDate: '2026/11/06', libraryName: '태장마루', libraryColor: 'var(--color-library-taejangmaru)', room: '[태장마루]문헌정보자료실' },
]

const TYPES = [
  { id: 'book', label: '단행본', count: 469 },
  { id: 'serial', label: '연속간행물', count: 0 },
  { id: 'nonbook', label: '비도서', count: 5 },
  { id: 'ebook', label: '전자책', count: 2 },
]

const ITEMS_BY_TYPE = {
  book: [
    { id: 1, libraryName: '한아름', libraryColor: 'var(--color-library-hanareum)', coverUrl: moonWhiteCover, title: '모순', author: '[양귀자 지음]', publisher: '살림', year: '1998', location: '[한아름]청소년자료실', tags: ['모순', '장편소설', '한국현대문학'], loanStatus: '대출불가', loanNote: '(타관대출 대기중)', reservedCount: 1, reservationCapacity: 2 },
    { id: 2, libraryName: '서수원', libraryColor: 'var(--color-library-seosuwon)', title: '모순', author: '양귀자 지음', publisher: '살림', year: '2006', location: '[서수원]종합자료실', coverUrl: moonDarkCover, coverPosition: 'top', tags: ['장편소설'], loanType: 'available', loanStatus: '대출가능', loanNote: '(비치중)', reservedCount: 0, reservationCapacity: 2 },
  ],
  ebook: [
    { id: 3, variant: 'ebook', libraryName: '선경', libraryColor: 'var(--color-library-seongyeong-ebook)', coverUrl: ebookCover, title: '이중섭. 2, 순수한 모순의 사랑 : 최문희 장편소설', author: '최문희 지음', publisher: '다산책방', year: '2013', tags: ['한국문학', '한국소설', '장편소설'] },
  ],
}

function ComponentPreview() {
  return (
    <main className="component-preview">
      <BookInfoTabs holdings={HOLDINGS} />
      <BookInfoTabs defaultTab="related" />
      <BookInfoTabs defaultTab="stats" />
      <MaterialResults types={TYPES} itemsByType={ITEMS_BY_TYPE} />
      <MaterialResults types={TYPES} itemsByType={ITEMS_BY_TYPE} defaultType="ebook" />
      <LibrarySearch defaultQuery="모순" />
      <LibrarySearch defaultMode="detail" />
      <div className="component-preview__row">
        <LoginButton />
        <LoginButton isActive />
        <LoginTabs activeId="integrated" />
        <LoginTabs activeId="library" />
      </div>
      <div className="component-preview__buttons">
        <SearchModeButton>일반검색</SearchModeButton>
        <SearchModeButton isActive>일반검색</SearchModeButton>
        <MaterialTypeTab label="단행본" count={469} />
        <MaterialTypeTab label="단행본" count={469} isActive />
      </div>
      <SearchModeTabs activeId="detail" />
      <div className="component-preview__row component-preview__row--icons">
        <LoanStatus type="unavailable" label="대출불가" note="(타관대출 대기중)" />
        <LoanStatus type="available" label="대출가능" note="(비치중)" />
        <EbookLinkButton />
        <LibraryCheckbox label="서수원" checked onChange={() => {}} />
        <InfoTabButton>소장정보</InfoTabButton>
        <InfoTabButton isActive>소장정보</InfoTabButton>
      </div>
      <div className="component-preview__row">
        <BookCover src={moonWhiteCover} alt="모순 표지" />
        <BookCover src={moonDarkCover} alt="모순 표지" position="top" />
        <BookCover alt="표지 없음" />
        <BookCover src={ebookCover} alt="이중섭 표지" />
      </div>
      {[MOBILE_MENU_ICONS, MOBILE_COMMON_ICONS].map((names) => (
        <div className="component-preview__row component-preview__row--icons" key={names[0]}>
          {names.map((name) => (
            <MobileIcon key={name} name={name} alt={name} />
          ))}
        </div>
      ))}
      {[DESKTOP_MENU_ICONS, DESKTOP_HEADER_ICONS, DESKTOP_COMMON_ICONS].map((names) => (
        <div className="component-preview__row component-preview__row--icons" key={`desktop-${names[0]}`}>
          {names.map((name) => (
            <DesktopIcon key={name} name={name} alt={name} />
          ))}
        </div>
      ))}
    </main>
  )
}

export default ComponentPreview
