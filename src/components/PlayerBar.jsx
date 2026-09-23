import './PlayerBar.css'

// Placeholder only — no audio playback or state wiring yet.
function PlayerBar() {
  return (
    <footer className="player-bar">
      <div className="player-now-playing">
        <div className="player-cover" aria-hidden="true" />
        <div className="player-track-info">
          <span className="player-track-name">No track selected</span>
          <span className="player-track-artist">—</span>
        </div>
      </div>

      <div className="player-controls">
        <button type="button" className="player-btn" disabled>
          ⏮
        </button>
        <button type="button" className="player-btn player-btn-play" disabled>
          ▶
        </button>
        <button type="button" className="player-btn" disabled>
          ⏭
        </button>
      </div>

      <div className="player-extras" />
    </footer>
  )
}

export default PlayerBar
