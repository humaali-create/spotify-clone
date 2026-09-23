// Mock data for the initial build. Replace with API data later.
// Covers are CSS gradients built from `colors` so no external images are needed.

export const playlists = [
  {
    id: '1',
    name: 'Morning Coffee',
    description: 'Mellow acoustic tunes to start the day.',
    owner: 'Huma',
    colors: ['#b45309', '#fbbf24'],
    category: 'Acoustic',
    tracks: [
      { title: 'Sunlit Window', artist: 'Mellow Fields', duration: '3:12' },
      { title: 'Porch Light', artist: 'Ander & Rowe', duration: '2:58' },
      { title: 'Slow Brew', artist: 'Wildflower Radio', duration: '3:34' },
      { title: 'First Pour', artist: 'Mellow Fields', duration: '4:01' },
    ],
  },
  {
    id: '2',
    name: 'Focus Flow',
    description: 'Instrumental beats for deep work.',
    owner: 'Huma',
    colors: ['#1e3a8a', '#60a5fa'],
    category: 'Focus',
    tracks: [
      { title: 'Quiet Circuits', artist: 'Nova Static', duration: '5:20' },
      { title: 'Deep Work', artist: 'Glass Horizon', duration: '4:45' },
      { title: 'Signal Path', artist: 'Nova Static', duration: '3:58' },
      { title: 'Steady State', artist: 'Aria Loop', duration: '6:02' },
    ],
  },
  {
    id: '3',
    name: 'Workout Mix',
    description: 'High-energy tracks to keep you moving.',
    owner: 'Huma',
    colors: ['#991b1b', '#f87171'],
    category: 'Workout',
    tracks: [
      { title: 'Redline', artist: 'Pulse Theory', duration: '3:20' },
      { title: 'Overdrive', artist: 'Kinetic Youth', duration: '3:05' },
      { title: 'Sweat Equity', artist: 'Pulse Theory', duration: '2:47' },
      { title: 'Last Rep', artist: 'Iron Current', duration: '3:33' },
    ],
  },
  {
    id: '4',
    name: 'Chill Vibes',
    description: 'Laid-back grooves for winding down.',
    owner: 'Huma',
    colors: ['#065f46', '#34d399'],
    category: 'Chill',
    tracks: [
      { title: 'Low Tide', artist: 'Salt Air', duration: '3:41' },
      { title: 'Soft Focus', artist: 'Paper Moon', duration: '4:10' },
      { title: 'Evening Static', artist: 'Salt Air', duration: '3:22' },
      { title: 'Drift', artist: 'Hollow Coast', duration: '4:55' },
    ],
  },
  {
    id: '5',
    name: 'Throwback Hits',
    description: 'Classics from the 2000s.',
    owner: 'Huma',
    colors: ['#6b21a8', '#c084fc'],
    category: 'Throwback',
    tracks: [
      { title: 'Rewind City', artist: 'The Cassette Kids', duration: '3:15' },
      { title: 'Y2K Heart', artist: 'Foxglove', duration: '3:48' },
      { title: 'Old Number', artist: 'The Cassette Kids', duration: '4:02' },
      { title: 'Mixtape Blue', artist: 'Satellite June', duration: '3:29' },
    ],
  },
  {
    id: '6',
    name: 'Late Night Drive',
    description: 'Synthwave for the open road.',
    owner: 'Huma',
    colors: ['#831843', '#f472b6'],
    category: 'Synthwave',
    tracks: [
      { title: 'Neon Overpass', artist: 'Vector Nights', duration: '4:33' },
      { title: 'Chrome Horizon', artist: 'Midnight Circuit', duration: '5:08' },
      { title: 'Rearview', artist: 'Vector Nights', duration: '3:52' },
      { title: 'Empty Highway', artist: 'Static Drift', duration: '4:17' },
    ],
  },
]
