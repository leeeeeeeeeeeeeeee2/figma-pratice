import './LoanStatus.css'

function LoanStatus({ type = 'unavailable', label, note }) {
  return (
    <div className={`loan-status loan-status--${type}`}>
      <p className="loan-status__label">
        <span className="loan-status__mark" aria-hidden="true">
          {type === 'unavailable' ? '×' : ''}
        </span>
        {label}
      </p>
      {note && <p className="loan-status__note">{note}</p>}
    </div>
  )
}

export default LoanStatus
