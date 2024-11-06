import React from 'react';
import { Building2, Calendar, Users, ExternalLink, History, BarChart3 } from 'lucide-react';

const HomeSection = () => {
  const upcomingEvents = [
    {
      title: "Cultural Night 2024",
      date: "2024-04-15",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
    },
    {
      title: "Leadership Summit",
      date: "2024-04-20",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    }
  ];

  const communities = [
    {
      title: 'Student Groups',
      members: 150,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    },
    {
      title: 'Volunteer Network',
      members: 75,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
    },
    {
      title: 'Sports Teams',
      members: 100,
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <Building2 className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to Nallamala House</h1>
            <p className="text-xl text-gray-200 mb-8">
              A vibrant community fostering leadership, innovation, and lifelong connections
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>

      {/* History and Stats Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* House History */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold">Our History</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1985, Nallamala House has been a cornerstone of academic excellence
                and cultural diversity for over three decades.
              </p>
              <p>
                Named after the ancient Nallamala forest range, our house embodies the strength,
                resilience, and natural harmony that the region represents.
              </p>
              <p>
                Through the years, we've fostered countless leaders, innovators, and changemakers
                who continue to make their mark globally.
              </p>
            </div>
          </div>

          {/* Member Stats */}
          <div className="bg-indigo-600 rounded-xl p-8 text-white">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">House Statistics</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Current Members', value: '500+' },
                { label: 'Alumni Network', value: '5000+' },
                { label: 'Academic Awards', value: '250+' },
                { label: 'Sports Trophies', value: '120+' },
                { label: 'Cultural Events', value: '50+/year' },
                { label: 'Global Chapters', value: '15' }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Preview */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
            </div>
            <button className="flex items-center text-indigo-600 hover:text-indigo-700">
              View All Events
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Preview */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Our Community</h2>
            </div>
            <button className="flex items-center text-indigo-600 hover:text-indigo-700">
              Explore Community
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                  <p className="text-indigo-600">
                    {community.members} Active Members
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;