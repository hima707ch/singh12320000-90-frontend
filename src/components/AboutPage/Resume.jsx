import React from 'react';

const Resume = ({ resumeLink }) => {
  return (
    <div className="bg-white py-16" id="Resume_1">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Download Resume</h2>
        <a
          href={resumeLink}
          download
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          id="Resume_2"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;