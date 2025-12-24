import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description?: string;
  image?: string;
}

const DarkEventsSection = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'upcoming'>('upcoming');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const completedEvents: Event[] = [
    {
      id: 1,
      title: '12 City Meetup Series with Boundless',
      date: '6-14th August 2025',
      description: 'A nationwide meetup series connecting students across 12 major cities.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Noor e Sama',
      date: '21st August 2025',
      description: 'A cultural celebration of arts and traditions.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Meetups with Boundless',
      date: '27th Sep - 2nd Oct 2025',
      description: 'Collaborative meetups fostering community engagement.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Session with Nature Nurture Society',
      date: '16th October 2025',
      description: 'Environmental awareness and sustainability session.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Mahasamvaad',
      date: '5th November 2025',
      description: 'A grand dialogue bringing together thought leaders and students.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Agentic AI Workshop - Part 1, 2 & 3',
      date: '11-17th November 2025',
      description: 'Comprehensive workshop series on Agentic AI technologies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Fun session Woh din bhi kya din the',
      date: '14th November 2025',
      description: 'A nostalgic session celebrating memories and experiences.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80'
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: 8,
      title: 'Annual Cultural Fest 2026',
      date: 'January 2026',
      description: 'Grand cultural celebration with performances, competitions, and more.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Tech Summit 2026',
      date: 'February 2026',
      description: 'Technology conference featuring industry experts and innovations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    },
    {
      id: 10,
      title: 'Regional Meetup Series',
      date: 'March 2026',
      description: 'Connect with house members in your region.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
    }
  ];

  const EventCard: React.FC<{ event: Event; isCompleted: boolean; index: number }> = ({ event, isCompleted, index }) => (
    <div 
      className="bg-black/30 backdrop-blur-lg border-2 border-amber-500/30 rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500"
      style={{
        opacity: scrollY > 100 + index * 80 ? 1 : 0,
        transform: `translateY(${scrollY > 100 + index * 80 ? 0 : 50}px)`,
        transition: `all 0.6s ease-out ${index * 0.1}s`
      }}
    >
      {event.image && (
        <div className="h-56 overflow-hidden relative group">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          {isCompleted && (
            <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Completed</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-amber-500">{event.title}</h3>
        <div className="flex items-center text-amber-400 mb-3">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-semibold">{event.date}</span>
        </div>
        {event.description && (
          <p className="text-amber-100 leading-relaxed">{event.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="w-10 h-10 text-amber-500 mr-4" />
          <h1 className="text-5xl font-bold text-amber-500">Events</h1>
        </div>
        <p className="text-center text-amber-200 text-xl mb-12">
          Discover our past achievements and upcoming activities
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${ 
              activeTab === 'upcoming'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50'
                : 'bg-black border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10'
            }`}
          >
            <Clock className="inline-block mr-2" size={20} />
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              activeTab === 'completed'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50'
                : 'bg-black border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10'
            }`}
          >
            <CheckCircle className="inline-block mr-2" size={20} />
            Completed Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'completed'
            ? completedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} isCompleted={true} index={index} />
              ))
            : upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} isCompleted={false} index={index} />
              ))}
        </div>

        {activeTab === 'upcoming' && upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-yellow-500/50 mx-auto mb-4" />
            <p className="text-yellow-300 text-lg">No upcoming events at the moment. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DarkEventsSection;
