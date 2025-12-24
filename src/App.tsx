import React, { useState } from 'react';
import { Home, Calendar, Users, Building2, Trophy, MapPin, Menu, X, Sun, Moon, LogIn } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import DarkHomeSection from './components/DarkHomeSection';
import DarkEventsSection from './components/DarkEventsSection';
import CommunitySection from './components/CommunitySection';
import NewHouseCouncilSection from './components/NewHouseCouncilSection';
import TeamSection from './components/TeamSection';
import RegionalLeadersSection from './components/RegionalLeadersSection';
import PixelSnow from './components/PixelSnow';
import SignInPage from './components/SignInPage';
import LoadingScreen from './components/LoadingScreen';

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
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  if (showSignIn) {
    return <SignInPage onBack={() => setShowSignIn(false)} />;
  }

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
      {/* Gold PixelSnow Background - VISIBLE */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 1 }}>
        <PixelSnow
          color="#D4AF37"
          flakeSize={0.012}
          minFlakeSize={1.5}
          pixelResolution={150}
          speed={0.8}
          depthFade={5}
          farPlane={30}
          brightness={2.0}
          gamma={0.7}
          density={0.5}
          variant="square"
          direction={120}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <img src="/nallamala_house_iit_madras_logo.jpg" alt="Nallamala House Logo" className="w-10 h-10 rounded-full object-cover" />
                <h1 className="text-2xl font-bold text-white">Nallamala House</h1>
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
                          ? 'bg-gray-800 text-white font-medium'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => setShowSignIn(true)}
                  className="ml-2 px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all flex items-center gap-2 font-medium shadow-lg shadow-amber-600/30"
                >
                  <LogIn size={18} />
                  Sign In
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 space-y-2 border-t border-gray-800">
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
                          ? 'bg-gray-800 text-white font-medium'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
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
