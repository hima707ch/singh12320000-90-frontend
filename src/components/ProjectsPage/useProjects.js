import { useState, useEffect } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    technology: 'All',
    type: 'All'
  });

  useEffect(() => {
    fetchProjects();
  }, [filters]);

  const fetchProjects = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (filters.technology !== 'All') queryParams.append('technology', filters.technology);
      if (filters.type !== 'All') queryParams.append('type', filters.type);

      const response = await fetch(`/api/properties/search?${queryParams}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    projects,
    selectedProject,
    isModalOpen,
    filters,
    handleFilterChange,
    handleProjectClick,
    closeModal
  };
};

export default useProjects;