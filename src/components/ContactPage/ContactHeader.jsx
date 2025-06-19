import React from 'react';
import images from '../assets/images';

const ContactHeader = () => {
  return (
    <div id="ContactHeader_1" className="text-center">
      <img
        id="ContactHeader_2"
        className="mx-auto h-12 w-auto"
        src={images[0]}
        alt="Company logo"
      />
      <h2 id="ContactHeader_3" className="mt-6 text-3xl font-extrabold text-gray-900">
        Get in Touch
      </h2>
      <p id="ContactHeader_4" className="mt-2 text-sm text-gray-600">
        Have a question or want to learn more? We'd love to hear from you.
      </p>
    </div>
  );
};

export default ContactHeader;