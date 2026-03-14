function SessionsPanel({ sessions }) {
  return (
    <aside className="panel sessions-panel">
      <div className="panel-heading">
        <h2>Sessions</h2>
        <span className="icon-btn">⌕</span>
      </div>

      <div className="search-box">
        <span className="search-icon">⌕</span>
        <span>Search</span>
      </div>

      <div className="session-list">
        {sessions.map((session) => (
          <article className="session-row" key={session.title}>
            <div className={`tone ${session.tone}`} />
            <div className="session-text">
              <p className="session-title">{session.title}</p>
              <p className="session-sub">{session.version}</p>
              <p className={`session-status ${session.tone}`}>Status: {session.status}</p>
            </div>
            <span className="row-chevron">⌄</span>
          </article>
        ))}
      </div>
    </aside>
  )
}

export default SessionsPanel
