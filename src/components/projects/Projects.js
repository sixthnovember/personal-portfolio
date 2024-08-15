import React, { useState } from 'react';
import data from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import Select from 'react-select';
import './Projects.css';

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  
  const tagFrequencyMap = {};
  data.projects.forEach(project => {
    project.tags.forEach(tag => {
      if (tagFrequencyMap[tag]) {
        tagFrequencyMap[tag] += 1;
      } else {
        tagFrequencyMap[tag] = 1;
      }
    });
  });

  const sortedTags = Object.entries(tagFrequencyMap)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);

  const tagOptions = sortedTags.map(tag => ({ value: tag, label: tag }));

  const filteredProjects = data.projects.filter(project =>
    selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag.value))
  );

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="filter-container">
        <Select
          isMulti
          name="tags"
          options={tagOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          onChange={setSelectedTags}
          placeholder="Filter by tags"
        />
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;