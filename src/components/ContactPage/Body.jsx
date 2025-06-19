import React from 'react';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import { useContact } from './useContact';

const Body = () => {
  const { handleSubmit, isLoading, successMessage, errorMessage } = useContact();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-3xl mx-auto">
        <ContactHeader />
        <ContactForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {successMessage && (
          <div id="Body_3" className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div id="Body_4" className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;