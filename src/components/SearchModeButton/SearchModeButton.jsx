import './SearchModeButton.css'

function SearchModeButton({ children, isActive = false, type = 'button', ...buttonProps }) {
  return (
    <button
      type={type}
      className={`search-mode-button${isActive ? ' is-active' : ''}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default SearchModeButton
