import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to revolutionize the fashion industry by providing sustainable, high-quality, and fashionable clothing for all. We aim to empower individuals to express their unique style while promoting environmental responsibility.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            We envision a world where fashion is both stylish and sustainable. Our goal is to become a leading brand in eco-friendly fashion, setting new standards for quality and innovation in the industry.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="team-member-1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-medium text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="team-member-2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-medium text-gray-800">John Smith</h3>
              <p className="text-gray-600">Chief Designer</p>
            </div>
            <div className="text-center">
              <img src="team-member-3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-medium text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
