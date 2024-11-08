import React, { useState } from 'react';
import { Home, Calendar, Users, Building2, Trophy, MapPin, Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import EventsSection from './components/EventsSection';
import CommunitySection from './components/CommunitySection';
import HouseCouncilSection from './components/HouseCouncilSection';
import TeamSection from './components/TeamSection';
import RegionalLeadersSection from './components/RegionalLeadersSection';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'community', label: 'Blogs', icon: Users },
  { id: 'council', label: 'Council & Team', icon: Building2 },
  { id: 'team', label: 'Clubs & Societies', icon: Trophy },
  { id: 'leaders', label: 'Regional Coordinators', icon: MapPin },
];

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'events':
        return <EventsSection />;
      case 'community':
        return <CommunitySection />;
      case 'council':
        return <HouseCouncilSection />;
      case 'team':
        return <TeamSection />;
      case 'leaders':
        return <RegionalLeadersSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle Button */}
      <button
        className="fixed top-4 right-20 z-50 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        onClick={toggleTheme}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-indigo-600 text-white lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <Navbar
        items={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {renderSection()}
      </main>
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
