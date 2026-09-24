import { Link } from 'react-router-dom'
import './PlaylistHero.css'

function PlaylistHero({ playlist }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`

  return (
    <Link to={`/playlist/${playlist.id}`} className="playlist-hero">
      <div className="playlist-hero-art" style={{ background: gradient }} />
      <div className="playlist-hero-scrim" aria-hidden="true" />
      <div className="playlist-hero-content">
        <span className="playlist-hero-eyebrow">Featured playlist</span>
        <h2 className="playlist-hero-title">{playlist.name}</h2>
        <p className="playlist-hero-description">{playlist.description}</p>
        <p className="playlist-hero-meta">
          <span className="playlist-hero-category">{playlist.category}</span>
          <span className="playlist-hero-meta-divider" aria-hidden="true">
            ·
          </span>
          <span className="playlist-hero-track-count">{playlist.tracks.length} tracks</span>
        </p>
      </div>
      <div className="playlist-hero-play" aria-hidden="true">
        <span className="playlist-hero-play-icon">▶</span>
      </div>
    </Link>
  )
}

export default PlaylistHero
