import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  items,
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { isDark } = useTheme();
  
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-full transition-transform duration-300 w-64 z-40 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 border-r-2 border-amber-600/20 shadow-2xl shadow-amber-600/10 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="p-6">
        {/* Centered Logo */}
        <div
          className="flex items-center justify-center mb-4"
          style={{
            height: '80px',
            width: '100%',
            marginTop: '20px'

          }}
        >
          <img 
            src="/cropped_image.png" 
            alt="Logo" 
            className="border-4 border-amber-600 shadow-lg shadow-amber-600/30"
            style={{ height: '100px', width: '100px', borderRadius: '50%' }}
          />
        </div>

        {/* Sidebar Title */}
        <h1
          className="text-2xl font-bold text-amber-500 mb-8 text-center"
          style={{
            marginTop: '40px',
            
          }}
        >
          Nallamala House
        </h1>

        {/* Navigation Items */}
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-amber-600 text-white font-semibold shadow-lg shadow-amber-600/30'
                      : 'text-amber-200 hover:bg-gray-800 border-2 border-transparent hover:border-amber-600/30'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
