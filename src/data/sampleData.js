/*
 * 화면 확인용 예시 데이터. Figma 시안의 값을 옮긴 것이며 실제 서비스 데이터가 아니다.
 * 백엔드가 정해지면 이 파일을 API 응답으로 교체한다.
 */
import moonWhite from '../assets/covers/moon-white.jpg'
import moonDark from '../assets/covers/moon-dark.jpg'
import ebookCover from '../assets/covers/ebook-lee-jungseop.jpg'

const images = import.meta.glob('../assets/sample/**/*.png', { eager: true, import: 'default' })
const sample = (path) => images[`../assets/sample/${path}.png`]

const twoDigits = (number) => String(number).padStart(2, '0')

const BANNER_TITLES = [
  '2026년 수원시도서관 추석 연휴 휴관 및 상호대차 일정 안내',
  '수원시 도서관 회원 개인정보 정비',
  '수원시도서관 독서골든벨 봉사자',
  '수원시도서관 희망도서 바로대출 신청마감 안내',
  '수원시도서관 독서골든벨',
  '수원시도서관 인도래작은도서관 재개관',
  '수원시도서관 예약방식',
  '수원시도서관 새빛북런 독서챌린지',
  '수원시도서관 올해의 책',
  '수원시도서관 공유공간 안내',
  '수원시도서관 2026 희망도서 서비스',
  '수원시도서관 모바일웹앱 이용가이드',
  '수원시도서관 안내',
]

export const BANNERS = BANNER_TITLES.map((title, index) => ({
  id: index + 1,
  title,
  image: sample(`banners/${twoDigits(index + 1)}`),
}))

export const POPULAR_BOOKS = [1, 2, 3, 4].map((number) => ({
  id: `popular-${number}`,
  title: `인기도서 ${number}`,
  coverUrl: sample(`popular/${twoDigits(number)}`),
}))

export const NEW_BOOKS = [
  { id: 'new-1', title: '고양이의 노래', author: '이미나 지음', publisher: '에이치비프레스', tags: ['반려동물', '일상', '사랑'], cover: 'cat' },
  { id: 'new-2', title: '사막의 농부', author: '의자 지음', publisher: '책고래', tags: ['사막', '농부', '생명'], cover: 'desert' },
  { id: 'new-3', title: '얼굴', author: '의자 글·', publisher: '책고래', tags: ['얼굴', '의자', '글'], cover: 'face' },
  { id: 'new-4', title: '중앙텃밭 : 행복한 글쓰기 작품모음집. 제22집', author: '수원시 중앙도서관 [편]', publisher: '수원시 중앙도서관', tags: ['중앙텃밭', '행복한', '글쓰기'] },
  { id: 'new-5', title: '국립 박물관의 명작 민화', author: '최경원 지음', publisher: '현 디자인 연구소', tags: ['소장고', '색채', '책거리'] },
  { id: 'new-6', title: '니자이나리, 찾지 않는 이름들', author: '전효원 지음', publisher: '안전가옥', tags: ['선의', '공조', '증발'] },
  { id: 'new-7', title: '박완서의 낱말들', author: '박완서 지음', publisher: '웅진지식하우스', tags: ['기억', '세월', '마음'], cover: 'words' },
  { id: 'new-8', title: '극한 진화의 세계', author: '이정도 지음', publisher: '다산초당', tags: ['적응', '휴면', '속도'], cover: 'evolution' },
  { id: 'new-9', title: '유선과 랄프', author: '찰리 스미스 지음', publisher: '좋은생각(좋은생각사람들)', tags: ['피난처', '이방인', '그리움'], cover: 'ralph' },
  { id: 'new-10', title: '논리는 나의 힘', author: '최훈 지음', publisher: '우리학교', tags: ['열린마음', '오류', '기술'], cover: 'logic' },
  { id: 'new-11', title: '모두를 위한 반도체 특별 과외', author: '이봉렬 지음', publisher: '메디치미디어', tags: ['시스템', '현장', '메모리'], cover: 'chip' },
  { id: 'new-12', title: '불행에 몰두하지 않는다', author: '정지우 지음', publisher: '페이지2북스', tags: ['시즌제', '선택', '애씀'], cover: 'unhappy' },
].map(({ cover, ...book }) => ({ ...book, coverUrl: cover ? sample(`new/${cover}`) : undefined }))

/* 1번의 소개 글은 시안 문구 그대로다. 다른 책의 내용이므로(prd.md 12장) 실제 데이터로 교체한다. 1번 외에는 시안에 글 정보가 없다. */
export const RECOMMENDED_BOOKS = Array.from({ length: 12 }, (_, index) => ({
  id: `recommend-${index + 1}`,
  coverUrl: sample(`recommend/${twoDigits(index + 1)}`),
  ...(index === 0 && {
    title: '오은영의 화해 : 상처받은 내면의 나...',
    author: '오은영 지음',
    publisher: '코리아닷컴',
    year: '2007',
    tags: ['화해', '상처', '내면', '용기', '개인심리학'],
    description:
      "삶과 죽음을 생각하게 하는 여행자의 도시, 하이델베르크의 이야기! 소설가 김영하의 『여행자 - 하이델베르크』. 여러 문학상을 수상하며 우리 시대를 대표하는 소설가가 된 저자의 여행기 시리즈 '김영하의 여행자'다....",
  }),
}))

/* { '연도.월': { 도서관이름: [휴관 날짜] } } */
export const HOLIDAY_SCHEDULE = {
  '2026.09': { 선경도서관: [7, 14, 21, 24, 25, 26, 28] },
}

const LOAN_WAITING = { loanStatus: '대출불가', loanNote: '(타관대출 대기중)' }

export const SEARCH_RESULTS = {
  book: [
    { id: 'result-1', libraryName: '한아름', libraryColor: 'var(--color-library-hanareum)', coverUrl: moonWhite, title: '모순', author: '[양귀자 지음]', publisher: '살림', year: '1998', location: '[한아름]청소년자료실', tags: ['모순', '장편소설', '한국현대문학'], ...LOAN_WAITING, reservedCount: 1, reservationCapacity: 2 },
    { id: 'result-2', libraryName: '서수원', libraryColor: 'var(--color-library-seosuwon)', coverUrl: moonWhite, title: '모순', author: '양귀자 지음', publisher: '살림', year: '2006', location: '[서수원]종합자료실', tags: ['장편소설'], ...LOAN_WAITING, reservedCount: 2, reservationCapacity: 2 },
    { id: 'result-3', libraryName: '태장마루', libraryColor: 'var(--color-library-taejangmaru)', coverUrl: moonDark, coverPosition: 'top', title: '모순', author: '양귀자 [지음]', publisher: '쓰다', year: '2013', location: '[태장마루]문헌정보자료실', tags: ['모순', '장편소설'], ...LOAN_WAITING, reservedCount: 2, reservationCapacity: 2 },
    { id: 'result-4', libraryName: '선경', libraryColor: 'var(--color-library-seongyeong)', title: '모순', author: '송후석 지음', publisher: '교음사', year: '2005', location: '[선경]종합자료실', tags: ['모순', '송후석', '수필집'], ...LOAN_WAITING, reservedCount: 2, reservationCapacity: 2 },
  ],
  ebook: [
    { id: 'result-5', variant: 'ebook', libraryName: '선경', libraryColor: 'var(--color-library-seongyeong-ebook)', coverUrl: ebookCover, title: '이중섭. 2, 순수한 모순의 사랑 : 최문희 장편소설', author: '최문희 지음', publisher: '다산책방', year: '2013', tags: ['한국문학', '한국소설', '장편소설'] },
  ],
}

export const MATERIAL_TYPES = [
  { id: 'book', label: '단행본' },
  { id: 'serial', label: '연속간행물' },
  { id: 'nonbook', label: '비도서' },
  { id: 'ebook', label: '전자책' },
]

export const SAMPLE_HOLDINGS = [
  { id: 1, status: 'x 대출불가', dueDate: '2026/10/30', libraryName: '서수원', libraryColor: 'var(--color-library-seosuwon-holding)', room: '[서수원]종합자료실' },
  { id: 2, status: 'x 대출불가', libraryName: '한아름', libraryColor: 'var(--color-library-hanareum)', room: '[한아름]청소년자료실' },
  { id: 3, status: 'x 대출불가', dueDate: '2026/11/06', libraryName: '태장마루', libraryColor: 'var(--color-library-taejangmaru)', room: '[태장마루]문헌정보자료실' },
]

const ALL_BOOKS = [
  ...POPULAR_BOOKS,
  ...NEW_BOOKS,
  ...RECOMMENDED_BOOKS,
  ...SEARCH_RESULTS.book,
  ...SEARCH_RESULTS.ebook,
]

export const findBook = (id) => ALL_BOOKS.find((book) => book.id === id)
