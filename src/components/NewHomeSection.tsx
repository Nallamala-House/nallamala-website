import { useTheme } from '../context/ThemeContext';
import { Users, Award, Calendar, Target, Trophy, MapPin } from 'lucide-react';
import MeetupGallery from './MeetupGallery';
import Footer from './Footer';

const NewHomeSection = () => {
  const { isDark } = useTheme();

  const communities = [
    {
      title: 'Coding: Shunya',
      description: 'Competitive programming and software development community',
      members: 150,
      image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: 'Chess: Grand Master Guild',
      description: 'Strategic thinking and chess mastery',
      members: 75,
      image: "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: 'AI-ML: AIDW',
      description: 'Artificial Intelligence and Machine Learning enthusiasts',
      members: 100,
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: 'Chapters & Verses',
      description: 'Literary club for book lovers and writers',
      members: 85,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
    },
    {
      title: 'Art Canvas',
      description: 'Creative arts and visual expression',
      members: 95,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '4500+',
      label: 'Active Members',
      subtitle: 'And growing strong'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '50+',
      label: 'Distinguished Alumni',
      subtitle: 'Global leaders'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: '5',
      label: 'Communities',
      subtitle: 'Increasing engagements'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: '120+',
      label: 'Events Hosted',
      subtitle: 'Annual activities'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: '15+',
      label: 'Team Size',
      subtitle: 'Our Team'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: '100+',
      label: 'Meetups',
      subtitle: 'More on the way'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen bg-cover bg-center relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/855570-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-300 mb-4 tracking-wide animate-fade-in">
              वसुधैव कुटुम्बकम्
            </h2>
            <p className="text-xl text-gray-200 mb-8 italic">
              (The World is One Family)
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 p-6 border-4 rounded-lg border-indigo-100 shadow-2xl bg-black bg-opacity-30">
              Nallamala House
            </h1>
            <p className="text-2xl text-white mb-10 font-medium">
              In this house, we don't just belong. We create, we inspire, and we lead.
            </p>
            <div className="flex justify-center items-center gap-4 mx-auto mt-8">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-indigo-600 bg-opacity-70 text-white px-8 py-3 border-2 rounded-lg border-white hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  <img 
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" 
                    alt="Discord" 
                    className="w-8 h-6" 
                  />
                  Discord
                </button>
              </a>
              <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-600 bg-opacity-70 text-white px-8 py-3 border-2 border-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                  <img 
                    src="/whatsapp-svgrepo-com.svg" 
                    alt="WhatsApp" 
                    className="w-8 h-6" 
                  />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">About Nallamala House</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-indigo-600">Nallamala</strong> is one of the twelve houses of the IIT Madras BS Degree Program, 
              dedicated to supporting students throughout their academic journey. The house focuses on addressing student queries, 
              providing academic guidance, and fostering a supportive and inclusive learning environment.
            </p>
            <p>
              The name <strong className="text-indigo-600">Nallamala</strong> is inspired by the Nallamala Forests, a vast and 
              pristine forest range forming a major part of the Eastern Ghats, stretching across Andhra Pradesh and Telangana. 
              Known as the largest uninterrupted stretch of undisturbed forest in South India, the Nallamala region is shaped by 
              rugged hills and valleys and carved by the Krishna River, offering breathtaking natural beauty and ecological richness.
            </p>
            <p>
              These forests are home to diverse tropical dry deciduous vegetation, medicinal plants, and rich wildlife, including 
              the Bengal tiger, making the region an important conservation landscape. Beyond its ecological significance, the 
              Nallamala Forests also hold deep cultural and spiritual importance, housing the sacred Srisailam Temple and sustaining 
              the traditions of the indigenous Chenchu tribe.
            </p>
            <p>
              Just as the Nallamala Forests symbolize <strong className="text-orange-500">strength, balance, and resilience</strong>, 
              Nallamala House embodies these values by nurturing, guiding, and empowering students to thrive academically.
            </p>
          </div>
        </div>
      </div>

      {/* House Statistics */}
      <div className="py-20 px-4 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">House Statistics</h2>
          <p className="text-center text-xl mb-12 opacity-90">Our achievements in numbers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-opacity-20 transition-all transform hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-amber-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl font-semibold mb-1">{stat.label}</p>
                <p className="text-sm opacity-80">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meetup Gallery */}
      <MeetupGallery />

      {/* Communities Section */}
      <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-50/80 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-4xl font-bold">Our Communities</h2>
          </div>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Join our vibrant communities and engage with like-minded peers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{community.title}</h3>
                  <p className="text-gray-600 mb-4">{community.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-indigo-600 font-semibold">
                      {community.members} Active Members
                    </p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewHomeSection;
