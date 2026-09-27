import { useState } from 'react'
import PlaylistCard from '../components/PlaylistCard.jsx'
import PlaylistHero from '../components/PlaylistHero.jsx'
import { playlists } from '../data/mockData.js'
import './Home.css'

const categories = [...new Set(playlists.map((playlist) => playlist.category))]

function Home() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredPlaylists = playlists
    .filter((playlist) => playlist.name.toLowerCase().includes(query.toLowerCase()))
    .filter((playlist) => !selectedCategory || playlist.category === selectedCategory)

  const [heroPlaylist, ...supportingPlaylists] = filteredPlaylists

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="page-heading">Good afternoon, Huma</h1>
        <p className="page-subheading">What do you feel like listening to?</p>
      </header>

      <div className="home-controls">
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
            className={`category-chip${selectedCategory === null ? ' active' : ''}`}
            aria-pressed={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip${selectedCategory === category ? ' active' : ''}`}
              aria-pressed={selectedCategory === category}
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
      </div>

      <section className="playlist-section">
        <div className="section-heading">
          <h2 className="section-title">Made for you</h2>
          <p className="section-subtext">Playlists for every mood and moment.</p>
        </div>

        {filteredPlaylists.length > 0 ? (
          <div className="playlist-showcase">
            <div
              className="playlist-ambient-glow"
              aria-hidden="true"
              style={{
                background: `radial-gradient(circle, ${heroPlaylist.colors[0]}, ${heroPlaylist.colors[1]} 60%, transparent 75%)`,
              }}
            />
            <PlaylistHero playlist={heroPlaylist} />
            {supportingPlaylists.length > 0 && (
              <div className="playlist-grid">
                {supportingPlaylists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="playlist-empty-state">
            <p className="playlist-empty-title">No playlists match your search.</p>
            <p className="playlist-empty-text">Try a different search term or category.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
