import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import InboxIcon from '../../appIcons/InboxIcon';
import { ViewList, CircleFill } from 'react-bootstrap-icons';

const StyledSectionListItem = styled.li`
   &.project svg.inbox-icon {
      top: 9px;
      left: 10px;
   }

   &.project svg {
      top: 12px;
      left: 12px;
   }

   &.section {
      padding-left: 45px;

      svg {
         left: 20px;
         top: 10px;
      }
   }
`

function SectionListItem({ active, name, icon, color, onClick}) {
   const getIcon = (text, color) => {
      if (text === 'section') {
         return <ViewList size={14} />
      } else if (text === 'project') {
         return <CircleFill size={12} color={color} />
      } 

      return <InboxIcon size={16} />
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
