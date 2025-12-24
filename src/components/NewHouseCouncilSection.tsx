import { useState } from 'react';
import { Building2, Mail, Linkedin, MapPin, Code } from 'lucide-react';

const NewHouseCouncilSection = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');

  const councilData = {
    '2025-2026': {
      upperHouse: [
        {
          name: 'Naman Shyamsukha',
          role: 'Secretary',
          designation: 'Secretary',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
          email: 'secretary@nallamala.edu',
          linkedin: 'https://linkedin.com/in/',
          message: 'As Secretary, I am committed to fostering a collaborative and inclusive environment where every member feels valued and heard. Together, we will create memorable experiences and uphold the proud traditions of Nallamala House.'
        },
        {
          name: 'Abhay Kumar',
          role: 'Deputy Secretary',
          designation: 'Deputy Secretary',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          email: 'depsec@nallamala.edu',
          linkedin: 'https://linkedin.com/in/',
          message: 'Working alongside our amazing team, I aim to ensure smooth operations and meaningful engagement across all house activities. Let\'s make this year unforgettable!'
        }
      ],
      regionalCoordinators: [
        {
          name: 'Priya Sharma',
          designation: 'RC',
          region: 'North Region',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
          experience: 'Organized 15+ regional meetups | Event Management Lead | Student Welfare Committee Member'
        },
        {
          name: 'Rahul Verma',
          designation: 'RC',
          region: 'South Region',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
          experience: 'Community Building Expert | 3 years of student leadership | Academic Mentorship Program Coordinator'
        },
        {
          name: 'Anjali Patel',
          designation: 'RC',
          region: 'East Region',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
          experience: 'Cultural Events Coordinator | Inter-house Competition Winner | Student Ambassador'
        },
        {
          name: 'Arjun Singh',
          designation: 'RC',
          region: 'West Region',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
          experience: 'Sports Committee Head | Regional Meetup Organizer | Peer Mentor'
        },
        {
          name: 'Meera Krishnan',
          designation: 'RC',
          region: 'Central Region',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
          experience: 'Academic Excellence Coordinator | Student Outreach Program | Workshop Facilitator'
        }
      ],
      webOps: [
        {
          name: 'Keshava Krishnan',
          role: 'Web Admin',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
          experience: 'Full Stack Developer | 5+ years web development | Led 10+ major projects'
        },
        {
          name: 'Vishal Singh Baraiya',
          role: 'Website Manager',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
          experience: 'Frontend Specialist | UI/UX Designer | React & TypeScript Expert'
        },
        {
          name: 'Aditya Menon',
          role: 'Video Editor',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          experience: 'Creative Video Production | Adobe Premiere Pro | 50+ event videos'
        },
        {
          name: 'Sneha Reddy',
          role: 'Graphic Designer',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
          experience: 'Brand Identity Design | Adobe Creative Suite | Social Media Graphics'
        },
        {
          name: 'Rohan Gupta',
          role: 'Developer',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
          experience: 'Backend Development | Database Management | API Integration'
        }
      ],
      communityLeaders: [
        {
          name: 'Syed Ahmed',
          community: 'Chess: Grandmaster Guild',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
          experience: 'FIDE Rated Player | Chess Tournament Organizer | Teaching 3+ years'
        },
        {
          name: 'Tanvi Desai',
          community: 'Coding: Shunya',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
          experience: 'Competitive Programmer | Google Code Jam Finalist | CP Mentor'
        },
        {
          name: 'Arnav Kapoor',
          community: 'AI-ML: AIDW',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
          experience: 'ML Research | Kaggle Expert | AI Workshop Conductor'
        },
        {
          name: 'Kavya Iyer',
          community: 'Chapters & Verses',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
          experience: 'Published Author | Book Club Moderator | Creative Writing Workshop Host'
        },
        {
          name: 'Vikram Malhotra',
          community: 'Art Canvas',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
          experience: 'Digital Artist | Art Exhibition Curator | Visual Arts Instructor'
        }
      ]
    },
    '2024-2025': {
      upperHouse: [
        {
          name: 'Previous Secretary',
          role: 'Secretary',
          designation: 'Secretary',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          email: 'prev.sec@nallamala.edu',
          linkedin: 'https://linkedin.com/in/',
          message: 'Previous year leadership message...'
        }
      ],
      regionalCoordinators: [],
      webOps: [],
      communityLeaders: []
    }
  };

  const years = ['2025-2026', '2024-2025', '2024-2023', '2023-2022', '2022-2021'];

  const currentData = councilData[selectedYear as keyof typeof councilData] || councilData['2025-2026'];

  return (
    <div className="min-h-screen p-8 bg-gray-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Building2 className="w-10 h-10 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-bold">House Council</h1>
        </div>

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedYear === year
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-gray-100/90'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Upper House Council (UHC) */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Council {selectedYear}</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              The House Council, often referred to as the <strong>Upper House Council (UHC)</strong>, is an integral 
              part of our student governing body. It comprises the Secretary and Deputy Secretary of the house. The 
              Council acts as the governing body of our community, organizing events, upholding traditions, and 
              ensuring a thriving, inclusive environment for all residents. Our members are committed to fostering a 
              vibrant and engaging atmosphere within the house.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentData.upperHouse.map((member, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-4">{member.designation}</p>
                  
                  <div className="space-y-3 mb-4">
                    <a href={`mailto:${member.email}`} className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Mail className="w-5 h-5 mr-2" />
                      <span>{member.email}</span>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Linkedin className="w-5 h-5 mr-2" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm italic text-gray-700">{member.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coordinators (LHC) */}
        {currentData.regionalCoordinators.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Regional Coordinators (RCs)</h2>
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed">
                The Regional Coordinators, often referred to as the <strong>Lower House Council (LHC)</strong>, are an 
                essential part of our student governing body. The Lower House Council serves as the key point of contact 
                between house members and the governing bodies. They are the driving force behind the successful execution 
                of meetups and events, addressing member queries, and ensuring that every member's voice is heard.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {currentData.regionalCoordinators.map((rc, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <img src={rc.image} alt={rc.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <p className="text-white text-sm text-center">{rc.experience}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-1">{rc.name}</h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-1">{rc.designation}</p>
                    <div className="flex items-center justify-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{rc.region}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WebOps Team */}
        {currentData.webOps.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">WebOps Team</h2>
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed">
                The WebOps team, led by the Web Admin, comprises five dedicated members working under their supervision. 
                The team includes a Website Manager, Video Editor, Graphic Designers, and Developers. They form the core 
                technical team responsible for managing and maintaining all digital and technical aspects of our house, 
                ensuring smooth operation and high-quality output.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {currentData.webOps.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-purple-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <p className="text-white text-sm text-center">{member.experience}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <div className="flex items-center justify-center text-purple-600 font-semibold text-sm">
                      <Code className="w-4 h-4 mr-1" />
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Leaders */}
        {currentData.communityLeaders.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Community Leaders</h2>
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed">
                These are the leaders of our official communities. They are the ones who frequently organize events 
                within the houses to enhance engagement and foster a stronger sense of community among members.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {currentData.communityLeaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-orange-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <p className="text-white text-sm text-center">{leader.experience}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                    <p className="text-orange-600 font-semibold text-sm">{leader.community}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewHouseCouncilSection;
