import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/projects/groupproject3.png';

function Project(props) {
    const currentCategory = {
        name: "Group Projects", description: "Projects I have done in a group",
      };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
          <img src={photo} alt="Group Project 3" className="img-thumbnail mx-1"/>
      </div>
    </section>
  );
}
export default Project;