import React, { useState} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

import { Plus } from 'react-bootstrap-icons';
import ChevronIcon from 'icons/ChevronIcon';

const StyledExpandableList = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
   height: ${props => props.open ? 'auto' : '34px'};
   overflow-y: hidden;
   
   > button:nth-of-type(1) {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      height: 34px;
      width: 211px;
      margin-left: 5px
   }

   > button:nth-of-type(2) {
      display: flex;
      align-items: center;
      visibility: hidden;
   }

   > &:hover button:nth-of-type(2) {
      visibility: visible;
   }

   .chevron-icon {
      margin-left: 6px;
      margin-right: 14px;
   }

   ul {
      width: 100%;
   }

   ul button {
      margin: 10px 0 20px 10px;
   }

   ul button span {
      margin-right: 12px
   }
`

function ExpandableList({ text, children }) {
   const [open, setOpen] = useState(true);

   return (
      <StyledExpandableList open={open}>
         <button onClick={() => setOpen(!open)}>
            <ChevronIcon rotate={open.toString()} />
            {text}
         </button>
         <button>
            <Plus size={24} />
         </button>
         <ul>{children}</ul>
      </StyledExpandableList>
   )
}

ExpandableList.propTypes = {
   text: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}

export default ExpandableList
