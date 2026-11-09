import { useState } from 'react'
import MaterialTypeTabs from '../MaterialTypeTabs/MaterialTypeTabs'
import BookResultCard from '../BookResultCard/BookResultCard'
import './MaterialResults.css'

function MaterialResults({ types = [], itemsByType = {}, defaultType, onSelectBook, onOpenEbook }) {
  const [activeType, setActiveType] = useState(defaultType ?? types[0]?.id)
  const items = itemsByType[activeType] ?? []

  return (
    <section className="material-results">
      <MaterialTypeTabs types={types} activeId={activeType} onChange={setActiveType} />
      {items.length === 0 && <p className="material-results__empty">검색 결과가 없습니다.</p>}
      <div className="material-results__grid">
        {items.map((item) => (
          <BookResultCard
            key={item.id}
            {...item}
            onSelect={() => onSelectBook?.(item)}
            onOpenEbook={() => onOpenEbook?.(item)}
          />
        ))}
      </div>
    </section>
  )
}

export default MaterialResults
