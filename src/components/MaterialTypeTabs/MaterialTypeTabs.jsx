import MaterialTypeTab from '../MaterialTypeTab/MaterialTypeTab'
import './MaterialTypeTabs.css'

function MaterialTypeTabs({ types = [], activeId, onChange }) {
  return (
    <div className="material-tabs" role="tablist">
      {types.map((type) => (
        <MaterialTypeTab
          key={type.id}
          role="tab"
          aria-selected={activeId === type.id}
          label={type.label}
          count={type.count}
          isActive={activeId === type.id}
          onClick={() => onChange?.(type.id)}
        />
      ))}
    </div>
  )
}

export default MaterialTypeTabs
