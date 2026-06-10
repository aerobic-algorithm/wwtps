export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="filter-pills">
      <button
        type="button"
        className={`filter-pill${active === null ? ' active' : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`filter-pill${active === cat ? ' active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
