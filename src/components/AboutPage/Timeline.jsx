import React from 'react';

const Timeline = ({ experiences }) => {
  return (
    <div className="bg-white py-16" id="Timeline_1">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4" id={`Timeline_${index + 2}`}>
              <div className="md:w-1/4">
                <p className="font-semibold text-gray-600">{exp.period}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;