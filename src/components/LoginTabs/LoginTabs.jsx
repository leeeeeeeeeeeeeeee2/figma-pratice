import LoginButton from '../LoginButton/LoginButton'
import './LoginTabs.css'

const TABS = [
  { id: 'library', label: '로그인' },
  { id: 'integrated', label: '수원시\n통합회원 로그인' },
]

function LoginTabs({ activeId = 'library', onChange }) {
  return (
    <div className="login-tabs" role="tablist">
      {TABS.map((tab) => (
        <LoginButton
          key={tab.id}
          role="tab"
          aria-selected={activeId === tab.id}
          isActive={activeId === tab.id}
          onClick={() => onChange?.(tab.id)}
        >
          {tab.label}
        </LoginButton>
      ))}
    </div>
  )
}

export default LoginTabs
