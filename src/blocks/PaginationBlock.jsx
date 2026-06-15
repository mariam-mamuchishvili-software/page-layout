import PageItem from '../components/PageItem'

export default function PaginationBlock({ page, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination-block" data-layout-structure="block">
      <ul className="pagination">
        <PageItem
          icon="chevron_left"
          label="Previous"
          onClick={() => onPageChange(Math.max(1, page - 1))}
        />
        {pages.map((p) => (
          <PageItem
            key={p}
            page={p}
            active={p === page}
            onClick={() => onPageChange(p)}
          />
        ))}
        <PageItem
          icon="chevron_right"
          label="Next"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        />
      </ul>
    </div>
  )
}
