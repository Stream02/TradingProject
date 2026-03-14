function RawMessagePanel({ rawLines }) {
  return (
    <section className="panel raw-panel">
      <div className="panel-heading">
        <h2>Raw FIX Message</h2>
        <div className="raw-actions">↗ ⧉</div>
      </div>
      <pre>
        {rawLines.map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </pre>
    </section>
  )
}

export default RawMessagePanel
