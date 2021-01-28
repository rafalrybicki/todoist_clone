import React from 'react';
import PropTypes from 'prop-types';

import Popover from '../../Popover';
import IconBtn from '../../buttons/IconBtn';
import { ArrowDownUp } from 'react-bootstrap-icons';
import SortList from './SortList';

function SortSelector({ sortType, projectId }) {
   return (
      <Popover 
         activator={
            <IconBtn tooltip="Sort" tooltipWidth="36px">
               <ArrowDownUp size="16"/>
            </IconBtn>
         }
         content={
            <SortList
               sortType={sortType}
               projectId={projectId}
            />
         }
      />
   )
}

SortSelector.propTypes = {
   sorttype: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired
}

export default SortSelector
