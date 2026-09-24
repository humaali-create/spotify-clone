import { Link } from 'react-router-dom'
import './PlaylistHero.css'

function getCollageArtwork(playlist) {
  const uniqueArtwork = [
    ...new Set(playlist.tracks.map((track) => track.artwork).filter(Boolean)),
  ]
  if (uniqueArtwork.length === 0) return []

  // Cycle through the playlist's own artwork to fill 4 tiles even if it
  // has fewer than 4 unique covers, rather than dropping the collage.
  return Array.from({ length: 4 }, (_, index) => uniqueArtwork[index % uniqueArtwork.length])
}

function PlaylistHero({ playlist }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`
  const collageArtwork = getCollageArtwork(playlist)

  return (
    <Link to={`/playlist/${playlist.id}`} className="playlist-hero">
      {collageArtwork.length === 4 ? (
        <div className="playlist-hero-collage">
          {collageArtwork.map((src, index) => (
            <img
              key={`${src}-${index}`}
              className="playlist-hero-collage-tile"
              src={src}
              alt=""
              style={{ transition: `opacity 0.5s ease ${index * 70}ms, transform 0.3s ease` }}
              onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
            />
          ))}
        </div>
      ) : (
        <div className="playlist-hero-art" style={{ background: gradient }} />
      )}
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
