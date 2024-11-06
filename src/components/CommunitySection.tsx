import React from 'react';
import { Users, Heart, MessageCircle, Trophy } from 'lucide-react';

const CommunitySection = () => {
  const communities = [
    {
      icon: Users,
      title: 'Student Groups',
      description: 'Join various interest-based groups and connect with like-minded peers.',
      members: 150
    },
    {
      icon: Heart,
      title: 'Volunteer Network',
      description: 'Participate in community service and make a positive impact.',
      members: 75
    },
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in meaningful discussions about academics, culture, and more.',
      members: 200
    },
    {
      icon: Trophy,
      title: 'Sports Teams',
      description: 'Compete in inter-house tournaments and represent Nallamala.',
      members: 100
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Community</h2>
        
        {/* Community Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {communities.map((community, index) => {
            const Icon = community.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                    <p className="text-gray-600 mb-4">{community.description}</p>
                    <p className="text-sm text-indigo-600 font-medium">
                      {community.members} Active Members
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Stats */}
        <div className="bg-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Members', value: '500+' },
              { label: 'Active Groups', value: '15' },
              { label: 'Events This Year', value: '25' },
              { label: 'Volunteer Hours', value: '1000+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;