import { useState } from 'react'
import HomeSectionHeader from '../HomeSectionHeader/HomeSectionHeader'
import { LIBRARIES } from '../LibraryCheckboxGrid/libraries'
import arrowPrev from '../../assets/icons/arrow-prev.svg'
import arrowNext from '../../assets/icons/arrow-next.svg'
import illustration from '../../assets/images/holiday-illustration.png'
import './HolidaySchedule.css'

const formatMonth = (year, month) => `${year}.${String(month).padStart(2, '0')}`

function HolidaySchedule({ schedule = {}, defaultYear, defaultMonth, defaultLibrary }) {
  const [date, setDate] = useState({ year: defaultYear, month: defaultMonth })
  const [library, setLibrary] = useState(defaultLibrary)

  const label = formatMonth(date.year, date.month)
  const closedDates = schedule[label]?.[library]

  const moveMonth = (step) => {
    const next = new Date(date.year, date.month - 1 + step)
    setDate({ year: next.getFullYear(), month: next.getMonth() + 1 })
  }

  return (
    <section className="holiday">
      <HomeSectionHeader title="휴관일">
        <div className="holiday__month">
          <button type="button" className="holiday__arrow" aria-label="이전 달" onClick={() => moveMonth(-1)}>
            <img src={arrowPrev} alt="" />
          </button>
          <span className="holiday__month-label">{label}</span>
          <button type="button" className="holiday__arrow" aria-label="다음 달" onClick={() => moveMonth(1)}>
            <img src={arrowNext} alt="" />
          </button>
        </div>
      </HomeSectionHeader>

      <div className="holiday__card">
        <img className="holiday__illustration" src={illustration} alt="" />
        <select
          className="holiday__select"
          aria-label="도서관 선택"
          value={library}
          onChange={(event) => setLibrary(event.target.value)}
        >
          {LIBRARIES.map((name) => (
            <option key={name} value={`${name}도서관`}>
              {name}도서관
            </option>
          ))}
        </select>

        {closedDates ? (
          <ul className="holiday__dates">
            {closedDates.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </ul>
        ) : (
          <p className="holiday__unknown">휴관일 정보를 확인할 수 없습니다.</p>
        )}

        <p className="holiday__message">
          가까운 도서관에 방문해서
          <br />
          도서관 서비스를 이용해보세요!
        </p>
      </div>
    </section>
  )
}

export default HolidaySchedule
