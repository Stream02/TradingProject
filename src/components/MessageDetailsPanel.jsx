function DetailSection({ title, tone, children }) {
  return (
    <section className="detail-card">
      <h3>
        <span className={`card-dot ${tone}`} />
        {title}
      </h3>
      {children}
    </section>
  )
}

function MessageDetailsPanel({ selectedRow }) {
  return (
    <aside className="panel details-panel">
      <div className="panel-heading">
        <h2>Message Details</h2>
      </div>

      <DetailSection title="Order Information" tone="green">
        <dl>
          <div><dt>Symbol</dt><dd>{selectedRow.symbol || 'AAPL'}</dd></div>
          <div><dt>Side</dt><dd>{selectedRow.side}</dd></div>
          <div><dt>Quantity</dt><dd>{selectedRow.quantity}</dd></div>
          <div><dt>Price</dt><dd>{selectedRow.amount || selectedRow.price || '-'}</dd></div>
        </dl>
      </DetailSection>

      <DetailSection title="Execution Status" tone="red">
        <dl>
          <div><dt>OrdStatus</dt><dd>{selectedRow.ordStatus}</dd></div>
          <div><dt>ExecType</dt><dd>{selectedRow.execType}</dd></div>
          <div><dt>LastQty</dt><dd>{selectedRow.lastQty}</dd></div>
          <div><dt>CumQty</dt><dd>{selectedRow.cumQty}</dd></div>
          <div><dt>LeavesQty</dt><dd>{selectedRow.leavesQty}</dd></div>
        </dl>
      </DetailSection>

      <DetailSection title="FIX Metadata" tone="blue">
        <dl>
          <div><dt>SenderCompID</dt><dd>{selectedRow.senderCompId}</dd></div>
          <div><dt>TargetCompID</dt><dd>{selectedRow.targetCompId}</dd></div>
          <div><dt>MsgType</dt><dd>{selectedRow.msgType}</dd></div>
        </dl>
      </DetailSection>
    </aside>
  )
}

export default MessageDetailsPanel
