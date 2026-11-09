import './CarouselPaging.css'

function CarouselPaging({ current, total }) {
  return (
    <p className="carousel-paging">
      <strong>{current}</strong>
      <span>/</span>
      <span className="carousel-paging__total">{total}</span>
    </p>
  )
}

export default CarouselPaging
