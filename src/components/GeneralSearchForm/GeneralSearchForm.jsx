import { useState } from 'react'
import LibraryCheckboxGrid from '../LibraryCheckboxGrid/LibraryCheckboxGrid'
import { LIBRARIES } from '../LibraryCheckboxGrid/libraries'
import './GeneralSearchForm.css'

function GeneralSearchForm({ defaultQuery = '', defaultLibraries = LIBRARIES, onSearch }) {
  const [query, setQuery] = useState(defaultQuery)
  const [libraries, setLibraries] = useState([...defaultLibraries])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.({ query, libraries })
  }

  return (
    <form className="general-search" onSubmit={handleSubmit}>
      <div className="general-search__bar">
        <input
          className="general-search__input"
          type="search"
          aria-label="검색어"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="general-search__submit" type="submit">
          검색
        </button>
      </div>
      <LibraryCheckboxGrid selected={libraries} onChange={setLibraries} />
    </form>
  )
}

export default GeneralSearchForm
