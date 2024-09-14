import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  // Add any props you need
}

const Header: React.FC<HeaderProps> = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <header className="bg-green-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick('home')}
                className={`hover:text-gray-300 ${
                  selectedLink === 'home'
                    ? 'rounded-full bg-white text-green-500 px-2 py-1'
                    : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/soil-report"
                onClick={() => handleLinkClick('soil-report')}
                className={`hover:text-gray-300 ${
                  selectedLink === 'soil-report'
                    ? 'rounded-full bg-white text-green-500 px-2 py-1'
                    : ''
                }`}
              >
                Soil Report
              </Link>
            </li>
            <li>
              <Link
                to="/crop-guide"
                onClick={() => handleLinkClick('crop-guide')}
                className={`hover:text-gray-300 ${
                  selectedLink === 'crop-guide'
                    ? 'rounded-full bg-white text-green-500 px-2 py-1'
                    : ''
                }`}
              >
                Crop Guide
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => handleLinkClick('contact-us')}
                className={`hover:text-gray-300 ${
                  selectedLink === 'contact-us'
                    ? 'rounded-full bg-white text-green-500 px-2 py-1'
                    : ''
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => handleLinkClick('login')}
                className={`hover:text-gray-300 ${
                  selectedLink === 'login'
                    ? 'rounded-full bg-white text-green-500 px-2 py-1'
                    : ''
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
