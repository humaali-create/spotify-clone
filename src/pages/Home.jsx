import { useState } from 'react'
import PlaylistCard from '../components/PlaylistCard.jsx'
import { playlists } from '../data/mockData.js'
import './Home.css'

const categories = [...new Set(playlists.map((playlist) => playlist.category))]

function Home() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredPlaylists = playlists
    .filter((playlist) => playlist.name.toLowerCase().includes(query.toLowerCase()))
    .filter((playlist) => !selectedCategory || playlist.category === selectedCategory)

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
      <div className="category-filters">
        <button
          type="button"
          className={`category-pill${selectedCategory === null ? ' active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-pill${selectedCategory === category ? ' active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        {(query !== '' || selectedCategory !== null) && (
          <button
            type="button"
            className="clear-filters-button"
            aria-label="Clear all search and category filters"
            onClick={() => {
              setQuery('')
              setSelectedCategory(null)
            }}
          >
            Clear all
          </button>
        )}
      </div>
      {filteredPlaylists.length > 0 ? (
        <div className="playlist-grid">
          {filteredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      ) : (
        <div className="playlist-empty-state">
          <p className="playlist-empty-title">No playlists match your search.</p>
          <p className="playlist-empty-text">Try a different search term or category.</p>
        </div>
      )}
    </section>
  )
}

export default Home
