const tabs = ['All', 'Orders', 'Executions', 'Cancels', 'Rejects']

function TimelinePanel({ rows, selectedIndex, onSelectRow }) {
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
          <span>TIME</span>
          <span>MESSAGE</span>
          <span>ClOrdID</span>
          <span>Symbol</span>
          <span>Price</span>
          <span></span>
        </div>

        {rows.map((row, index) => (
          <button
            className={`table-row ${selectedIndex === index ? 'highlighted' : ''}`}
            key={`${row.time}-${index}`}
            type="button"
            onClick={() => onSelectRow(index)}
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
