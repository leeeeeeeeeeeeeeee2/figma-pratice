import checkedIcon from '../../assets/icons/checkbox-checked.svg'
import emptyIcon from '../../assets/icons/checkbox-empty.svg'
import './LibraryCheckbox.css'

function LibraryCheckbox({ label, checked, onChange, size = 'medium', isEmphasized = false }) {
  const className = [
    'library-checkbox',
    `library-checkbox--${size}`,
    isEmphasized ? 'library-checkbox--emphasized' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={className}>
      <input type="checkbox" className="library-checkbox__input" checked={checked} onChange={onChange} />
      <img className="library-checkbox__icon" src={checked ? checkedIcon : emptyIcon} alt="" />
      {label}
    </label>
  )
}

export default LibraryCheckbox
