import { generateWaveform, seedFromId } from '../utils/waveform.js'

function WaveformBackground({ seedId, color, className }) {
  const bars = generateWaveform(seedFromId(seedId), 56)
  const barWidth = 640 / bars.length

  return (
    <svg className={className} viewBox="0 0 640 200" preserveAspectRatio="none" aria-hidden="true">
      {bars.map((height, index) => {
        const barHeight = height * 200
        // Taper opacity toward both edges so the pattern fades out
        // instead of cutting off sharply.
        const position = index / (bars.length - 1)
        const edgeFade = Math.sin(position * Math.PI)
        return (
          <rect
            key={index}
            x={index * barWidth}
            y={(200 - barHeight) / 2}
            width={barWidth * 0.55}
            height={barHeight}
            rx={barWidth * 0.2}
            fill={color}
            opacity={edgeFade}
          />
        )
      })}
    </svg>
  )
}

export default WaveformBackground
