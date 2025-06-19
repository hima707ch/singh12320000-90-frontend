import React from 'react';
import ProjectGrid from './ProjectGrid';
import FilterSection from './FilterSection';
import ProjectModal from './ProjectModal';
import useProjects from './useProjects';

const Body = () => {
  const {
    projects,
    selectedProject,
    isModalOpen,
    filters,
    handleFilterChange,
    handleProjectClick,
    closeModal
  } = useProjects();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Projects</h1>
      <FilterSection
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <ProjectGrid
        projects={projects}
        onProjectClick={handleProjectClick}
      />
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Body;