function AppHeader({ selectedRow }) {
  return (
    <header className="topbar">
      <div className="title">FIX.4.4.CLIENT1-&gt;HUB | In-Progress</div>
      <div className="topbar-right">
        <div className="live-wrap">
          <div className="dot" />
          <span>
            {selectedRow.time} QUT | {selectedRow.msgType} | ID: {selectedRow.clOrdId}
          </span>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
