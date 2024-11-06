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
      className={`fixed top-0 left-0 h-full transition-transform duration-300 lg:translate-x-0 w-64 z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDark ? 'bg-gray-800 shadow-black shadow-xl' : 'bg-gray-300 shadow-black shadow-md'}`}
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
          <img src="cropped_image.png" alt="Logo" style={{ height: '100px', width: '100px', borderRadius: '50%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)'}} />
        </div>

        {/* Sidebar Title */}
        <h1
          className="text-2xl font-bold text-yellow-600 mb-8 text-center"
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-orange-600 text-white'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-orange-50'
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
