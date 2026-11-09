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

export const POPULAR_KEYWORDS = ['읽으면 수학천재가 되는 만화책 : 초등A', '오디세이아', '빵충', 'javascript']

export const POPULAR_BOOKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => ({
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

const HEIDELBERG_DESCRIPTION =
  "삶과 죽음을 생각하게 하는 여행자의 도시, 하이델베르크의 이야기! 소설가 김영하의 『여행자 - 하이델베르크』. 여러 문학상을 수상하며 우리 시대를 대표하는 소설가가 된 저자의 여행기 시리즈 '김영하의 여행자'다...."

/*
 * Figma 데스크톱 시안의 문구다. 소개 글이 아주 긴 7번과 10번은 앞부분만 옮겼다.
 * 1번의 소개 글은 다른 책(12번)의 내용이므로(prd.md 12장) 실제 데이터로 교체한다.
 */
const RECOMMENDED_DETAILS = [
  { title: '오은영의 화해 : 상처받은 내면의 나...', author: '오은영 지음', publisher: '코리아닷컴', year: '2007', tags: ['화해', '상처', '내면', '용기', '개인심리학'], description: HEIDELBERG_DESCRIPTION },
  { title: '불안한 엄마 무관심한 아빠 : 오은영...', author: '오은영 지음', publisher: '김영사', year: '2021', tags: ['무관심', '엄마', '아빠', '자녀양육', '자녀교육', '육아', '육아솔루션'], description: '아이를 생각하면 마음이 짠하면서도 끊임없이 잔소리하는 엄마, 아이에게 항상 엄하게 대하고 화부터 내는 아빠. 왜 부모는 아이를 키우면서 불안해하고 두려워할까? 불안과 두려움은 양육에서 어떤 문제를 야기할까? 부모의 불안과 두려움을 해결해야 아이가 행복해질 수 있다. 아이 맡기는 문제부터 교육, 친구, 인성, 건강, 생활습관까지, 부모의 대책 없는 불안을 날리는 오은영 박사의 양육 A to Z.' },
  { title: '어떻게 말해줘야 할까 : 오은영의 ...', author: '오은영 지음 ; 차상미 그림', publisher: '김영사', year: '2020', tags: ['육아멘토', '자녀양육', '육아일반', '교육에세이'], description: '채널A 〈요즘 육아 금쪽같은 내 새끼〉 SBS 〈우리 아이가 달라졌어요〉 국민 육아멘토 오은영 박사가 알려주는 ‘부모의 말’ 육아 현실을 200퍼센트 반영한 130가지 한마디‘국민 육아멘토’ ‘대한민국 엄마·아빠들의 엄마’ 오은영 박사의『어떻게 말해줘야 할까』. 쉽게 따라 할 수 있는...' },
  { title: '(온은영 박사가 전하는)금쪽이들의 진...', author: '오은영 지음', publisher: '오은라이프사이언스', year: '2022', tags: ['가정', '육아', '내면자녀교육', '자녀심리'], description: '〈요즘 육아 금쪽같은 내 새끼〉 오은영 박사의 신간! 금쪽같은 아이, 금쪽같은 부모 모두가 행복해지는 마음맞춤 육아비법 아이 마음이 궁금한 부모를 위한 오은영의 ‘특급 금쪽처방’을 만나다!오은영 박사가 부모들에게 자주 듣는 말이 있다. “집에서 물어보면 다 모르겠다고 하는데, 원장님...' },
  { title: '조선미의 현실 육아 상담소', author: '조선미 지음', publisher: '북하우스', year: '2023', tags: ['좋은부모', '육아', '육아법', '부모교육'], description: '조선미 교수가 전문가적인 통찰과 경험, 식견을 바탕으로, 어떻게 하면 아이를 효과적으로 훈육해서 아이의 행동을 변화시킬 수 있을지 고민하는 부모들을 위해 쓴 자녀교육서다. ‘마음 읽기’에 과하게 집중한 탓에 행동을 바로잡는 데 어려움을 겪는 부모들에게 ‘적절한 훈육’의 필요성에 대해 기탄없이 말한다.' },
  { title: '너는 꽃이야, 별아야, 바람이야 : ...', author: '오은영 지음', publisher: '김영사', year: '2026', tags: ['너는', '꽃이야', '별이야', '바람이야', '오은영', '지음', '자녀교육일반서'], description: '출간 요청이 쏟아진 필사집으로, 전작의 핵심 문장을 손으로 새기며 부모의 언어를 바꾸는 실천을 제안한다. 하루 10분, 다섯 단계 마음 새김과 기록으로 아이와 부모의 관계를 단단하게 만든다.' },
  { title: '(성장하는 십대를 지혜롭게 품어주는...', author: '조선미 지음 ; [김은기 그림]', publisher: '한올림', year: '2015', tags: ['성장', '십대', '지혜', '엄마', '품격'], description: 'EBS 《60분 부모》의 멘토 조선미 교수의 진짜 가족 이야기 전문가가 실천한, 십 대 아이를 지혜롭게 이끄는 ‘품격 있는’ 양육의 기술 ≪성장하는 십 대 자녀를 지혜롭게 품어주는 엄마의 품격≫은 심리학자이자 부모 멘토인 조선미 교수가 자신이 두 아이를 키운 실제 일화를 바탕으로 질풍노도 십 대 아이를 지혜롭게 성장시키는 엄마의 ‘품격 있는’ 양육 원칙과 기술을 담은 에세이 형식의 책이다.' },
  { title: '(마음의 힘을 기르는) 감성수업 : ...', author: '조선미 [외]지음', publisher: '살림터', year: '2016', tags: ['마음', '힘', '인성교육'], description: '감성수업을 통해 교육의 새로운 방향성을 모색하는 현장 교사들의 수업 이야기다. 감성수업의 필요성과 용어에 대한 정의, 현장에서 누구나 쉽게 할 수 있는 수업 중심의 사례들, 감성수업에 활용할 수 있는 자료들로 구성되었다.' },
  { title: '부모마음 아프지 않게 아이마음 다치지...', author: '조선미 지음', publisher: '한올림', year: '2006', tags: ['부모마음', '아이마음', '자녀교육'], description: '자식에 대한 기대가 커서, 내 맘같이 되지 않아서 혹은 어떻게 해야 할지 몰라서 본의 아니게 아이에게 상처를 주고, 스트레스를 주면서 자신도 속앓이를 하고 있는 부모들에게 보내는 위로와 조언이다.' },
  { title: '나는 오늘도 아이를 혼냈다', author: '조선미 지음', publisher: '한올림', year: '2014', tags: ['아이', '자녀교육', '자녀양육', '부모토론학교'], description: '그저 바라만 봐도 예쁘고, 하는 행동 하나하나 신통방통하기만 하던 아이가 유치원이나 초등학교를 다닐 정도로 자라면 상황은 바뀐다. 행동은 왜 그렇게 굼뜬지, 말은 죽어라 안 듣고, 시킨 일은 제대로 하는 게 하나도 없는, 부모 속을 뒤집는 게으른 사고뭉치로 떠오른다.' },
  { title: '나를 채우는 여행의 기술 : 평범한 ...', author: '인생학교 지음: 알랭 드 보통 기획: 케이채 옮김', publisher: '오렌지다', year: '2023', tags: ['여행', '세계여행', '세계일주', '여행에세이'], description: '<사유 식탁>에 이은 인생학교 시리즈의 두 번째 도서. 인생학교는 알랭 드 보통이 주축이 되어 설립한 프로젝트 학교로, 철학, 인간관계, 자기 계발, 직업 등 다양한 주제를 통해 독자들에게 더 나은 삶을 위한 통찰을 제공한다. <나를 채우는 여행의 기술>은 재치 있는 문장과 탁월한 통찰력으로 우리를 여행의 즐거움 속으로 안내한다.' },
  { title: '여행자 : 하이델베르크', author: '김영하 지음', publisher: '아트북스', year: '2007', tags: ['여행자', '하이델베르크', '여행기'], description: HEIDELBERG_DESCRIPTION },
]

export const RECOMMENDED_BOOKS = RECOMMENDED_DETAILS.map((details, index) => ({
  id: `recommend-${index + 1}`,
  coverUrl: sample(`recommend/${twoDigits(index + 1)}`),
  ...details,
}))

/* { '연도.월': { 도서관이름: [휴관 날짜] } } */
export const HOLIDAY_SCHEDULE = {
  '2026.09': { 선경도서관: [7, 14, 21, 24, 25, 26, 28] },
}

const LOAN_WAITING = { loanStatus: '대출불가', loanNote: '(타관대출 대기중)' }

export const SEARCH_RESULTS = {
  book: [
    { id: 'result-1', libraryName: '한아름', libraryColor: 'var(--color-library-hanareum)', coverUrl: moonWhite, title: '모순', author: '[양귀자 지음]', publisher: '살림', year: '1998', location: '[한아름]청소년자료실', tags: ['모순', '장편소설', '한국현대문학'], ...LOAN_WAITING, reservedCount: 1, reservationCapacity: 2, description: '이 책은 1995년 <천년의 사랑> 이후 3년만에 펴낸 전작 장편으로 작가 특유의 속도감 넘치는 문체와 인생을 통찰하는 웅숭 깊은 시선이 빛을 발한다. 열 일곱 개로 나뉘어진 각 장마다 긴장감을 제공하면서 활달한 걸음으로 `삶의 모순`을 향해 달려가는 소설 속의 주인공은 스물 다섯 살의 젊은 여성 `안진진`이다.' },
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
