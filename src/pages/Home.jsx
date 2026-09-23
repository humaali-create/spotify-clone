import PlaylistCard from '../components/PlaylistCard.jsx'
import { playlists } from '../data/mockData.js'
import './Home.css'

function Home() {
  return (
    <section>
      <h1 className="page-heading">Good afternoon</h1>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </section>
  )
}

export default Home
