// Gallery Data - Event Photos
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  team: string[];
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/eventPhotos/event1.jpeg',
    title: 'Philants',
    team: ['Anushka Gaikwad', 'Akshat Bhosale', 'Sarthak Deochake', 'Ashish Kharde', 'Chinmay Nakwa', 'Swaroop Patil']
  },
  {
    id: 2,
    src: '/images/eventPhotos/event2.jpeg',
    title: 'Green Club IOIT',
    team: ['Chinmay Nakwa']
  },
  {
    id: 3,
    src: '/images/eventPhotos/event3.jpeg',
    title: 'Website',
    team: ['Swaroop Patil', 'Ashish Kharde']
  },
  {
    id: 4,
    src: '/images/eventPhotos/event4.jpeg',
    title: 'AI Graveyard',
    team: ['Swaroop Patil']
  },
  {
    id: 5,
    src: '/images/eventPhotos/event5.jpeg',
    title: 'Jeevan',
    team: ['Swaroop Patil', 'Bhumi Shinde']
  },
  {
    id: 6,
    src: '/images/eventPhotos/event6.jpeg',
    title: 'Devrai',
    team: ['Sarvesh Kolte']
  },
  {
    id: 7,
    src: '/images/eventPhotos/event7.jpeg',
    title: 'Sahabhag',
    team: ['Swaroop Patil']
  },
  {
    id: 8,
    src: '/images/eventPhotos/event8.jpeg',
    title: 'MLSA Club IOIT',
    team: ['Pritam Rangari', 'Amol Waghmare']
  },
];

