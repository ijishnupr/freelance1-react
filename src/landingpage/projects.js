import React from 'react';
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots,faLightbulb,faTv,faPeopleGroup, faRankingStar, faHandshake, faFilter, faFlagCheckered, faHandHoldingDollar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from 'react-awesome-reveal';
function Project({ name, value, link }) {
  

  return (
    <Zoom>

    <div className='col service-box' >
      <div className='iconsize'>
      <FontAwesomeIcon icon={value} size='2xl' />
      </div>
      <div className='proj-head'>{name}</div>
    
    </div>
    </Zoom>
  );
}

function ProjectList() {
  // Example project data
  const projects = [
    {
      name: 'Amplify Reach',
      value:faArrowUpRightDots
    },
    {
      name: 'Brand Awareness',
      value:faLightbulb
    },
    {
      name: 'Drive Traffic',
      value:faTv
    },
    {
      name: 'Look Authentic',
      value:faRankingStar
    },
    {
      name: 'Engagement',
      value:faPeopleGroup
    },
    {
      name: 'Trust',
      value:faHandshake
    },
    
    {
      name: 'Leads',
      value:faFilter
    },
    
    {
      name: 'Competitive',
      value:faFlagCheckered
    },
    
    {
      name: 'Rol',
      value:faHandHoldingDollar
    },
    
    {
      name: 'Content',
      value:faVideo
    },
    
    
    // Add more project objects as needed
  ];

  return (
    <div className='row'>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          value={project.value}
          
        />
      ))}
    </div>
  );
}

export default ProjectList;
