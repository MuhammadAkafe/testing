import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  QrCode
} from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Restaurant Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DA</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Diet Art Restaurant</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
            
            {/* Contact Info Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+1 (555) 123-4567"
                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                title="Call us"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:info@dietartrestaurant.com"
                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                title="Email us"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://maps.google.com/?q=123+Healthy+Street+Wellness+City+WC+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                title="Find us on Google Maps"
              >
                <MapPin size={20} />
              </a>
              <button
                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                title="Show QR Code"
              >
                <QrCode size={20} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
