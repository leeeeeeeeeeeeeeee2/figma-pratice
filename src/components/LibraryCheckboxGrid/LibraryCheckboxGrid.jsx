import LibraryCheckbox from '../LibraryCheckbox/LibraryCheckbox'
import { LIBRARIES } from './libraries'
import './LibraryCheckboxGrid.css'

function LibraryCheckboxGrid({ selected, onChange, variant = 'general' }) {
  const isAllSelected = selected.length === LIBRARIES.length
  const size = variant === 'detail' ? 'large' : 'medium'

  const toggleAll = () => onChange(isAllSelected ? [] : [...LIBRARIES])

  const toggleOne = (name) =>
    onChange(selected.includes(name) ? selected.filter((item) => item !== name) : [...selected, name])

  return (
    <div className={`library-grid library-grid--${variant}`}>
      <LibraryCheckbox
        label="전체선택"
        checked={isAllSelected}
        onChange={toggleAll}
        size={size}
        isEmphasized
      />
      {LIBRARIES.map((name) => (
        <LibraryCheckbox
          key={name}
          label={name}
          checked={selected.includes(name)}
          onChange={() => toggleOne(name)}
          size={size}
        />
      ))}
    </div>
  )
}

export default LibraryCheckboxGrid
