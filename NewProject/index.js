import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ProjectHeader from './ProjectHeader';
import DropdownSelect from './DropdownSelect';
import ToggleSwitch from './ToggleSwitch'
import ViewSelectror from './ViewSelectror';
import ProjectFooter from './ProjectFooter';

const StyledNewProject = styled.form`
   position: absolute;
   display: flex;
   flex-direction: column;
   top: 80px;
   left: 50%;
   transform: translateX(-50%);
   height: 592px;
   width: 400px;
   border-radius: 5px;
   z-index: 1000;
   overflow: hidden;
   border: 1px solid #ddd;

   > * {
      padding: 0 24px;
   }

   section {
      flex-grow: 1;
      padding: 20px 24px;
      border-bottom: 1px solid #ddd;

      label, p {
         display: block;
         margin-bottom: 5px;
         font-size: 14px;
         font-weight: 700
      }

      input[type="text"] {
         width: 100%;
         margin-bottom: 20px;
         border: 1px solid #ddd;
         border-radius: 5px;
         outline: none;
         transition: border .3s;
         height: 31px;
         padding: 5px;
         font-size: 14px;
      }

      input[type="text"]:focus {
         border: 1px solid black;
      }

      .description {
         font-size: 12px;
         color: grey;
      }

      a {
         color: #db4c3f;
      }
   }
`

function NewProject() {
   const [name, setName] = useState('');
   
   return (
      <StyledNewProject>
         <ProjectHeader />
         <section>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <DropdownSelect />
            <ToggleSwitch />
            <ViewSelectror />
            <span className="description">
               View is synced between teammates in shared projects. <a href="https://todoist.com/help/articles/visualize-your-workflow-with-board-view" target="_blank" rel="noreferrer">Learn more</a>.
            </span>
         </section>
         <ProjectFooter />
      </StyledNewProject>
   )
}

export default NewProject
