import React from 'react';
import images from '../assets/images';

const ProjectGrid = ({ projects, onProjectClick }) => {
  return (
    <div id="ProjectGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          id={`ProjectGrid_${index + 2}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onProjectClick(project)}
        >
          <img
            src={images[index % images.length]}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.technology}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;