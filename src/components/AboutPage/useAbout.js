import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [skillsData, setSkillsData] = useState([
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 }
      ]
    }
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      period: '2020 - Present',
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading frontend development team, implementing modern React applications.'
    },
    {
      period: '2018 - 2020',
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      description: 'Developed full-stack applications using MERN stack.'
    },
    {
      period: '2016 - 2018',
      role: 'Junior Developer',
      company: 'StartUp Hub',
      description: 'Worked on various web development projects using JavaScript and PHP.'
    }
  ]);

  const [bioData, setBioData] = useState({
    description: 'Passionate developer with over 5 years of experience in creating innovative web solutions. Specialized in React and modern JavaScript frameworks, with a strong foundation in full-stack development.'
  });

  const [resumeLink, setResumeLink] = useState('/path-to-resume.pdf');

  return {
    skillsData,
    experienceData,
    bioData,
    resumeLink
  };
};