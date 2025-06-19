import React from 'react';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">We're more than just a real estate company</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Expert Guidance',
              description: 'Our team of experienced professionals will guide you through every step',
              icon: '🏆'
            },
            {
              title: 'Exclusive Listings',
              description: 'Access to premium properties not available anywhere else',
              icon: '🏠'
            },
            {
              title: 'Personal Touch',
              description: 'Tailored service that puts your needs first',
              icon: '👥'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;