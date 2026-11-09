import './LoginButton.css'

function LoginButton({ children = '로그인', isActive = false, type = 'button', ...buttonProps }) {
  return (
    <button
      type={type}
      className={`login-button${isActive ? ' is-active' : ''}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default LoginButton
