import { Link } from 'react-router-dom'
import './PlaylistCard.css'

function PlaylistCard({ playlist, linkState }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`
  const coverArtwork = playlist.tracks[0]?.artwork
  const trackCountLabel = `${playlist.tracks.length} tracks`

  return (
    <Link
      to={`/playlist/${playlist.id}`}
      state={linkState}
      className="playlist-card"
      aria-label={`${playlist.name}, ${trackCountLabel}, ${playlist.category}`}
    >
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
        <div className="playlist-card-label" aria-hidden="true">
          <span className="playlist-card-label-name">{playlist.name}</span>
          <span className="playlist-card-label-count">{trackCountLabel}</span>
        </div>
      </div>
      <div className="playlist-card-body">
        <p className="playlist-description">{playlist.description}</p>
        <p className="playlist-meta">
          <span className="playlist-category">{playlist.category}</span>
        </p>
      </div>
    </Link>
  )
}

export default PlaylistCard
