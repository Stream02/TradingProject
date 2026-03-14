import { useMemo, useState } from 'react'

const tabs = ['All', 'Orders', 'Executions', 'Cancels', 'Rejects']
const sortableColumns = [
  { key: 'time', label: 'TIME' },
  { key: 'name', label: 'MESSAGE' },
  { key: 'clOrdId', label: 'ClOrdID' },
  { key: 'symbol', label: 'Symbol' },
  { key: 'price', label: 'Price' },
]

function getComparableValue(row, key) {
  if (key === 'price') {
    const numericPrice = Number.parseFloat(String(row.price).replace(/[^\d.-]/g, ''))
    return Number.isNaN(numericPrice) ? -1 : numericPrice
  }

  return String(row[key] ?? '').toLowerCase()
}

function sortRows(rows, sortConfig) {
  const sortedRows = [...rows]
  sortedRows.sort((left, right) => {
    const leftValue = getComparableValue(left, sortConfig.key)
    const rightValue = getComparableValue(right, sortConfig.key)

    if (typeof leftValue === 'number' && typeof rightValue === 'number') {
      return sortConfig.direction === 'asc' ? leftValue - rightValue : rightValue - leftValue
    }

    const comparison = String(leftValue).localeCompare(String(rightValue), undefined, {
      numeric: true,
      sensitivity: 'base',
    })

    return sortConfig.direction === 'asc' ? comparison : -comparison
  })

  return sortedRows
}

function TimelinePanel({ rows, selectedRowId, onSelectRow }) {
  const [sortConfig, setSortConfig] = useState({ key: 'time', direction: 'asc' })

  const sortedRows = useMemo(() => sortRows(rows, sortConfig), [rows, sortConfig])

  const handleSort = (key) => {
    setSortConfig((currentConfig) => ({
      key,
      direction:
        currentConfig.key === key && currentConfig.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) {
      return '↕'
    }

    return sortConfig.direction === 'asc' ? '↑' : '↓'
  }

  return (
    <main className="panel timeline-panel">
      <div className="panel-heading space-bottom">
        <h2>Message Timeline</h2>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button key={tab} className={`tab ${index === 0 ? 'active' : ''}`} type="button">
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="table-toolbar">
        <span>ClOrdID: OrderID or Symbol</span>
        <span className="toolbar-icons">☰ ⌄</span>
      </div>

      <div className="timeline-table">
        <div className="table-head">
          {sortableColumns.map((column) => (
            <button
              key={column.key}
              type="button"
              className={`sort-head ${sortConfig.key === column.key ? 'active' : ''}`}
              onClick={() => handleSort(column.key)}
            >
              <span>{column.label}</span>
              <span className="sort-arrow">{getSortArrow(column.key)}</span>
            </button>
          ))}
          <span></span>
        </div>

        {sortedRows.map((row) => (
          <button
            className={`table-row ${selectedRowId === row.rowId ? 'highlighted' : ''}`}
            key={row.rowId}
            type="button"
            onClick={() => onSelectRow(row.rowId)}
          >
            <span>{row.time}</span>
            <span className={`msg ${row.type}`}>
              <em className={`msg-dot ${row.type}`}>◻</em>
              {row.name}
            </span>
            <span>{row.clOrdId}</span>
            <span>{row.symbol}</span>
            <span>{row.price || ''}</span>
            <span className="amount-cell">{row.amount || row.tag || ''}</span>
          </button>
        ))}
      </div>
    </main>
  )
}

export default TimelinePanel
