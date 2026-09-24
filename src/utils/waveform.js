// Deterministic seed from an id string, so the same playlist always
// produces the same waveform rather than changing on every render.
export function seedFromId(id) {
  return [...id].reduce((total, char) => total + char.charCodeAt(0), 0)
}

// Generates bar heights (0-1) that look like a real audio waveform: a
// musical rhythm (sine wave) blended with per-bar jitter, not pure noise.
export function generateWaveform(seed, count) {
  let value = seed
  const bars = []
  for (let i = 0; i < count; i += 1) {
    value = (value * 9301 + 49297) % 233280
    const jitter = value / 233280
    const rhythm = Math.abs(Math.sin(i * 0.35))
    bars.push(0.12 + rhythm * 0.6 + jitter * 0.28)
  }
  return bars
}
