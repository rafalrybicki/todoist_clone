import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Circle } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';

const StyledViewSelector = styled.div`
   padding-top: 10px;
   margin-bottom: 20px;
   display: flex;
   flex-direction: row; 
   justify-content: space-between;
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

function VievSelectror() {
   const [viewType, setViewType] = useState('list');

   return (
      <>
         <p>View</p>
         <StyledViewSelector className="view">
            <StyledColum checked={viewType === 'list'} onClick={() => setViewType('list')} >
               <img src={process.env.PUBLIC_URL + '/img/project_list.svg'} alt="project list"/>
               {viewType === 'list' ? <CheckCircleFill color='red' /> :  <Circle color='#828282' /> }
               <span>List</span>
               {/* <CheckCircleFill color='#dcdcdc' /> */}
            </StyledColum>
            <StyledColum checked={viewType === 'board'} onClick={() => setViewType('board')}>
               <img src={process.env.PUBLIC_URL + '/img/project_board.svg'} alt="project list" className="board" />
               {viewType === 'board' ? <CheckCircleFill color='red' /> :  <Circle color='#828282' /> }
               <span>Board</span>
            </StyledColum>
         </StyledViewSelector>
      </>
   )
}

export default VievSelectror
