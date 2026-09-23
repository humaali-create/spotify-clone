import { Link, useParams } from 'react-router-dom'
import { playlists } from '../data/mockData.js'

function PlaylistPage() {
  const { playlistId } = useParams()
  const playlist = playlists.find((item) => item.id === playlistId)

  if (!playlist) {
    return (
      <section>
        <h1 className="page-heading">Playlist not found</h1>
        <Link to="/">Return home</Link>
      </section>
    )
  }

  const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`

  return (
    <section>
      <div
        style={{ background: gradient, width: '180px', aspectRatio: '1', borderRadius: '4px', marginBottom: '24px' }}
      />
      <h1 className="page-heading">{playlist.name}</h1>
      <p>{playlist.description}</p>
    </section>
  )
}

export default PlaylistPage