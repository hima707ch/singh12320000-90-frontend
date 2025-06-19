import React from 'react';
import images from '../assets/images';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div id="ProjectModal_1" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div id="ProjectModal_2" className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div id="ProjectModal_3" className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="space-y-4">
            <p className="text-gray-600">{project.description}</p>
            <div>
              <h3 className="font-semibold text-gray-800">Technology Stack:</h3>
              <p className="text-gray-600">{project.technology}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Project Type:</h3>
              <p className="text-gray-600">{project.type}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;