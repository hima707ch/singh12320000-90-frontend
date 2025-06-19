import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required').min(10, 'Message must be at least 10 characters')
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form id="ContactForm_1" onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
      <div id="ContactForm_2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="ContactForm_3"
          type="text"
          {...formik.getFieldProps('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.name && formik.errors.name && (
          <div id="ContactForm_4" className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div id="ContactForm_5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="ContactForm_6"
          type="email"
          {...formik.getFieldProps('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.email && formik.errors.email && (
          <div id="ContactForm_7" className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div id="ContactForm_8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="ContactForm_9"
          {...formik.getFieldProps('message')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.message && formik.errors.message && (
          <div id="ContactForm_10" className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;