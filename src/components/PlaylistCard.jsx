import { Link } from 'react-router-dom'
import './PlaylistCard.css'

function PlaylistCard({ playlist }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`

  return (
    <Link to={`/playlist/${playlist.id}`} className="playlist-card">
      <div className="playlist-cover" style={{ background: gradient }} />
      <h3 className="playlist-name">{playlist.name}</h3>
      <p className="playlist-description">{playlist.description}</p>
    </Link>
  )
}

export default PlaylistCard
