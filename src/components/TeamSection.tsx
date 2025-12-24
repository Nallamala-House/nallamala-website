
import { Trophy, Mail, Phone } from 'lucide-react';

const RegionalLeadersSection = () => {
  const regions = [
    {
      name: 'Chess: Grandmaster Guild',
      leader: {
        name: 'Syed',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'India'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'Coding: Shunya',
      leader: {
        name: 'Marcus Thompson',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        email: 'marcus.thompson@nallamala.edu',
        phone: '+1 (555) 444-5566',
        location: 'Miami, FL'
      },
      stats: {
        members: 95,
        events: 12,
        chapters: 4
      }
    },
    {
      name: 'AI-ML: AIDW',
      leader: {
        name: 'Isabella Rodriguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        email: 'isabella.rodriguez@nallamala.edu',
        phone: '+1 (555) 777-8899',
        location: 'Los Angeles, CA'
      },
      stats: {
        members: 150,
        events: 18,
        chapters: 6
      }
    },
    {
      name: 'Nerd & Geeks: Pop Culture Club',
      leader: {
        name: 'Alexandra Kim',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'New York City, NY'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'Chapter & Verses: Literary Club',
      leader: {
        name: 'Alexandra Kim',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'New York City, NY'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'Art Canvas: Art Club',
      leader: {
        name: 'Alexandra Kim',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'New York City, NY'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'Anime-Movie-Series Club ',
      leader: {
        name: 'Alexandra Kim',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'New York City, NY'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'XYZ CLub',
      leader: {
        name: 'Alexandra Kim',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'New York City, NY'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 justify-center">
          <Trophy className="w-8 h-8 text-amber-500 mr-3" />
          <h2 className="text-3xl font-bold text-amber-500">Clubs and Societies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20 border-2 border-yellow-500/50 hover:border-yellow-500 hover:scale-[1.02] transition-all"
            >
              {/* Region Header */}
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4">
                <h3 className="text-xl font-semibold text-black">{region.name}</h3>
              </div>

              {/* Leader Information */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={region.leader.image}
                    alt={region.leader.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-yellow-500">{region.leader.name}</h4>
                    <p className="text-sm text-yellow-200">Club Secretary</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${region.leader.email}`}
                    className="flex items-center text-yellow-200 hover:text-yellow-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.email}</span>
                  </a>
                  <a
                    href={`tel:${region.leader.phone}`}
                    className="flex items-center text-yellow-200 hover:text-yellow-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.phone}</span>
                  </a>
                  <div className="flex items-center text-yellow-200">
                    <Trophy className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.location}</span>
                  </div>
                </div>

                {/* Region Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-yellow-500/30">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-500">{region.stats.members}</p>
                    <p className="text-xs text-yellow-200">Members</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-500">{region.stats.events}</p>
                    <p className="text-xs text-yellow-200">Events</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-500">{region.stats.chapters}</p>
                    <p className="text-xs text-yellow-200">Chapters</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionalLeadersSection;