// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 ">
            <h2 className="text-2xl font-bold mb-4 ">SHOP-SMART</h2>
            <p className="text-gray-400">Your go-to destination for the latest trends in fashion. Stay stylish, stay trendy.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 pr-5  ">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>           <ul className="flex space-x-4 footer-social-links">
<li>
Home
</li>
<li>
About
</li>
<li>
Contact
</li>

            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4 footer-social-links">
<li>
Facebook
</li>
<li>
Instagram
</li>

            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none"
                placeholder="Your email"
              />
              <button className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
