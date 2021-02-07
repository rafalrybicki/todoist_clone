import React from 'react';
import PropTypes from 'prop-types';

import StyledViewSelector from './styled/ViewSelector';
import { Circle } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';

function VievSelector({ view, setView }) {
   return (
      <StyledViewSelector className="view">
      <p>View</p>
         <div
            onClick={() => setView("list")}
            className={view === "list" ? "column active" : "column"}
         >
            <img
               src={process.env.PUBLIC_URL + "/img/project_list.svg"}
               alt="project list"
            />
            {view === "list" ? 
               <CheckCircleFill color="red" />
            :
               <Circle color="#828282" /> 
            }
            <span>List</span>
         </div>
         <div
            onClick={() => setView("board")}
            className={view === "board" ? "column active" : "column"}
         >
            <img
               src={process.env.PUBLIC_URL + "/img/project_board.svg"}
               alt="project list"
               className="board"
            />
            {view === "board" ? 
               <CheckCircleFill color="red" />
            :
               <Circle color="#828282" /> 
            }
            <span>Board</span>
         </div>
      </StyledViewSelector>
   )
}

VievSelector.propTypes = {
   view: PropTypes.string.isRequired,
   setView: PropTypes.func.isRequired
}

export default VievSelector
