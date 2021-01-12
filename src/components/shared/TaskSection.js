import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Grip from './Grip';
import IconBtn from './buttons/IconBtn';
import ChevronIcon from './icons/ChevronIcon';
import { ThreeDots } from 'react-bootstrap-icons';

const StyledTaskSection = styled.div`
   position: relative;
   padding: 20px 0 10px;
   width: 100%;

   h2, .quantity {
      font-size: 14px;
      margin-right: 5px;
      display: inline;
   }

   > ul {
      margin-top: 5px;
      padding-top: 5px;
      border-top: 1px solid #f0f0f0;
      width: 100%;
      height: ${props => props.showList ? 'auto' : '0'};
      transition: height .2s;
      overflow: hidden;
   }

   > .grip {
      top: 18px;
      left: -57px;
   }

   > .chevron {
      position: absolute !important;
      top: 18px;
      left: -30px;

      svg {
         color: grey;
      }
   }

   > .chevron:hover {
      svg {
         color: #202020
      }
   }

   &:hover {
      > .grip {
         color: grey;
      }
   }

   .more {
      position: absolute;
      top: 18px;
      right: 0
   }
`

function TaskSection({ name = 'section', children }) {
   const [showList, toggleSectionList] = useState(true);

   return (
      <StyledTaskSection showList={showList}>
         <Grip />
         <IconBtn hoverColor="#eee" width="28px" onClick={() => toggleSectionList(!showList)} cssClass="chevron">
            <ChevronIcon rotate={showList.toString()} />
         </IconBtn>

         <h2>{name}</h2>
         <span className="quantity">
            {children.length > 0 && children.length}
         </span>
         <IconBtn hoverColor="#eee" width="28px" tooltip="More section actions" tooltipWidth="112px" cssClass="more">
            <ThreeDots size="20"/>
         </IconBtn>
         <ul>
            {children}
         </ul>
      </StyledTaskSection>
   )
}

export default TaskSection
