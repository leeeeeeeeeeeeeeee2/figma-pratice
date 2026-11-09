import './MaterialTypeTab.css'

function MaterialTypeTab({ label, count, isActive = false, type = 'button', ...buttonProps }) {
  return (
    <button
      type={type}
      className={`material-tab${isActive ? ' is-active' : ''}`}
      {...buttonProps}
    >
      <span className="material-tab__label">{label}</span>
      <span className="material-tab__count">({count})</span>
    </button>
  )
}

export default MaterialTypeTab
