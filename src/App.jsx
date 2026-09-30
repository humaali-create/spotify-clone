import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import Home from './pages/Home.jsx'
import PlaylistDetail from './pages/PlaylistDetail.jsx'

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleSelectTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/playlist/:id"
            element={<PlaylistDetail onSelectTrack={handleSelectTrack} />}
          />
        </Routes>
      </main>
      <PlayerBar
        track={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((prev) => !prev)}
      />
    </div>
  )
}

export default App
