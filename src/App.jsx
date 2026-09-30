import { Link, Route, Routes } from 'react-router-dom'
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
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <PlayerBar />
    </div>
  )
}

export default App
