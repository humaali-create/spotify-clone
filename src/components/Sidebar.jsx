import { NavLink } from 'react-router-dom'
import { playlists } from '../data/mockData.js'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-section">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
        >
          <svg
            className="sidebar-link-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 11.5 12 4l8 7.5M6 9.5V20h5v-5h2v5h5V9.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Home
        </NavLink>
      </nav>

      <section className="sidebar-section sidebar-library">
        <h2 className="sidebar-heading">Your Library</h2>
        <ul className="sidebar-playlists">
          {playlists.map((playlist) => {
            const thumbnail = playlist.tracks[0]?.artwork
            const gradient = `linear-gradient(135deg, ${playlist.colors[0]}, ${playlist.colors[1]})`

            return (
              <li key={playlist.id} className="sidebar-playlist">
                {thumbnail ? (
                  <img
                    className="sidebar-playlist-thumb sidebar-playlist-thumb-image"
                    src={thumbnail}
                    alt=""
                    onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
                  />
                ) : (
                  <div className="sidebar-playlist-thumb" style={{ background: gradient }} />
                )}
                <span className="sidebar-playlist-name">{playlist.name}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
