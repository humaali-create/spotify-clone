import { Link } from 'react-router-dom'
import './PlaylistCard.css'

function PlaylistCard({ playlist }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`
  const coverArtwork = playlist.tracks[0]?.artwork

  return (
    <Link to={`/playlist/${playlist.id}`} className="playlist-card">
      <div className="playlist-cover-wrap">
        {coverArtwork ? (
          <img
            className="playlist-cover playlist-cover-image"
            src={coverArtwork}
            alt=""
            onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
          />
        ) : (
          <div className="playlist-cover" style={{ background: gradient }} />
        )}
        <div className="playlist-play-overlay" aria-hidden="true">
          <span className="playlist-play-icon">▶</span>
        </div>
      </div>
      <div className="playlist-card-body">
        <h3 className="playlist-name">{playlist.name}</h3>
        <p className="playlist-description">{playlist.description}</p>
        <p className="playlist-meta">
          <span className="playlist-category">{playlist.category}</span>
          <span className="playlist-meta-divider" aria-hidden="true">·</span>
          <span className="playlist-track-count">{playlist.tracks.length} tracks</span>
        </p>
      </div>
    </Link>
  )
}

export default PlaylistCard
