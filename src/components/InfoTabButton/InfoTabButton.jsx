import './InfoTabButton.css'

function InfoTabButton({ children, isActive = false, type = 'button', ...buttonProps }) {
  return (
    <button
      type={type}
      className={`info-tab-button${isActive ? ' is-active' : ''}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default InfoTabButton
