import React from 'react';

const CallToAction = ({ onContact }) => {
  return (
    <section id="CTA_1" className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied homeowners who found their perfect property with us.
        </p>
        <button
          onClick={onContact}
          className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;