import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'members' | 'career' | 'about' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BITSI</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Bhagawati IT Services and Investment - Empowering businesses through technology and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition">
                  About
                </button>
              </li>
              {/* <li>
                <button onClick={() => onNavigate('members')} className="hover:text-white transition">
                  Our Members
                </button>
              </li> */}
              <li>
                <button onClick={() => onNavigate('career')} className="hover:text-white transition">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-white transition cursor-pointer">Custom Development</li>
              <li className="hover:text-white transition cursor-pointer">Data Management</li>
              <li className="hover:text-white transition cursor-pointer">Investment Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <Facebook size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <Twitter size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <Linkedin size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <Instagram size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 BITSI - Bhagawati IT Services and Investment Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
