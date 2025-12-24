import { Mail, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm text-amber-100 py-12 px-4 border-t-2 border-amber-600/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Nallamala House</h3>
            <p className="text-amber-200 text-sm text-center md:text-left">
              IIT Madras BS Degree Program
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#events" className="hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#council" className="hover:text-amber-400 transition-colors">Council & Team</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-amber-500">More</h4>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li><a href="#blogs" className="hover:text-amber-400 transition-colors">Blogs</a></li>
              <li><a href="#clubs" className="hover:text-amber-400 transition-colors">Clubs & Societies</a></li>
              <li><a href="#leaders" className="hover:text-amber-400 transition-colors">Regional Leaders</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black border-2 border-amber-600/50 rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black border-2 border-amber-600/50 rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <a 
              href="mailto:support@study.iitm.ac.in" 
              className="flex items-center text-amber-200 hover:text-amber-400 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-600/20 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2025 Nallamala House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
