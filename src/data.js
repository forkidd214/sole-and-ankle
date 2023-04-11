/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

export const SHOES = [
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: '/assets/tech-challenge.jpg',
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
    category: 'running',
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: '/assets/metcon-5.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
    category: 'training-&-gym',
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision',
    imageSrc: '/assets/phantom.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
    category: 'football',
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus',
    imageSrc: '/assets/pegasus.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
    category: 'running',
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: '/assets/joyride.jpg',
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
    category: 'running',
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8',
    imageSrc: '/assets/legend-academy.jpg',
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
    category: 'running',
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: '/assets/react-infinity.jpg',
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
    category: 'running',
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: '/assets/phantom-flyknit.jpg',
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
    category: 'running',
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: '/assets/lebron.jpg',
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
    category: 'basketball',
  },
]

export const CATEGORIES = [
  {
    slug: 'lifestyle',
    name: 'Lifestyle',
  },
  {
    slug: 'jordan',
    name: 'Jordan',
  },
  {
    slug: 'running',
    name: 'Running',
  },
  {
    slug: 'basketball',
    name: 'Basketball',
  },
  {
    slug: 'training-&-gym',
    name: 'Training & Gym',
  },
  {
    slug: 'football',
    name: 'Football',
  },
  {
    slug: 'skateboarding',
    name: 'Skateboarding',
  },
  {
    slug: 'american-football',
    name: 'American Football',
  },
  {
    slug: 'baseball',
    name: 'Baseball',
  },
  {
    slug: 'golf',
    name: 'Glf',
  },
  {
    slug: 'tennis',
    name: 'Tennis',
  },
  {
    slug: 'athletics',
    name: 'Athletics',
  },
  {
    slug: 'waliking',
    name: 'Waliking',
  },
]

export const SORTS = [
  {
    value: 'newest',
    label: 'Newest Releases',
  },
  {
    value: 'price',
    label: 'Price',
  },
  {
    value: 'curated',
    label: 'Curated',
  },
]
