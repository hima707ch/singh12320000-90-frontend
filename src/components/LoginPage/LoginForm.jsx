import React from 'react';
import useLogin from './useLogin';

const LoginForm = () => {
  const { formData, errors, isLoading, handleChange, handleSubmit } = useLogin();

  return (
    <form id="LoginForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div id="LoginForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_3">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="LoginForm_4"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p id="LoginForm_5" className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div id="LoginForm_6">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="LoginForm_7"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p id="LoginForm_8" className="mt-2 text-sm text-red-600">{errors.password}</p>}
        </div>
      </div>

      <div id="LoginForm_9" className="flex items-center justify-between">
        <div id="LoginForm_10" className="flex items-center">
          <input
            id="LoginForm_11"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div id="LoginForm_12" className="text-sm">
          <a href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div id="LoginForm_13">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;