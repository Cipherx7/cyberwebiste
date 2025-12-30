/* =======================
   Navigation
======================= */
export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About Us', path: '#about' },
  { label: 'CTFs', path: '#ctfs' },
  { label: 'Events', path: '#events' },
  { label: 'Partners', path: '#partners' },
  { label: 'Team', path: '#team' },
  { label: 'Contact', path: '#contact' }
]

/* =======================
   Projects
======================= */
export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

/* =======================
   Event Related Types
======================= */
export type Speaker = {
  name: string
  role: string
  topic?: string
  image?: string
  linkedin?: string
  twitter?: string
}

export type CTFWinner = {
  name: string
  college?: string
}

export type eventType = {
  id: string
  name: string
  date: string              // Example: "December 25, 2025"
  location: string
  description: string
  image: string
  registration?: string

  // Extra content
  collaboration?: string
  speakers?: Speaker[]
  ctfWinners?: CTFWinner[]
  gallery?: string[]
}

/* =======================
   Date Utilities
======================= */
export const normalizeDate = (dateStr: string) => {
  const d = new Date(dateStr)
  return d.toISOString().split('T')[0]
}

export const getMonthYear = (dateStr: string) => {
  const d = new Date(dateStr)
  return {
    month: d.getMonth(),
    year: d.getFullYear()
  }
}

export const getEventStatus = (dateStr: string) => {
  const today = new Date()
  const eventDate = new Date(dateStr)

  if (eventDate.toDateString() === today.toDateString()) return 'Live'
  return eventDate > today ? 'Upcoming' : 'Completed'
}

/* =======================
   Events Data
======================= */
export const eventsData: eventType[] = [
  {
    id: 'cyberx-ai-era-2025',
    name: 'Cybersecurity in the AI Era - A Hands-on Workshop',
    date: 'Augest 8, 2025',
    location: 'Online',
    description:
      'Cybersecurity in the AI Era is a hands-on workshop focused on modern AI-driven cyber threats, defensive strategies, and real-world security practices.',
    image: '/events/event-ai.jpeg',
    registration:
      'https://attendee.gotowebinar.com/register/5482339147915283031',
    collaboration:
      'CyberX Nashik Community × Cyber Security Club, Sandip University × EC-Council',
    speakers: [
      {
        name: 'CyberX Expert',
        role: 'Security Researcher',
        topic: 'AI-Powered Cyber Attacks & Defense',
        image: '/speakers/cyberx-expert.jpg',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      },
      {
        name: 'EC-Council Trainer',
        role: 'Certified Ethical Hacker',
        topic: 'Future of Ethical Hacking',
        image: '/speakers/eccouncil.jpg',
        linkedin: 'https://linkedin.com'
      }
    ]
  },

  {
    id: 'iot-cybersecurity-2025',
    name: 'IoT: Ideation to Product Development & Embedded Cybersecurity',
    date: 'July 19, 2025',
    location: 'KBTCOE, Nashik',
    description:
      'An in-depth session covering IoT architecture, product ideation, embedded systems security, and real-world attack vectors.',
    image: '/events/iot.jpeg',
    registration: 'https://example.com/register',
    collaboration: 'CyberX Nashik Community × KBTCOE Nashik',
    speakers: [
      {
        name: 'IoT Specialist',
        role: 'Embedded Systems Engineer',
        topic: 'Securing IoT Devices',
        image: '/speakers/iot-expert.jpg',
        linkedin: 'https://linkedin.com'
      }
    ]
  },

  {
    id: 'early-career-cybersecurity-2025',
    name: 'Building An Early Career In CyberSecurity',
    date: 'June 28, 2025',
    location: 'Online',
    description:
      'A beginner-friendly session designed to help students understand cybersecurity career paths, CTF basics, and community-driven learning.',
    image: '/events/event-2.jpeg',
    registration: 'https://example.com/register',
    collaboration: 'CyberX Nashik Community'
  },

  {
    id: 'build-2-break-ctf-2025',
    name: 'Build 2 Break: Cybersecurity Event',
    date: 'June 10, 2025',
    location: 'Seminar Hall, Alogozenith MET, Nashik',
    description:
      'Build 2 Break was a hands-on cybersecurity event featuring expert talks, live hacking demos, and a competitive Capture The Flag (CTF).',
    image: '/events/b2b-poster.png',
    collaboration: 'Alogozenith MET × CyberX Nashik Community',
    ctfWinners: [
      { name: 'Team Phantom', college: 'MET Nashik' },
      { name: 'Team ZeroDay' }
    ],
    gallery: [
      '/events/b2b/1.jpg',
      '/events/b2b/2.jpg',
      '/events/b2b/3.jpg'
    ]
  }
]
