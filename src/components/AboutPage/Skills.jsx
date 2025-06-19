import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="py-16 bg-gray-50" id="Skills_1">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md" id={`Skills_${index + 2}`}>
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <div className="space-y-4">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;