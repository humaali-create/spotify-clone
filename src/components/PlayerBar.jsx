import './PlayerBar.css'

// Placeholder only — no audio playback or state wiring yet.
function PlayerBar() {
  return (
    <footer className="player-bar">
      <div className="player-now-playing">
        <div className="player-cover" aria-hidden="true" />
        <div className="player-track-info">
          <span className="player-track-name">No track selected</span>
          <span className="player-track-artist">Choose a playlist to start listening.</span>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button type="button" className="player-btn" aria-label="Previous" disabled>
            ⏮
          </button>
          <button type="button" className="player-btn player-btn-play" aria-label="Play" disabled>
            ▶
          </button>
          <button type="button" className="player-btn" aria-label="Next" disabled>
            ⏭
          </button>
        </div>
        <div className="player-progress" aria-hidden="true">
          <div className="player-progress-track">
            <div className="player-progress-fill" />
          </div>
        </div>
      </div>

      <div className="player-extras" aria-hidden="true">
        <div className="player-volume-track">
          <div className="player-volume-fill" />
        </div>
      </div>
    </footer>
  )
}

export default PlayerBar
