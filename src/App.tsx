import React, { useState } from 'react';
import { Home, Calendar, Users, Building2, Trophy, MapPin, Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import DarkHomeSection from './components/DarkHomeSection';
import DarkEventsSection from './components/DarkEventsSection';
import CommunitySection from './components/CommunitySection';
import NewHouseCouncilSection from './components/NewHouseCouncilSection';
import TeamSection from './components/TeamSection';
import RegionalLeadersSection from './components/RegionalLeadersSection';
import PixelSnow from './components/PixelSnow';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'community', label: 'Blogs', icon: Users },
  { id: 'council', label: 'Council & Team', icon: Building2 },
  { id: 'team', label: 'Clubs & Societies', icon: Trophy },
  { id: 'leaders', label: 'Regional Leaders', icon: MapPin },
];

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <DarkHomeSection />;
      case 'events':
        return <DarkEventsSection />;
      case 'community':
        return <CommunitySection />;
      case 'council':
        return <NewHouseCouncilSection />;
      case 'team':
        return <TeamSection />;
      case 'leaders':
        return <RegionalLeadersSection />;
      default:
        return <DarkHomeSection />;
    }
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Gold PixelSnow Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <PixelSnow
          color="#FFD700"
          flakeSize={0.015}
          minFlakeSize={1.5}
          pixelResolution={180}
          speed={0.8}
          depthFade={10}
          farPlane={25}
          brightness={0.8}
          gamma={0.5}
          density={0.25}
          variant="round"
          direction={135}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <Building2 className="w-8 h-8 text-yellow-500" />
                <h1 className="text-2xl font-bold text-yellow-500">Nallamala House</h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                        activeSection === item.id
                          ? 'bg-yellow-500 text-black font-semibold'
                          : 'text-yellow-500 hover:bg-yellow-500/20'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg bg-yellow-500 text-black"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 space-y-2 border-t border-yellow-500/30">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                        activeSection === item.id
                          ? 'bg-yellow-500 text-black font-semibold'
                          : 'text-yellow-500 hover:bg-yellow-500/20'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16 min-h-screen transition-all duration-300">{renderSection()}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
