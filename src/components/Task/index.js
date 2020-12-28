import React from 'react';
import styled from 'styled-components';

import IconBtn from '../shared/IconBtn';
import { GripVertical } from 'react-bootstrap-icons';
import Actions from './Actions';
import Checkbox from './Checkbox';
import Date from './Date';

const StyledTask = styled.li`
   position: relative;
   width: 100%;
   margin-left: -30px;
   min-height: 40px;
   padding: 8px 0 8px 57px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .grip {
      cursor: move;
      position: absolute;
      top: 5px;
      left: -5px;
      visibility: hidden
   }

   .content {
      width: 100%;
      height: 24px
   }

   .date {
      height: 16px
   }

   &:hover {
      .grip {
         visibility: visible;
      }

      .actions {
         visibility: visible;
      }
   }

   &::before {
      position: absolute;
      bottom: -1px;
      left: 0;
      display: block;
      z-index: 1000;
      background-color: white;
      content: '';
      height: 1px;
      width: 30px;
   }
`

function Task({ priority }) {
   return (
      <StyledTask>
         <IconBtn hoverColor="#eee" width="24px" cssClass="grip">
            <GripVertical size="20"/>
         </IconBtn>
         <Checkbox priority={priority} />
         <span className="content">ask</span>
         <Date />
         <Actions className="actions" />
      </StyledTask>
   )
}

export default Task
