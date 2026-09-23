import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <PlayerBar />
    </div>
  )
}

export default App
