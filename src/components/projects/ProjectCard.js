import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
          <i className="fab fa-github"></i>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;