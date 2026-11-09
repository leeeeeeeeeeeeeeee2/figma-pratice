import { useEffect, useState } from 'react'
import MobileHeader from './components/MobileHeader/MobileHeader'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'
import useIsDesktop from './hooks/useIsDesktop'
import SiteFooter from './components/SiteFooter/SiteFooter'
import HomePage from './components/HomePage/HomePage'
import SearchPage from './components/SearchPage/SearchPage'
import BookDetailPage from './components/BookDetailPage/BookDetailPage'
import ComponentPreview from './components/ComponentPreview/ComponentPreview'
import { findBook } from './data/sampleData'
import './App.css'

/* 주소의 # 뒤 내용으로 화면을 고른다. 패키지 없이 뒤로가기와 새로고침이 동작한다. */
const readRoute = () => {
  const [path, queryString = ''] = window.location.hash.replace(/^#/, '').split('?')
  return { path: path || '/', params: new URLSearchParams(queryString) }
}

const goToSearch = ({ query = '', title, library, libraries = [] }) => {
  const selected = library ? [library] : libraries
  const params = new URLSearchParams({ q: query || title || '' })
  if (selected.length > 0 && selected.length < 24) params.set('lib', selected.join(','))
  window.location.hash = `/search?${params}`
}

const goToBook = (book) => {
  window.location.hash = `/book/${book.id}`
}

function App() {
  const [route, setRoute] = useState(readRoute)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    const handleChange = () => {
      setRoute(readRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleChange)
    return () => window.removeEventListener('hashchange', handleChange)
  }, [])

  if (route.path === '/preview') return <ComponentPreview />

  const renderPage = () => {
    if (route.path === '/search') {
      const library = route.params.get('lib')
      return (
        <SearchPage
          query={route.params.get('q') ?? ''}
          libraries={library ? library.split(',') : []}
          onSearch={goToSearch}
          onSelectBook={goToBook}
        />
      )
    }
    if (route.path.startsWith('/book/')) {
      return <BookDetailPage book={findBook(route.path.replace('/book/', ''))} />
    }
    return <HomePage onSearch={goToSearch} onSelectBook={goToBook} />
  }

  const isHome = route.path === '/'

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
      {renderPage()}
      <SiteFooter variant={isHome ? 'home' : 'page'} />
    </>
  )
}

export default App
