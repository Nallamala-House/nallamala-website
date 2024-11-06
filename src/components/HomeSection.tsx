import { useTheme } from '../context/ThemeContext';


import {Trophy, Calendar, History, BarChart3 } from 'lucide-react';



const HomeSection = () => {
  const { isDark } = useTheme();
  const upcomingEvents = [
    {
      title: "Cultural Night 2024",
      date: "2024-04-15",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
    },
    {
      title: "Monthly Online Meet-Up",
      date: "2024-04-20",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    }
  ];

  const communities = [
    {
      title: 'Coding: Shunya',
      members: 150,
      image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: 'Chess: Grand Master Guild',
      members: 75,
      image: "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: 'AI-ML: AIDW',
      members: 100,
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative">
        <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="855570-hd_1920_1080_25fps.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            
            <h1 className="text-5xl font-bold text-orange-600 mb-6 p-6 border-2 rounded-lg border-indigo-100">Nalamalla House</h1>
            <p className="text-xl text-indigo-100 mb-10">
            In this house, we don’t just belong. We create, we inspire, and we lead.
            </p>
            <div className="flex justify-center items-center gap-4 mx-auto mt-8">
  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
    <button className="bg-indigo-600 bg-opacity-50 text-white px-8 py-3 border-2 rounded-lg border-white-200 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
      <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="Discord Logo" className="w-12 h-8" />
      Discord
    </button>
  </a>

  <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <button className="bg-indigo-600 bg-opacity-50 text-white px-8 py-3 border-2 border-white-200 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
      <img src="whatsapp-svgrepo-com.svg" alt="WhatsApp Logo" className="w-12 h-8" />
      WhatsApp
    </button>
  </a>
</div>

          </div>
        </div>
      </div>

      {/* History and Stats Section */}
      <div className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* House History */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg shadow-black hover:shadow-cyan-600 transition-shadow">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold">Our History</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, Nallamala House has been a cornerstone of academic excellence
                and cultural diversity for over 4 years.
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
          <div className="bg-cyan-500 shadow-xl shadow-black rounded-xl hover:shadow-indigo-600 p-8 text-white">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">House Statistics</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Rank', value: '2' },
                { label: 'Members', value: '4000' },
                { label: 'Alumni', value: '50' },
                { label: 'Clubs & Societies', value: '10' },
                { label: 'Events', value: '100+' },
                { label: 'Awards', value: '20+' }
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
      <div className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
            </div>
            
            
            
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg shadow-black hover:shadow-orange-600 overflow-hidden"
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
      <div className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Featured Clubs</h2>
            </div>
            
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md shadow-black overflow-hidden hover:shadow-green-600 transition-shadow"
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