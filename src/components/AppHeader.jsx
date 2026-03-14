function AppHeader() {
  return (
    <header className="topbar">
      <div className="topbar-card">
        <button type="button" className="back-button">
          <span className="back-arrow">←</span>
          <span>Back</span>
        </button>

        <div className="topbar-divider" />

        <div className="topbar-meta">
          <span className="topbar-section">Certification Results</span>
          <span className="simulation-label">Simulation ID: 65</span>
          <span className="status-pill">IN_PROGRESS</span>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
