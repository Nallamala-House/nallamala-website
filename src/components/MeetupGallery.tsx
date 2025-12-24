import { useState, useEffect } from 'react';

const MeetupGallery = () => {
  const monuments = [
    {
      id: 1,
      name: 'Taj Mahal',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80',
      meetupLink: '/meetups/north'
    },
    {
      id: 2,
      name: 'Gateway of India',
      region: 'West India',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80',
      meetupLink: '/meetups/west'
    },
    {
      id: 3,
      name: 'Meenakshi Temple',
      region: 'South India',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80',
      meetupLink: '/meetups/south'
    },
    {
      id: 4,
      name: 'Howrah Bridge',
      region: 'East India',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80',
      meetupLink: '/meetups/east'
    },
    {
      id: 5,
      name: 'Hawa Mahal',
      region: 'Central India',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80',
      meetupLink: '/meetups/central'
    }
  ];

  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setRotation(prev => prev - 72); // 360/5 = 72 degrees
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  const rotateCarousel = (direction: 'left' | 'right') => {
    setAutoRotate(false);
    const angle = 360 / monuments.length;
    setRotation(prev => direction === 'left' ? prev + angle : prev - angle);
    setTimeout(() => setAutoRotate(true), 5000);
  };

  return (
    <div className="py-20 px-4 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-amber-500">Regional Meetup Gallery</h2>
          <p className="text-amber-200 text-lg">Connecting Nallamala House members across India</p>
        </div>

        {/* Improved 3D Carousel */}
        <div className="relative h-[600px] perspective-2000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative preserve-3d transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {monuments.map((monument, index) => {
                const angle = (360 / monuments.length) * index;
                const isCenter = Math.abs(((rotation % 360) + angle) % 360) < 20 || Math.abs(((rotation % 360) + angle) % 360) > 340;
                
                return (
                  <div
                    key={monument.id}
                    className="absolute cursor-pointer"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(550px)`,
                      transformStyle: 'preserve-3d',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-180px',
                      marginTop: '-220px',
                      transition: 'all 0.7s ease-in-out',
                      opacity: isCenter ? 1 : 0.6,
                      filter: isCenter ? 'brightness(1.1)' : 'brightness(0.7)',
                    }}
                    onClick={() => window.location.href = monument.meetupLink}
                  >
                    <div className="w-[360px] h-[440px] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-3 border-amber-600/60 hover:border-amber-400 transition-all hover:shadow-amber-500/50">
                      <div className="relative h-[320px] overflow-hidden">
                        <img
                          src={monument.image}
                          alt={monument.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-6 text-center bg-black/60 backdrop-blur-sm">
                        <h3 className="font-bold text-2xl text-amber-400 mb-2">{monument.name}</h3>
                        <p className="text-amber-200/80 text-base font-medium">{monument.region}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() => rotateCarousel('left')}
            className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all font-bold transform hover:scale-105 shadow-lg shadow-amber-600/30"
          >
            ← Previous
          </button>
          <button
            onClick={() => rotateCarousel('right')}
            className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all font-bold transform hover:scale-105 shadow-lg shadow-amber-600/30"
          >
            Next →
          </button>
        </div>
      </div>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
          perspective-origin: center center;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default MeetupGallery;
