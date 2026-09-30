import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import Home from './pages/Home.jsx'
import PlaylistDetail from './pages/PlaylistDetail.jsx'

function NotFound() {
  return (
    <section className="playlist-not-found">
      <h1 className="page-heading">Page not found</h1>
      <p className="playlist-not-found-text">
        We couldn&apos;t find that page. It may have been moved or never existed.
      </p>
      <Link to="/" className="playlist-not-found-link">
        Back to Home
      </Link>
    </section>
  )
}

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
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
          <Route path="*" element={<NotFound />} />
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
