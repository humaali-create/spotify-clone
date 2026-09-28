import { useEffect, useRef } from 'react'
import './PlayerBar.css'

function PlayerBar({ track, isPlaying, onTogglePlay }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current || !track) return
    audioRef.current.play().catch(() => {})
  }, [track])

  useEffect(() => {
    if (!audioRef.current || !track) return
    if (isPlaying) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, track])

  return (
    <footer className="player-bar">
      {track && <audio ref={audioRef} src={track.audio} />}
      <div className="player-now-playing">
        <div className="player-cover" aria-hidden="true" />
        <div className="player-track-info">
          <span className="player-track-name">{track ? track.title : 'No track selected'}</span>
          <span className="player-track-artist">
            {track ? track.artist : 'Choose a playlist to start listening.'}
          </span>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button type="button" className="player-btn" aria-label="Previous" disabled>
            ⏮
          </button>
          <button
            type="button"
            className="player-btn player-btn-play"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={onTogglePlay}
            disabled={!track}
          >
            {isPlaying ? '⏸' : '▶'}
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
