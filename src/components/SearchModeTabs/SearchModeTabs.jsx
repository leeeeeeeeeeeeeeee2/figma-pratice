import SearchModeButton from '../SearchModeButton/SearchModeButton'
import './SearchModeTabs.css'

const MODES = [
  { id: 'general', label: '일반검색' },
  { id: 'detail', label: '상세검색' },
]

function SearchModeTabs({ activeId = 'general', onChange }) {
  return (
    <div className="search-mode-tabs" role="tablist">
      {MODES.map((mode) => (
        <SearchModeButton
          key={mode.id}
          role="tab"
          aria-selected={activeId === mode.id}
          isActive={activeId === mode.id}
          onClick={() => onChange?.(mode.id)}
        >
          {mode.label}
        </SearchModeButton>
      ))}
    </div>
  )
}

export default SearchModeTabs
