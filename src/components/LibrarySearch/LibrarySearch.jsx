import { useState } from 'react'
import SearchModeTabs from '../SearchModeTabs/SearchModeTabs'
import GeneralSearchForm from '../GeneralSearchForm/GeneralSearchForm'
import DetailSearchForm from '../DetailSearchForm/DetailSearchForm'
import bookIcon from '../../assets/icons/book-heading.png'
import './LibrarySearch.css'

function LibrarySearch({
  defaultMode = 'general',
  defaultQuery,
  defaultLibraries,
  onSearch,
  roomOptions,
  categoryOptions,
}) {
  const [mode, setMode] = useState(defaultMode)

  return (
    <section className="library-search">
      <h2 className="library-search__heading">
        <img src={bookIcon} alt="" />
        원하는 도서관에서 자료를 검색해 보세요.
      </h2>

      <div className="library-search__tabs">
        <SearchModeTabs activeId={mode} onChange={setMode} />
      </div>

      {mode === 'general' ? (
        <GeneralSearchForm
          defaultQuery={defaultQuery}
          defaultLibraries={defaultLibraries}
          onSearch={onSearch}
        />
      ) : (
        <div className="library-search__detail">
          <DetailSearchForm
            roomOptions={roomOptions}
            categoryOptions={categoryOptions}
            onSearch={onSearch}
          />
        </div>
      )}
    </section>
  )
}

export default LibrarySearch
