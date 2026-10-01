import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
  return (
    <Link to="/" className="brand-logo" aria-label="Spotify Clone home">
      <svg className="brand-logo-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="11" width="3.5" height="9" rx="1.5" fill="currentColor" />
        <rect x="10.25" y="6" width="3.5" height="14" rx="1.5" fill="currentColor" />
        <rect x="17.5" y="2" width="3.5" height="18" rx="1.5" fill="currentColor" />
      </svg>
      <span className="brand-logo-text">Spotify Clone</span>
    </Link>
  )
}

export default Logo
