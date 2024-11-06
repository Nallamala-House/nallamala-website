import React, { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  registrationLink?: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Cultural Night 2024",
    date: "2024-04-15",
    description: "Join us for an evening of cultural performances, music, and traditional dance.",
    registrationLink: "https://forms.google.com/cultural-night-2024",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Online Meet-Up",
    date: "2024-04-20",
    description: "Monthly Virtual Meet-Up for House Members",
    registrationLink: "https://forms.google.com/leadership-summit",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
  }
];

const ongoingEvents: Event[] = [
  {
    id: 3,
    title: "Chess Tournament",
    date: "2024-03-15 - 2024-04-10",
    description: "Inter-house Chess Tournament.",
    image: "https://plus.unsplash.com/premium_photo-1672855928381-c237c6d74760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing'>('upcoming');

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-xl shadow-md shadow-black overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{event.date}</span>
        </div>
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Register Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'ongoing'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Ongoing Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeTab === 'upcoming'
            ? upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
            : ongoingEvents.map(event => <EventCard key={event.id} event={event} />)
          }
        </div>
      </div>
    </div>
  );
};

export default EventsSection;