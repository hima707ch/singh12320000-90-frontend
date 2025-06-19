import React from 'react';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Buy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Sell</a></li>
              <li><a href="#" className="hover:text-indigo-400">Rent</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400">Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
              <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 Dream Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;