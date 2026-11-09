import { useState } from 'react'
import LibraryCheckboxGrid from '../LibraryCheckboxGrid/LibraryCheckboxGrid'
import tildeIcon from '../../assets/icons/tilde.svg'
import './DetailSearchForm.css'

const EMPTY_VALUES = {
  title: '',
  author: '',
  publisher: '',
  yearFrom: '',
  yearTo: '',
  room: '',
  category: '',
}

const TEXT_FIELDS = [
  { name: 'title', label: '제목' },
  { name: 'author', label: '저자' },
  { name: 'publisher', label: '발행처' },
]

function DetailSearchForm({ roomOptions = [], categoryOptions = [], onSearch }) {
  const [values, setValues] = useState(EMPTY_VALUES)
  const [libraries, setLibraries] = useState([])

  const updateValue = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.({ ...values, libraries })
  }

  const handleReset = () => {
    setValues(EMPTY_VALUES)
    setLibraries([])
  }

  const renderSelect = (name, label, options, extraClass) => (
    <div className="detail-search__row">
      <label className="detail-search__label" htmlFor={`detail-${name}`}>
        {label}
      </label>
      <div className="detail-search__value">
        <select
          id={`detail-${name}`}
          name={name}
          className={`detail-search__select ${extraClass}`}
          value={values[name]}
          onChange={updateValue}
        >
          <option value="">전체</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )

  return (
    <form className="detail-search" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="detail-search__row">
        <span className="detail-search__label">도서관선택</span>
        <div className="detail-search__value detail-search__value--libraries">
          <LibraryCheckboxGrid selected={libraries} onChange={setLibraries} variant="detail" />
        </div>
      </div>

      {TEXT_FIELDS.map((field) => (
        <div className="detail-search__row" key={field.name}>
          <label className="detail-search__label" htmlFor={`detail-${field.name}`}>
            {field.label}
          </label>
          <div className="detail-search__value">
            <input
              id={`detail-${field.name}`}
              name={field.name}
              className="detail-search__input"
              value={values[field.name]}
              onChange={updateValue}
            />
          </div>
        </div>
      ))}

      <div className="detail-search__row">
        <span className="detail-search__label">발행년</span>
        <div className="detail-search__value detail-search__value--years">
          <input
            name="yearFrom"
            aria-label="발행년 시작"
            className="detail-search__input detail-search__input--year"
            value={values.yearFrom}
            onChange={updateValue}
          />
          <img src={tildeIcon} alt="" width="20" height="20" />
          <input
            name="yearTo"
            aria-label="발행년 끝"
            className="detail-search__input detail-search__input--year"
            value={values.yearTo}
            onChange={updateValue}
          />
        </div>
      </div>

      {renderSelect('room', '자료실', roomOptions, 'detail-search__select--room')}
      {renderSelect('category', '카테고리분류', categoryOptions, 'detail-search__select--category')}

      <div className="detail-search__buttons">
        <button type="reset" className="detail-search__button">
          초기화
        </button>
        <button type="submit" className="detail-search__button detail-search__button--primary">
          검색
        </button>
      </div>
    </form>
  )
}

export default DetailSearchForm
