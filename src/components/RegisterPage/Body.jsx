import React from 'react';
import RegisterForm from './RegisterForm';
import useRegister from './useRegister';
import images from '../assets/images';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = useRegister();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <img
          className="mx-auto h-12 w-auto"
          src={images[0]}
          alt="Logo"
          id="Body_3"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" id="Body_5">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" id="Body_6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded" id="Body_7">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded" id="Body_8">
              {success}
            </div>
          )}
          <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Body;
