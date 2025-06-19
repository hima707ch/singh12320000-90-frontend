import React from 'react';
import Hero from './Hero';
import Timeline from './Timeline';
import Skills from './Skills';
import Resume from './Resume';
import { useAbout } from './useAbout';

const Body = () => {
  const { skillsData, experienceData, bioData, resumeLink } = useAbout();

  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <Hero bioData={bioData} />
      <Timeline experiences={experienceData} />
      <Skills skills={skillsData} />
      <Resume resumeLink={resumeLink} />
    </div>
  );
};

export default Body;