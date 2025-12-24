import { useEffect, useState } from 'react';
import { Users, Award, Calendar, Target, Trophy, MapPin } from 'lucide-react';
import MeetupGallery from './MeetupGallery';
import Footer from './Footer';

const DarkHomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <div className="h-screen bg-cover bg-center relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
          src="/videos/855570-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div 
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ opacity: 1 - scrollY * 0.003 }}
        >
          <div className="max-w-4xl">
            <h2 
              className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4 tracking-wide animate-fade-in"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              वसुधैव कुटुम्बकम्
            </h2>
            <p className="text-xl text-amber-200 mb-8 italic">
              (The World is One Family)
            </p>
            <h1 
              className="text-5xl md:text-7xl font-bold text-amber-500 mb-6 p-6 border-4 rounded-lg border-amber-500/50 shadow-2xl bg-black/30 backdrop-blur-sm"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              Nallamala House
            </h1>
            <p className="text-2xl text-amber-100 mb-10 font-medium">
              In this house, we don't just belong. We create, we inspire, and we lead.
            </p>
            <div className="flex justify-center items-center gap-4 mx-auto mt-8">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-amber-500 text-black px-8 py-3 border-2 rounded-lg border-amber-400 hover:bg-amber-400 transition-all transform hover:scale-105 flex items-center gap-2 font-semibold">
                  <img 
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" 
                    alt="Discord" 
                    className="w-8 h-6 invert" 
                  />
                  Discord
                </button>
              </a>
              <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-amber-500 px-8 py-3 border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-black transition-all transform hover:scale-105 flex items-center gap-2 font-semibold">
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
      <div className="py-20 px-4 bg-transparent">
        <div 
          className="max-w-5xl mx-auto"
          style={{ 
            opacity: scrollY > 300 ? 1 : 0,
            transform: `translateY(${scrollY > 300 ? 0 : 50}px)`,
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="relative bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 p-10 rounded-2xl border-2 border-amber-600/40 shadow-2xl shadow-amber-600/20 backdrop-blur-sm overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-500 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-500 animate-pulse"></div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500 tracking-wider">
                <span className="inline-block border-b-4 border-yellow-500 pb-2 animate-fade-in">
                  About Nallamala House
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-amber-100 leading-relaxed">
                <p className="text-center text-xl font-medium">
                  <span className="text-amber-500 font-bold text-2xl">Nallamala House</span> - One of the twelve houses of the 
                  <span className="text-amber-400 font-semibold"> IIT Madras BS Degree Program</span>, 
                  dedicated to fostering academic excellence and community growth.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/30 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all transform hover:scale-105">
                    <h3 className="text-amber-500 font-bold text-xl mb-3">🌲 Our Inspiration</h3>
                    <p className="text-sm">
                      Named after the <strong>Nallamala Forests</strong> - the largest uninterrupted stretch of forest in South India, 
                      spanning the Eastern Ghats across Andhra Pradesh and Telangana.
                    </p>
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all transform hover:scale-105">
                    <h3 className="text-amber-500 font-bold text-xl mb-3">💪 Our Values</h3>
                    <p className="text-sm">
                      Like the forests symbolizing <strong>strength, balance, and resilience</strong>, we nurture, 
                      guide, and empower students to thrive academically and personally.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg border border-amber-500/30 text-center">
                  <p className="text-amber-300 italic text-lg">
                    "Just as the Nallamala ecosystem sustains diverse life, our house cultivates a 
                    thriving community of learners, innovators, and leaders."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* House Statistics */}
      <div className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-amber-500">House Statistics</h2>
          <p className="text-center text-xl mb-12 text-amber-200">Our achievements in numbers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-8 text-center border-2 border-amber-600/30 hover:border-amber-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/20"
                style={{
                  opacity: scrollY > 800 + index * 100 ? 1 : 0,
                  transform: `translateY(${scrollY > 800 + index * 100 ? 0 : 50}px) scale(${scrollY > 800 + index * 100 ? 1 : 0.9})`,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="flex justify-center mb-4 text-amber-500">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 text-amber-400">{stat.value}</h3>
                <p className="text-xl font-semibold mb-1 text-amber-200">{stat.label}</p>
                <p className="text-sm text-amber-300/70">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meetup Gallery */}
      <div className="bg-transparent">
        <MeetupGallery />
      </div>

      {/* Communities Section */}
      <div className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-8 h-8 text-amber-500 mr-3" />
            <h2 className="text-4xl font-bold text-amber-500">Our Communities</h2>
          </div>
          <p className="text-center text-amber-200 mb-12 text-lg">
            Join our vibrant communities and engage with like-minded peers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="group bg-black/30 backdrop-blur-lg rounded-xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
                style={{
                  opacity: scrollY > 1600 + index * 100 ? 1 : 0,
                  transform: `translateY(${scrollY > 1600 + index * 100 ? 0 : 50}px)`,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-500">{community.title}</h3>
                  <p className="text-amber-100 mb-4">{community.description}</p>
                  <div className="flex items-center text-amber-400">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{community.members} members</span>
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

export default DarkHomeSection;
