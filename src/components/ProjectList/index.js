import React, { useState } from 'react';
// import Modal from '../Modal';

function ProjectList ({ category }) {
    const [photos] = useState([
        {
          name: 'U.s. National Park Finder',
          category: 'Group Projects',
          description: 'This website allows you to find information on the National Parks around the United States',
        },
        {
          name: 'angelfish',
          category: 'Group Projects',
          description: 'This website gives you information about ocean life and how you can preserve it.',
        },
        {
          name: 'unashamed',
          category: 'Group Projects',
          description: 'This website gives you access to information about mental health with the hopes of helping people create confidence in asking for help',
        },
        {
          name: 'Run Buddy',
          category: 'Solo Projects',
          description: 'This website offers fitness training services',
        },
        {
          name: 'Weather Dashboard',
          category: 'Solo Projects',
          description: 'This website allows you to pick a location and find out the current weather and the 5 day forcast',
        },
        {
          name: 'Workday Scheduler',
          category: 'Solo Projects',
          description: 'This website gives you the ability to schedule your day.',
        }
      ]);
    
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;