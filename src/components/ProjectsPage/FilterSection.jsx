import React from 'react';

const FilterSection = ({ filters, onFilterChange }) => {
  const technologies = ['All', 'React', 'Vue', 'Angular', 'Node.js'];
  const types = ['All', 'Frontend', 'Backend', 'Full Stack'];

  return (
    <div id="FilterSection_1" className="flex flex-col md:flex-row gap-4 mb-8">
      <div id="FilterSection_2" className="flex-1">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Technology
        </label>
        <select
          id="FilterSection_3"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.technology}
          onChange={(e) => onFilterChange('technology', e.target.value)}
        >
          {technologies.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
      <div id="FilterSection_4" className="flex-1">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project Type
        </label>
        <select
          id="FilterSection_5"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;