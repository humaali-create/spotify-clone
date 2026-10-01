import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import PlaylistCard from '../components/PlaylistCard.jsx'
import PlaylistHero from '../components/PlaylistHero.jsx'
import WaveformBackground from '../components/WaveformBackground.jsx'
import { playlists } from '../data/mockData.js'
import './Home.css'

const categories = [...new Set(playlists.map((playlist) => playlist.category))]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInputRef = useRef(null)

  const query = searchParams.get('q') ?? ''
  const rawCategory = searchParams.get('category')
  const selectedCategory = categories.includes(rawCategory) ? rawCategory : null

  const updateParams = (updates) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        Object.entries(updates).forEach(([key, value]) => {
          if (value === null || value === '') {
            next.delete(key)
          } else {
            next.set(key, value)
          }
        })
        return next
      },
      { replace: true },
    )
  }

  const filteredPlaylists = playlists
    .filter((playlist) => playlist.name.toLowerCase().includes(query.toLowerCase()))
    .filter((playlist) => !selectedCategory || playlist.category === selectedCategory)

  const [heroPlaylist, ...supportingPlaylists] = filteredPlaylists
  const linkState = { from: `/${searchParams.toString() ? `?${searchParams.toString()}` : ''}` }

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="page-heading">{getGreeting()}, Huma</h1>
        <p className="page-subheading">What do you feel like listening to?</p>
      </header>

      <div className="home-controls">
        <div className="search-wrap">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M20 20 16.5 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            className="search-input"
            placeholder="Search playlists"
            value={query}
            onChange={(event) => updateParams({ q: event.target.value })}
          />
          {query !== '' && (
            <button
              type="button"
              className="search-clear-button"
              aria-label="Clear search"
              onClick={() => {
                updateParams({ q: null })
                searchInputRef.current?.focus()
              }}
            >
              ×
            </button>
          )}
        </div>
        <div className="category-filters">
          <button
            type="button"
            className={`category-chip${selectedCategory === null ? ' active' : ''}`}
            aria-pressed={selectedCategory === null}
            onClick={() => updateParams({ category: null })}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip${selectedCategory === category ? ' active' : ''}`}
              aria-pressed={selectedCategory === category}
              onClick={() => updateParams({ category })}
            >
              {category}
            </button>
          ))}
          {(query !== '' || selectedCategory !== null) && (
            <button
              type="button"
              className="clear-filters-button"
              aria-label="Clear all search and category filters"
              onClick={() => updateParams({ q: null, category: null })}
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
            <WaveformBackground
              seedId={heroPlaylist.id}
              color={heroPlaylist.colors[0]}
              className="playlist-ambient-glow"
            />
            <PlaylistHero playlist={heroPlaylist} linkState={linkState} />
            {supportingPlaylists.length > 0 && (
              <div className="playlist-grid">
                {supportingPlaylists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} linkState={linkState} />
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
