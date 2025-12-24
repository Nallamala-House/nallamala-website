import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description?: string;
  image?: string;
}

const NewEventsSection = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'upcoming'>('upcoming');

  const completedEvents: Event[] = [
    {
      id: 1,
      title: '12 City Meetup Series with Boundless',
      date: '6-14th August 2024',
      description: 'A nationwide meetup series connecting students across 12 major cities.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Noor e Sama',
      date: '21st August 2024',
      description: 'A cultural celebration of arts and traditions.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Meetups with Boundless',
      date: '27th Sep - 2nd Oct 2024',
      description: 'Collaborative meetups fostering community engagement.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Session with Nature Nurture Society',
      date: '16th October 2024',
      description: 'Environmental awareness and sustainability session.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Mahasamvaad',
      date: '5th November 2024',
      description: 'A grand dialogue bringing together thought leaders and students.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Agentic AI Workshop - Part 1, 2 & 3',
      date: '11-17th November 2024',
      description: 'Comprehensive workshop series on Agentic AI and its applications.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Fun Session: Woh Din Bhi Kya Din The',
      date: '14th November 2024',
      description: 'Nostalgic fun session celebrating memories and moments.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80'
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: 8,
      title: 'Annual Cultural Fest 2025',
      date: 'January 2025',
      description: 'Grand cultural celebration with performances, competitions, and more.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Tech Summit 2025',
      date: 'February 2025',
      description: 'Technology conference featuring industry experts and innovations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    },
    {
      id: 10,
      title: 'Regional Meetup Series',
      date: 'March 2025',
      description: 'Connect with house members in your region.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
    }
  ];

  const EventCard: React.FC<{ event: Event; isCompleted: boolean }> = ({ event, isCompleted }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl">
      {event.image && (
        <div className="h-56 overflow-hidden relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {isCompleted && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Completed</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
        <div className="flex items-center text-indigo-600 mb-3">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-semibold">{event.date}</span>
        </div>
        {event.description && (
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 text-indigo-600 mr-3" />
            <h1 className="text-5xl font-bold text-gray-800">Events</h1>
          </div>
          <p className="text-xl text-gray-600">
            Explore our journey through past achievements and exciting upcoming events
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 ${
              activeTab === 'upcoming'
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Clock className="w-5 h-5" />
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 ${
              activeTab === 'completed'
                ? 'bg-green-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Completed Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'completed' 
            ? completedEvents.map((event) => (
                <EventCard key={event.id} event={event} isCompleted={true} />
              ))
            : upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isCompleted={false} />
              ))
          }
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">120+</h3>
            <p className="text-gray-600 font-semibold">Events Hosted</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-green-600 mb-2">4500+</h3>
            <p className="text-gray-600 font-semibold">Participants</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">12+</h3>
            <p className="text-gray-600 font-semibold">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEventsSection;
