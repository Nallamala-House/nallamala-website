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
      } ${isDark ? 'bg-gray-800' : 'bg-white shadow-xl'}`}
    >
      <div className="p-6">
        <h1 className={`text-2xl font-bold text-indigo-600 mb-8`}>
          Nallamala House
        </h1>
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-indigo-50'
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