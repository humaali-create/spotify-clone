// Mock data for the initial build. Replace with API data later.
// Covers are CSS gradients built from `colors` so no external images are needed.
// Track `artwork` is original abstract/textural art (CC0/CC-BY, sourced via
// Openverse) used for the featured-playlist hero collage — never real,
// copyrighted album covers or photography of people/places.

export const playlists = [
  {
    id: '1',
    name: 'Morning Coffee',
    description: 'Mellow acoustic tunes to start the day.',
    owner: 'Huma',
    colors: ['#b45309', '#fbbf24'],
    category: 'Acoustic',
    tracks: [
      {
        title: 'Sunlit Window',
        artist: 'Mellow Fields',
        duration: '3:12',
        artwork: 'https://live.staticflickr.com/4081/4770905840_de47edd0c4_b.jpg',
      },
      {
        title: 'Porch Light',
        artist: 'Ander & Rowe',
        duration: '2:58',
        artwork: 'https://live.staticflickr.com/8365/8489345587_dd0a832f29_b.jpg',
      },
      {
        title: 'Slow Brew',
        artist: 'Wildflower Radio',
        duration: '3:34',
        artwork: 'https://live.staticflickr.com/8516/8593698378_22e4e9a42d_b.jpg',
      },
      {
        title: 'First Pour',
        artist: 'Mellow Fields',
        duration: '4:01',
        artwork: 'https://live.staticflickr.com/3437/3801365993_fcae20a01a_b.jpg',
      },
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
      {
        title: 'Quiet Circuits',
        artist: 'Nova Static',
        duration: '5:20',
        artwork: 'https://live.staticflickr.com/8631/15760999230_c2c57382d2_b.jpg',
      },
      {
        title: 'Deep Work',
        artist: 'Glass Horizon',
        duration: '4:45',
        artwork: 'https://live.staticflickr.com/7369/9220280376_03e9de4aa2_b.jpg',
      },
      {
        title: 'Signal Path',
        artist: 'Nova Static',
        duration: '3:58',
        artwork: 'https://live.staticflickr.com/88/209924329_736145d49e.jpg',
      },
      {
        title: 'Steady State',
        artist: 'Aria Loop',
        duration: '6:02',
        artwork: 'https://live.staticflickr.com/4036/4655083332_a1a45f2805_b.jpg',
      },
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
      {
        title: 'Redline',
        artist: 'Pulse Theory',
        duration: '3:20',
        artwork: 'https://live.staticflickr.com/2131/2090629759_a680fbd42a_b.jpg',
      },
      {
        title: 'Overdrive',
        artist: 'Kinetic Youth',
        duration: '3:05',
        artwork: 'https://live.staticflickr.com/2748/4415583424_99176c769b.jpg',
      },
      {
        title: 'Sweat Equity',
        artist: 'Pulse Theory',
        duration: '2:47',
        artwork: 'https://live.staticflickr.com/3805/10353392674_cd8aeaf33a_b.jpg',
      },
      {
        title: 'Last Rep',
        artist: 'Iron Current',
        duration: '3:33',
        artwork: 'https://live.staticflickr.com/2541/4151138066_a9e2022184_b.jpg',
      },
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
      {
        title: 'Low Tide',
        artist: 'Salt Air',
        duration: '3:41',
        artwork: 'https://live.staticflickr.com/2032/2344934553_09829bd59c_b.jpg',
      },
      {
        title: 'Soft Focus',
        artist: 'Paper Moon',
        duration: '4:10',
        artwork: 'https://live.staticflickr.com/3872/15068963120_1835fb816f_b.jpg',
      },
      {
        title: 'Evening Static',
        artist: 'Salt Air',
        duration: '3:22',
        artwork: 'https://live.staticflickr.com/2470/4069449279_ec06175591_b.jpg',
      },
      {
        title: 'Drift',
        artist: 'Hollow Coast',
        duration: '4:55',
        artwork: 'https://live.staticflickr.com/3052/2489335599_c048bc8d2f_b.jpg',
      },
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
      {
        title: 'Rewind City',
        artist: 'The Cassette Kids',
        duration: '3:15',
        artwork: 'https://live.staticflickr.com/4029/4465882384_58a23433ba_b.jpg',
      },
      {
        title: 'Y2K Heart',
        artist: 'Foxglove',
        duration: '3:48',
        artwork: 'https://live.staticflickr.com/8430/7637555610_5da7508760_b.jpg',
      },
      {
        title: 'Old Number',
        artist: 'The Cassette Kids',
        duration: '4:02',
        artwork: 'https://live.staticflickr.com/4081/4770905840_de47edd0c4_b.jpg',
      },
      {
        title: 'Mixtape Blue',
        artist: 'Satellite June',
        duration: '3:29',
        artwork: 'https://live.staticflickr.com/8516/8593698378_22e4e9a42d_b.jpg',
      },
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
      {
        title: 'Neon Overpass',
        artist: 'Vector Nights',
        duration: '4:33',
        artwork: 'https://live.staticflickr.com/5259/5402419504_cf2c525926_b.jpg',
      },
      {
        title: 'Chrome Horizon',
        artist: 'Midnight Circuit',
        duration: '5:08',
        artwork: 'https://live.staticflickr.com/1154/5121542517_29eee48f19.jpg',
      },
      {
        title: 'Rearview',
        artist: 'Vector Nights',
        duration: '3:52',
        artwork: 'https://live.staticflickr.com/3872/15068963120_1835fb816f_b.jpg',
      },
      {
        title: 'Empty Highway',
        artist: 'Static Drift',
        duration: '4:17',
        artwork: 'https://live.staticflickr.com/7369/9220280376_03e9de4aa2_b.jpg',
      },
    ],
  },
]
