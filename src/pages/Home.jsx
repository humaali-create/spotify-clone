import { useState } from 'react'
import PlaylistCard from '../components/PlaylistCard.jsx'
import { playlists } from '../data/mockData.js'
import './Home.css'

function Home() {
  const [query, setQuery] = useState('')

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section>
      <h1 className="page-heading">Good afternoon</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search playlists"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="playlist-grid">
        {filteredPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </section>
  )
}

export default Home
