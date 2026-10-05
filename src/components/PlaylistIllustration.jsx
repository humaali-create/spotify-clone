function PlaylistIllustration({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="playlist-illustration-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#161450" />
          <stop offset="55%" stopColor="#8c2f6b" />
          <stop offset="100%" stopColor="#e8743a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#playlist-illustration-sky)" />

      {/* Stars */}
      <circle cx="24" cy="22" r="1.4" fill="#ffffff" opacity="0.9" />
      <circle cx="52" cy="14" r="1" fill="#ffffff" opacity="0.6" />
      <circle cx="80" cy="30" r="1.3" fill="#ffffff" opacity="0.8" />
      <circle cx="140" cy="18" r="1" fill="#ffffff" opacity="0.5" />
      <circle cx="168" cy="36" r="1.4" fill="#ffffff" opacity="0.85" />
      <circle cx="110" cy="10" r="1" fill="#ffffff" opacity="0.6" />

      {/* Skyline */}
      <rect x="0" y="150" width="22" height="50" fill="#0c0a1f" />
      <rect x="20" y="130" width="18" height="70" fill="#0c0a1f" />
      <rect x="36" y="160" width="16" height="40" fill="#0c0a1f" />
      <rect x="150" y="140" width="20" height="60" fill="#0c0a1f" />
      <rect x="168" y="120" width="16" height="80" fill="#0c0a1f" />
      <rect x="182" y="155" width="18" height="45" fill="#0c0a1f" />

      {/* Lit windows */}
      <rect x="6" y="162" width="4" height="4" fill="#ffd37a" />
      <rect x="27" y="145" width="4" height="4" fill="#ffd37a" />
      <rect x="174" y="135" width="4" height="4" fill="#ffd37a" />

      {/* Window ledge (foreground) */}
      <rect x="0" y="186" width="200" height="14" fill="#0c0a1f" />

      {/* Person, seen from behind, sitting on the ledge */}
      <path d="M72 186 C72 160, 128 160, 128 186 Z" fill="#0c0a1f" />
      <circle cx="100" cy="140" r="15" fill="#0c0a1f" />
      <path
        d="M85 136 a15 15 0 0 1 30 0"
        fill="none"
        stroke="#0c0a1f"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="84" cy="140" r="4.5" fill="#0c0a1f" />
      <circle cx="116" cy="140" r="4.5" fill="#0c0a1f" />
    </svg>
  )
}

export default PlaylistIllustration
