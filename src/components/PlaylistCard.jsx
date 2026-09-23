import './PlaylistCard.css'

function PlaylistCard({ playlist }) {
  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`

  return (
    <div className="playlist-card">
      <div className="playlist-cover" style={{ background: gradient }} />
      <h3 className="playlist-name">{playlist.name}</h3>
      <p className="playlist-description">{playlist.description}</p>
    </div>
  )
}

export default PlaylistCard
