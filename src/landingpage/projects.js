import React from 'react';
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots,faLightbulb,faTv,faPeopleGroup, faRankingStar, faHandshake, faFilter, faFlagCheckered, faHandHoldingDollar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from 'react-awesome-reveal';
function Project({ name, value, para }) {
  

  return (
    <Zoom>

    <div className='col service-box' >
      <div className='iconsize'>
      <FontAwesomeIcon icon={value} size='2xl' />
      </div>
      <div className='proj-head'>{name}</div>
      <p className='small' >{para}</p>
    
    </div>
    </Zoom>
  );
}

function ProjectList() {
  // Example project data
  const projects = [
    {
      name: 'Amplify Reach',
      value:faArrowUpRightDots,
      para:"Amplify your Brand's Reach"
    },
    {
      name: 'Brand Awareness',
      value:faLightbulb,
      para:"Boost Brand Awareness for your Brand"
    },
    {
      name: 'Drive Traffic',
      value:faTv,
      para:"Drive Targetted Traffic to your website/Store"
    },
    {
      name: 'Look Authentic',
      value:faRankingStar,
      para:"Authentic Social Proof for your Brand"
    },
    {
      name: 'Engagement',
      value:faPeopleGroup,
      para:"Increase Customer Engagement"
    },
    {
      name: 'Trust',
      value:faHandshake,
      para:"Build Trust & Credibility using Influencer Credentials"
    },
    
    {
      name: 'Leads',
      value:faFilter,
      para:"Generate High Quality Leads"
    },
    
    {
      name: 'Competitive',
      value:faFlagCheckered,
      para:"Gain Competitive Advantage leveraging Influencers' brand"
    },
    
    {
      name: 'Rol',
      value:faHandHoldingDollar,
      para:"maximize RoI with focused targetting"
    },
    
    {
      name: 'Content',
      value:faVideo,
      para:"Engaging Content for your Target Audience"
    },
    
    
    // Add more project objects as needed
  ];

  return (<><hr></hr>
      <h1 className='heading'>How Influencer Marketing can help your Brand</h1>
    <div className='row px-5' >
      
      
      {projects.map((project, index) => (
        <Project
        key={index}
        name={project.name}
        value={project.value}
        para={project.para}
        
        />
        ))}
        
    </div>
        </>
  );
}

export default ProjectList;
