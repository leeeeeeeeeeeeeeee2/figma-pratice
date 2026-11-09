import infoIcon from '../../assets/icons/info.png'
import './ReservationCount.css'

function ReservationCount({ reserved, capacity }) {
  return (
    <p className="reservation-count">
      <span className="reservation-count__label">예약자수 :</span>
      <span className="reservation-count__reserved">{reserved}</span>/
      {capacity}
      <img src={infoIcon} alt="" width="16" height="16" />
    </p>
  )
}

export default ReservationCount
