import React from 'react';
import { Award, Star } from 'lucide-react';

const TeamSection = () => {
  const teams = [
    {
      category: 'Academic Teams',
      teams: [
        {
          name: 'Debate Team',
          achievements: ['National Champions 2023', 'Regional Winners'],
          members: ['John Doe', 'Jane Smith', 'Mike Johnson'],
          image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80'
        },
        {
          name: 'Research Group',
          achievements: ['Best Paper Award', 'Innovation Grant 2023'],
          members: ['Sarah Williams', 'Tom Brown', 'Lisa Chen'],
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
        }
      ]
    },
    {
      category: 'Sports Teams',
      teams: [
        {
          name: 'Basketball Team',
          achievements: ['Inter-College Champions', 'City League Winners'],
          members: ['Michael Jordan', 'Chris Paul', 'Emma Thompson'],
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80'
        },
        {
          name: 'Swimming Team',
          achievements: ['State Champions', '3 National Records'],
          members: ['David Miller', 'Sophie Chen', 'James Wilson'],
          image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Award className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold">Our Teams</h2>
        </div>

        {teams.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.teams.map((team, teamIndex) => (
                <div
                  key={teamIndex}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-4">{team.name}</h4>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-600 mb-2">Achievements</h5>
                      <div className="space-y-2">
                        {team.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-600 mb-2">Key Members</h5>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;