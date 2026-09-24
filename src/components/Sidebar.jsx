import { NavLink } from 'react-router-dom'
import { playlists } from '../data/mockData.js'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-section">
        <NavLink to="/" end className="sidebar-link">
          Home
        </NavLink>
      </nav>

      <section className="sidebar-section sidebar-library">
        <h2 className="sidebar-heading">Your Library</h2>
        <ul className="sidebar-playlists">
          {playlists.map((playlist) => (
            <li key={playlist.id} className="sidebar-playlist">
              {playlist.name}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
