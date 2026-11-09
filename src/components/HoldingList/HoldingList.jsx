import { useState } from 'react'
import HoldingRow from '../HoldingRow/HoldingRow'
import chevronDown from '../../assets/icons/chevron-down.svg'
import './HoldingList.css'

function HoldingList({ items = [], onReserve, onInterLibraryLoan, onUnmannedReserve }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="holding-list">
      <div className="holding-list__header">
        <p className="holding-list__title">
          소장도서관 <span className="holding-list__count">{items.length}</span>
        </p>
        <button
          type="button"
          className="holding-list__toggle"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          펼치기
          <img src={chevronDown} alt="" width="20" height="20" />
        </button>
      </div>

      {isOpen &&
        items.map((item) => (
          <HoldingRow
            key={item.id}
            status={item.status}
            dueDate={item.dueDate}
            libraryName={item.libraryName}
            libraryColor={item.libraryColor}
            room={item.room}
            onReserve={() => onReserve?.(item)}
            onInterLibraryLoan={() => onInterLibraryLoan?.(item)}
            onUnmannedReserve={() => onUnmannedReserve?.(item)}
          />
        ))}
    </div>
  )
}

export default HoldingList
