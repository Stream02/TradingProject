import { useMemo, useState } from 'react'
import AppHeader from './components/AppHeader'
import MessageDetailsPanel from './components/MessageDetailsPanel'
import RawMessagePanel from './components/RawMessagePanel'
import SessionsPanel from './components/SessionsPanel'
import TimelinePanel from './components/TimelinePanel'
import { sessions, timelineRows } from './data/fixDashboardData'
import './App.css'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedRow = useMemo(
    () => timelineRows[selectedIndex] ?? timelineRows[0],
    [selectedIndex],
  )

  return (
    <div className="fix-shell theme-dark">
      <AppHeader selectedRow={selectedRow} />

      <section className="main-grid">
        <SessionsPanel sessions={sessions} />
        <TimelinePanel
          rows={timelineRows}
          selectedIndex={selectedIndex}
          onSelectRow={setSelectedIndex}
        />
        <MessageDetailsPanel selectedRow={selectedRow} />
      </section>

      <RawMessagePanel rawLines={selectedRow.rawLines} />
    </div>
  )
}

export default App
