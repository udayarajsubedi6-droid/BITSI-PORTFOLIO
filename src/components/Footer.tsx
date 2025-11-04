import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'members' | 'career') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BITSI</h3>
                <p className="text-xs text-gray-400">IT Services & Investment</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions and strategic investments.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white transition text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('members')} className="text-gray-400 hover:text-white transition text-sm">
                  Our Members
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('career')} className="text-gray-400 hover:text-white transition text-sm">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-white transition cursor-pointer">Web Development</li>
              <li className="hover:text-white transition cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white transition cursor-pointer">Cybersecurity</li>
              <li className="hover:text-white transition cursor-pointer">Investment Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-sm text-gray-400">Corporate Office, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-400">+977 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-400">info@bitsi.com.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Bhagawati IT Services and Investment Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
