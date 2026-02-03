import { useState } from 'react';
import Head from 'next/head';
import { Linkedin, Github, Mail, Filter } from 'lucide-react';

const teamMembers = [
  // Leadership
  {
    id: 1,
    name: 'Dr. Faculty Advisor',
    role: 'Faculty Advisor',
    category: 'leadership',
    bio: 'Guiding the club with academic excellence and industry insights.',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 2,
    name: 'President',
    role: 'President',
    category: 'leadership',
    bio: 'Leading the Web Application Development Club with vision and passion for technology.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    id: 3,
    name: 'Vice President',
    role: 'Vice-President',
    category: 'leadership',
    bio: 'Supporting club initiatives and fostering innovation across all teams.',
    color: 'from-primary-500 to-accent-500',
  },
  
  // Event Team
  {
    id: 4,
    name: 'Event Head',
    role: 'Head - Event Team',
    category: 'event',
    bio: 'Orchestrating memorable tech events, workshops, and hackathons.',
    color: 'from-orange-500 to-red-400',
  },
  {
    id: 5,
    name: 'Event Joint Head',
    role: 'Joint Head - Event Team',
    category: 'event',
    bio: 'Co-leading event planning and seamless execution.',
    color: 'from-red-500 to-orange-400',
  },
  
  // Tech Team
  {
    id: 6,
    name: 'Swaroop',
    role: 'Head - Tech Team',
    category: 'tech',
    bio: 'Driving technical excellence and innovation in web development. Led multiple successful projects including Timetable Tracker and AI Graveyard.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 7,
    name: 'Ashish Kharde',
    role: 'Joint Head - Tech Team',
    category: 'tech',
    bio: 'Building robust applications and mentoring developers. Key contributor to Timetable Tracker, Devrai, and MLSA Club projects.',
    color: 'from-cyan-500 to-blue-400',
  },
  
  // Media Team
  {
    id: 8,
    name: 'Bhumi Shinde',
    role: 'Head - Media Team',
    category: 'media',
    bio: 'Creating stunning visuals and managing digital presence. Developer of Jeevan Utsav and Green Club IOIT platforms.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    id: 9,
    name: 'Sarvesh Kolte',
    role: 'Joint Head - Media Team',
    category: 'media',
    bio: 'Crafting engaging content and brand identity. Contributed to Jeevan Utsav and Sahabhag projects.',
    color: 'from-rose-500 to-pink-400',
  },
  
  // Documentation Team
  {
    id: 10,
    name: 'Chinmay Nakwa',
    role: 'Head - Documentation Team',
    category: 'documentation',
    bio: 'Ensuring comprehensive documentation and knowledge management. Developer of AI Graveyard and Sahabhag.',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 11,
    name: 'Pritam Rangari',
    role: 'Joint Head - Documentation Team',
    category: 'documentation',
    bio: 'Maintaining records and creating technical documentation. Key contributor to Devrai and Green Club IOIT.',
    color: 'from-orange-500 to-amber-400',
  },
  
  // Additional Members
  {
    id: 12,
    name: 'Amol Waghmare',
    role: 'Core Member - Tech Team',
    category: 'tech',
    bio: 'Full-stack developer with expertise in cloud technologies. Developer of Jeevan Utsav and MLSA Club platforms.',
    color: 'from-indigo-500 to-purple-400',
  },
];

const categories = [
  { id: 'all', name: 'All Members', count: teamMembers.length },
  { id: 'leadership', name: 'Leadership', count: teamMembers.filter(m => m.category === 'leadership').length },
  { id: 'tech', name: 'Tech Team', count: teamMembers.filter(m => m.category === 'tech').length },
  { id: 'event', name: 'Event Team', count: teamMembers.filter(m => m.category === 'event').length },
  { id: 'media', name: 'Media Team', count: teamMembers.filter(m => m.category === 'media').length },
  { id: 'documentation', name: 'Documentation', count: teamMembers.filter(m => m.category === 'documentation').length },
];

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredMembers = activeCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.category === activeCategory);

  return (
    <>
      <Head>
        <title>Our Team | Web Application Development Club</title>
        <meta name="description" content="Meet the dedicated team behind the Web Application Development Club." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-300 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Meet the <span className="text-accent-200">Innovators</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A passionate group of student leaders and tech enthusiasts dedicated to 
              fostering innovation and excellence in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4">
            <Filter className="w-5 h-5 text-secondary-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="card card-hover group"
              >
                {/* Avatar */}
                <div className={`h-52 bg-gradient-to-br ${member.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-5xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mt-1">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-secondary-100">
                    <a
                      href="#"
                      className="w-9 h-9 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-500 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-500 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-500 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Structure */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Club Structure
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  team: 'Event Team', 
                  roles: ['Head', 'Joint Head', 'Coordinators'],
                  description: 'Organizing workshops, hackathons, and tech talks',
                  color: 'border-orange-400'
                },
                { 
                  team: 'Tech Team', 
                  roles: ['Head', 'Joint Head', 'Developers'],
                  description: 'Building projects and providing technical mentorship',
                  color: 'border-blue-400'
                },
                { 
                  team: 'Media Team', 
                  roles: ['Head', 'Joint Head', 'Designers'],
                  description: 'Managing digital presence and creating content',
                  color: 'border-pink-400'
                },
                { 
                  team: 'Documentation Team', 
                  roles: ['Head', 'Joint Head', 'Writers'],
                  description: 'Maintaining records and creating resources',
                  color: 'border-amber-400'
                },
              ].map((item, index) => (
                <div key={index} className={`p-6 bg-white rounded-xl border-l-4 ${item.color} shadow-sm`}>
                  <h4 className="font-bold text-secondary-900 mb-2">{item.team}</h4>
                  <p className="text-sm text-secondary-600 mb-4">{item.description}</p>
                  <div className="space-y-1">
                    {item.roles.map((role, idx) => (
                      <div key={idx} className="text-sm text-secondary-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
