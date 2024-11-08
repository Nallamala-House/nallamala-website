
import { MapPin, Mail, Phone } from 'lucide-react';

const RegionalLeadersSection = () => {
  const regions = [
    {
      name: 'Chandigarh Region',
      leader: {
        name: 'Vishal Singh Baraiya',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        email: 'alexandra.kim@nallamala.edu',
        phone: '+1 (555) 111-2233',
        location: 'Rewa, MP'
      },
      stats: {
        members: 120,
        events: 15,
        chapters: 5
      }
    },
    {
      name: 'Kolkata Region',
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
      name: 'Bengluru Region',
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
      name: 'Mumbai Region',
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
      name: 'Chennai Region',
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
      name: 'Delhi Region',
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
      name: 'Hyderabad Region',
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
      name: 'Patna Region',
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
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <MapPin className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold">Regional Leaders</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg shadow-black hover:scale-[1.02] transition-transform"
            >
              {/* Region Header */}
              <div className="bg-indigo-600 p-4">
                <h3 className="text-xl font-semibold text-white">{region.name}</h3>
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
                    <h4 className="font-semibold">{region.leader.name}</h4>
                    <p className="text-sm text-gray-600">Regional Leader</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${region.leader.email}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.email}</span>
                  </a>
                  <a
                    href={`tel:${region.leader.phone}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.phone}</span>
                  </a>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.location}</span>
                  </div>
                </div>

                {/* Region Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">{region.stats.members}</p>
                    <p className="text-xs text-gray-600">Members</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">{region.stats.events}</p>
                    <p className="text-xs text-gray-600">Events</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">{region.stats.chapters}</p>
                    <p className="text-xs text-gray-600">Rank</p>
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
