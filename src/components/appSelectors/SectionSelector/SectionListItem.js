import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import InboxIcon from 'icons/InboxIcon';
import { ViewList, CircleFill } from 'react-bootstrap-icons';

const StyledSectionListItem = styled.li`
   &.project svg {
      top: 12px;
      left: 18.5px;
   }

   &.project svg.inbox-icon {
      top: 10px;
      left: 17px;
   }

   &.section {
      padding-left: 45px;

      svg {
         left: 18px;
         top: 11px;
      }
   }
`

function SectionListItem({ active, name, icon, color, onClick}) {
   const getIcon = (text, color) => {
      if (text === 'section') {
         return <ViewList size={13} />
      } else if (text === 'project') {
         return <CircleFill size={12} color={color} />
      } 

      return <InboxIcon size={15} />
   }

   let className = icon === 'section' ? "section" : "project";

   if (active) {
      className += " active"
   }

   return (
      <StyledSectionListItem
         onClick={onClick}
         className={className}
      >
         {getIcon(icon, color)}
         {name}
      </StyledSectionListItem>
   )
}

SectionListItem.propTypes = {
   active: PropTypes.bool.isRequired,
   name: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   color: PropTypes.string,
   onClick: PropTypes.func.isRequired
}

export default SectionListItem
