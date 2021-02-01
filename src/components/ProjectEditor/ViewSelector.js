import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Circle } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';

const StyledViewSelector = styled.div`
   position: relative;
   display: flex;
   flex-direction: row; 
   justify-content: space-between;
   padding-top: 20px;

   p {
      position: absolute;
      top: -5px;
   }
`

const StyledColum = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   width: 162px;
   height: 154px;
   align-items: strech;
   cursor: pointer;

   img {
      width: 100%;
      height: 122px;
      margin-bottom: 15px;
      border-width: 1px;
      border-style: solid;
      border-color: ${props => props.checked ? '#ff7066' : '#ddd'};
      border-radius: 5px;
   }

   &:hover {
      img {
         border-color: #ff7066
      }
   }

   img.board {
      padding: 4px 0 0 4px;
   }

   svg {
      margin: 2px 10px 0 0 ;
   }
`

function VievSelector({ view, setView }) {
   return (
      <StyledViewSelector className="view">
      <p>View</p>
         <StyledColum
            checked={view === 'list'}
            onClick={() => setView('list')}
         >
            <img
               src={process.env.PUBLIC_URL + '/img/project_list.svg'}
               alt="project list"
            />
            {view === 'list' && <CheckCircleFill color='red' />}
            {view !== 'list' && <Circle color='#828282' /> }
            <span>List</span>
         </StyledColum>
         <StyledColum
            checked={view === 'board'}
            onClick={() => setView('board')}
         >
            <img
               src={process.env.PUBLIC_URL + '/img/project_board.svg'}
               alt="project list"
               className="board"
            />
            {view === 'board' && <CheckCircleFill color='red' />}
            {view !== 'board' && <Circle color='#828282' /> }
            <span>Board</span>
         </StyledColum>
      </StyledViewSelector>
   )
}

VievSelector.propTypes = {
   view: PropTypes.string.isRequired,
   setView: PropTypes.func.isRequired
}

export default VievSelector
