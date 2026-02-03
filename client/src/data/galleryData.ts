// Gallery Data - Event Photos
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  // Add your event photos here following this format:
  // {
  //   id: 1,
  //   src: '/images/eventPhotos/workshops/web-dev-bootcamp-1.jpg',
  //   title: 'Web Development Bootcamp 2025',
  //   category: 'Workshop',
  //   date: '2025-08-15',
  //   description: 'Students learning React fundamentals'
  // },
  
  // Sample entries (replace with actual photos):
  {
    id: 1,
    src: '/images/eventPhotos/sample-1.jpg',
    title: 'Club Inauguration',
    category: 'General',
    date: '2024-01-15',
    description: 'Official inauguration ceremony of the Web Application Development Club'
  },
  {
    id: 2,
    src: '/images/eventPhotos/sample-2.jpg',
    title: 'Web Development Workshop',
    category: 'Workshop',
    date: '2024-02-20',
    description: 'Hands-on workshop on modern web technologies'
  },
  {
    id: 3,
    src: '/images/eventPhotos/sample-3.jpg',
    title: 'Hackathon 2024',
    category: 'Hackathon',
    date: '2024-03-15',
    description: 'Students collaborating during 24-hour hackathon'
  },
  {
    id: 4,
    src: '/images/eventPhotos/sample-4.jpg',
    title: 'Tech Talk Session',
    category: 'Tech Talk',
    date: '2024-04-10',
    description: 'Industry expert sharing insights on cloud computing'
  },
  {
    id: 5,
    src: '/images/eventPhotos/sample-5.jpg',
    title: 'Team Building Event',
    category: 'Team',
    date: '2024-05-20',
    description: 'Club members during team building activities'
  },
  {
    id: 6,
    src: '/images/eventPhotos/sample-6.jpg',
    title: 'Project Showcase',
    category: 'Event',
    date: '2024-06-15',
    description: 'Students presenting their web development projects'
  },
];

export const galleryCategories = [
  'All',
  'Workshop',
  'Hackathon',
  'Tech Talk',
  'Team',
  'Event',
  'General'
];
