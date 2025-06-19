import React from 'react';
import LoginForm from './LoginForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div id="Body_3" className="text-center">
          <img id="Body_4" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p id="Body_6" className="mt-2 text-sm text-gray-600">Or
            <a id="Body_7" href="/register" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">create a new account</a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Body;