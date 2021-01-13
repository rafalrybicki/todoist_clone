import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Tab from './Tab';

const StyledModalTabs = styled.div`
   margin-top: 10px;
   display: flex;
`

function Tabs({ activeTab, setActiveTab }) {
   return (
      <StyledModalTabs>
         <Tab
            value="subtasks"
            isActive={activeTab === "subtasks"}
            setActiveTab={setActiveTab}
         >
            Sub-tasks
         </Tab>
         <Tab
            value="comments"
            isActive={activeTab === "comments"}
            setActiveTab={setActiveTab}
         >
            Comments
         </Tab>
         <Tab
            value="activity"
            isActive={activeTab === "activity"}
            setActiveTab={setActiveTab}
         >
            Activity
         </Tab>
      </StyledModalTabs>
   )
}

Tabs.propTypes = {
   activeTab: PropTypes.string.isRequired, 
   setActiveTab: PropTypes.func.isRequired
}

export default Tabs
