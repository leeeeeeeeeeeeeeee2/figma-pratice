import './HoldingRow.css'

function HoldingRow({
  status,
  dueDate,
  libraryName,
  libraryColor,
  room,
  onReserve,
  onInterLibraryLoan,
  onUnmannedReserve,
}) {
  return (
    <div className="holding-row">
      <div className="holding-row__info">
        <p className="holding-row__status">{status}</p>
        {dueDate && (
          <p className="holding-row__due">
            반납예정 <strong>{dueDate}</strong>
          </p>
        )}
        <p className="holding-row__place">
          <span className="holding-row__library" style={{ '--library-color': libraryColor }}>
            {libraryName}
          </span>
          {room}
        </p>
      </div>

      <div className="holding-row__actions">
        <button type="button" className="holding-row__action" onClick={onReserve}>
          예약하기
        </button>
        <button
          type="button"
          className="holding-row__action holding-row__action--loan"
          onClick={onInterLibraryLoan}
        >
          상호대차신청
        </button>
        <button type="button" className="holding-row__action" onClick={onUnmannedReserve}>
          책나루 (무인)예약
        </button>
      </div>
    </div>
  )
}

export default HoldingRow
