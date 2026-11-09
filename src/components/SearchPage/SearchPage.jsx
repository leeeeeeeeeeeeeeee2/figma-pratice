import LibrarySearch from '../LibrarySearch/LibrarySearch'
import MaterialResults from '../MaterialResults/MaterialResults'
import { MATERIAL_TYPES, SEARCH_RESULTS } from '../../data/sampleData'
import './SearchPage.css'

const matches = (book, query, libraries) =>
  book.title.includes(query) && (libraries.length === 0 || libraries.includes(book.libraryName))

function SearchPage({ query, libraries, onSearch, onSelectBook }) {
  const itemsByType = Object.fromEntries(
    Object.entries(SEARCH_RESULTS).map(([type, books]) => [
      type,
      books.filter((book) => matches(book, query, libraries)),
    ]),
  )
  const types = MATERIAL_TYPES.map((type) => ({
    ...type,
    count: itemsByType[type.id]?.length ?? 0,
  }))

  return (
    <main className="search-page">
      <LibrarySearch
        key={`${query}|${libraries.join()}`}
        defaultQuery={query}
        defaultLibraries={libraries.length > 0 ? libraries : undefined}
        onSearch={onSearch}
      />
      <MaterialResults types={types} itemsByType={itemsByType} onSelectBook={onSelectBook} />
    </main>
  )
}

export default SearchPage
