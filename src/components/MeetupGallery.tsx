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
    <div className="py-20 px-4 bg-black/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">Meetup Gallery</h2>
          <p className="text-amber-200">Explore our regional meetups across India</p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative w-full h-full preserve-3d transition-transform duration-1000 ease-out"
              style={{ transform: `rotateY(${rotation}deg)` }}
            >
              {monuments.map((monument, index) => {
                const angle = (360 / monuments.length) * index;
                return (
                  <div
                    key={monument.id}
                    className="absolute top-1/2 left-1/2 w-72 h-96 cursor-pointer"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(450px) translateX(-50%) translateY(-50%)`,
                      transformOrigin: 'center',
                    }}
                    onClick={() => window.location.href = monument.meetupLink}
                  >
                    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-xl shadow-2xl overflow-hidden border-2 border-amber-600/50 hover:border-amber-500 hover:scale-105 transition-all hover:shadow-amber-600/50">
                      <img
                        src={monument.image}
                        alt={monument.name}
                        className="w-full h-3/4 object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg text-amber-500">{monument.name}</h3>
                        <p className="text-amber-200 text-sm">{monument.region}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => rotateCarousel('left')}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-all font-semibold transform hover:scale-105"
          >
            ← Previous
          </button>
          <button
            onClick={() => rotateCarousel('right')}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-all font-semibold transform hover:scale-105"
          >
            Next →
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default MeetupGallery;
