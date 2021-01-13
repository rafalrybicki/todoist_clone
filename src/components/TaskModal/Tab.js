import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledTab = styled.button`
   flex-grow: 1;
   font-family: Arial, Helvetica, sans-serif;
   height: 32px;
   border: 0;
   border-radius: 0;
   color: ${props => props.isActive ? '#202020' : 'grey'};
   border-bottom: ${props => props.isActive ? '1px solid #202020' : '1px solid #e0e0e0'};
   font-weight: ${props => props.isActive ? 'bold' : 'normal'};
`

function Tab({ value, isActive, setActiveTab, children }) {
   return (
      <StyledTab
         isActive={isActive}
         onClick={() => setActiveTab(value)}
      >
         {children}
      </StyledTab>
   )
}

Tab.propTypes = {
   value: PropTypes.string.isRequired,
   isActive: PropTypes.bool.isRequired,
   setActiveTab: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default Tab
