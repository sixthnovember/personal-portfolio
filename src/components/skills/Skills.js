import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import data from '../../data/skills.json';
import './Skills.css';

const Skills = () => {
  const [skills] = useState(data.skills);
  const getSkillClass = (level) => {
    if (level > 75) return 'skill-bar-fill-high';
    if (level > 50) return 'skill-bar-fill-medium';
    return 'skill-bar-fill-low';
  };
  return (
    <div className="skills">
      <h1>Skills</h1>
      <Accordion defaultActiveKey="0">
        {Object.keys(skills).map((category, index) => (
          <Accordion.Item eventKey={index.toString()} key={category} className="accordion-item-fixed">
            <Accordion.Header><h4>{category}</h4></Accordion.Header>
            <Accordion.Body>
              <ul>
                {Object.keys(skills[category]).map(skill => (
                  <li key={skill} className="skill-container">
                    <label className="skill-name">{skill}</label>
                    <ProgressBar done={skills[category][skill]} skillClass={getSkillClass(skills[category][skill])} />
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

const ProgressBar = ({ done, skillClass }) => {
  const [style, setStyle] = useState({ width: '0%', opacity: 0 });
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };
      setStyle(newStyle);
    }, 200);
  }, [done]);
  return (
    <div className="progress">
      <div className={`progress-done ${skillClass}`} style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Skills;