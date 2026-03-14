import { useMemo, useState } from 'react'
import AppHeader from './components/AppHeader'
import MessageDetailsPanel from './components/MessageDetailsPanel'
import RawMessagePanel from './components/RawMessagePanel'
import SessionsPanel from './components/SessionsPanel'
import TimelinePanel from './components/TimelinePanel'
import { sessions, timelineRows } from './data/fixDashboardData'
import './App.css'

function App() {
  const rows = useMemo(
    () => timelineRows.map((row, index) => ({ ...row, rowId: `timeline-row-${index}` })),
    [],
  )
  const [selectedRowId, setSelectedRowId] = useState(rows[0]?.rowId)

  const selectedRow = useMemo(
    () => rows.find((row) => row.rowId === selectedRowId) ?? rows[0],
    [rows, selectedRowId],
  )

  return (
    <div className="fix-shell theme-dark">
      <AppHeader />

      <section className="main-grid">
        <SessionsPanel sessions={sessions} />
        <TimelinePanel
          rows={rows}
          selectedRowId={selectedRow.rowId}
          onSelectRow={setSelectedRowId}
        />
        <MessageDetailsPanel selectedRow={selectedRow} />
      </section>

      <RawMessagePanel rawLines={selectedRow.rawLines} />
    </div>
  )
}

export default App
