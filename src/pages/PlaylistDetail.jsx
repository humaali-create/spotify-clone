import { Link, useParams } from 'react-router-dom'
import { playlists } from '../data/mockData.js'
import WaveformBackground from '../components/WaveformBackground.jsx'
import './PlaylistDetail.css'

function PlaylistDetail() {
  const { id } = useParams()
  const playlist = playlists.find((item) => item.id === id)

  if (!playlist) {
    return (
      <section className="playlist-not-found">
        <h1 className="page-heading">Playlist not found</h1>
        <p className="playlist-not-found-text">
          We couldn&apos;t find a playlist with that ID. It may have been removed.
        </p>
        <Link to="/" className="playlist-not-found-link">
          Back to Home
        </Link>
      </section>
    )
  }

  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`
  const coverArtwork = playlist.tracks[0]?.artwork

  return (
    <section className="playlist-detail">
      <WaveformBackground
        seedId={playlist.id}
        color={playlist.colors[0]}
        className="playlist-detail-waveform"
      />
      <header className="playlist-detail-header">
        {coverArtwork ? (
          <img
            className="playlist-detail-cover playlist-detail-cover-image"
            src={coverArtwork}
            alt=""
            onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
          />
        ) : (
          <div className="playlist-detail-cover" style={{ background: gradient }} />
        )}
        <div className="playlist-detail-info">
          <span className="playlist-detail-category">{playlist.category}</span>
          <h1 className="playlist-detail-name">{playlist.name}</h1>
          <p className="playlist-detail-description">{playlist.description}</p>
          <p className="playlist-detail-meta">
            {playlist.owner} · {playlist.tracks.length} tracks
          </p>
        </div>
      </header>

      <ol className="track-list">
        {playlist.tracks.map((track, index) => (
          <li key={`${track.title}-${index}`} className="track-row">
            <span className="track-index">
              <span className="track-index-number">{index + 1}</span>
              <svg
                className="track-play-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />
              </svg>
            </span>
            <div className="track-info">
              <span className="track-title">{track.title}</span>
              <span className="track-artist">{track.artist}</span>
            </div>
            <span className="track-duration">{track.duration}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PlaylistDetail
