import React from 'react';
import { Building2, Mail, Phone, Linkedin } from 'lucide-react';

const HouseCouncilSection = () => {
  const councilMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'House Dean',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      email: 'sarah.johnson@nallamala.edu',
      phone: '+1 (555) 123-4567',
      linkedin: 'linkedin.com/in/sarahjohnson'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Faculty Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      email: 'michael.chen@nallamala.edu',
      phone: '+1 (555) 234-5678',
      linkedin: 'linkedin.com/in/michaelchen'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Student President',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      email: 'emma.rodriguez@nallamala.edu',
      phone: '+1 (555) 345-6789',
      linkedin: 'linkedin.com/in/emmarodriguez'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Building2 className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold">House Council</h2>
        </div>

        {/* Council Description */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <p className="text-gray-600 leading-relaxed">
            The Nallamala House Council serves as the governing body of our community,
            working tirelessly to enhance student life, organize events, and maintain
            our traditions. Our council members are dedicated to fostering an inclusive
            and vibrant environment for all residents.
          </p>
        </div>

        {/* Council Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseCouncilSection;