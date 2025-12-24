import React, { useState } from 'react';
import { Users, Calendar, ExternalLink } from 'lucide-react';

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
    title: "Classical AI vs Quantum AI vs Photonic AI",
    date: "2024-04-15",
    description: "Blog about Classical AI vs Quantum AI vs Photonic AI ",
    registrationLink: "https://medium.com/@vixal/classical-ai-vs-quantum-ai-vs-photonic-ai-4adfc8b99023",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9O_s2PNmLN7nYM27lN0oow.jpeg"
  },
  {
    id: 2,
    title: "The Hidden Wiki: How To Access Dark Web?",
    date: "2024-04-20",
    description: "How to access dark web?",
    registrationLink: "https://medium.com/@vixal/the-hidden-wiki-how-to-access-dark-web-4496cfc6d7fd",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*xd1jvPKVZhupaO2M4lPzAg.png"
  }
];


const EventsSection = () => {
  const [activeTab] = useState<'upcoming' | 'ongoing'>('upcoming');

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl shadow-yellow-500/20 overflow-hidden transition-transform hover:scale-[1.02] border-2 border-yellow-500/50 hover:border-yellow-500">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-500">{event.title}</h3>
        <p className="text-yellow-100 mb-4">{event.description}</p>
        <div className="flex items-center text-yellow-300 mb-4">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{event.date}</span>
        </div>
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 font-semibold"
          >
            Read
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-black/40">
      <div className="flex items-center mb-8 justify-center">
        <Users className="w-8 h-8 text-amber-500 mr-3" />
        <h2 className="text-3xl font-bold text-amber-500">Blogs</h2>
      </div>   
        
        {/* Tabs */}
        

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activeTab === 'upcoming'
            ? upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
            : upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
          }
        </div>
      
    </div>
  );
};

export default EventsSection;