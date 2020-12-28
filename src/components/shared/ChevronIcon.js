import React from 'react';
import styled from 'styled-components';

import { ChevronRight } from 'react-bootstrap-icons';

const StyledChevronIcon = styled(ChevronRight)`
   height: 16px;
   width: 16px;
   transition: transform 0.1s;
   transform: ${props => props.rotate ? 'rotate(0)' : 'rotate(90deg)' };
`


function ChevronIcon({ rotate }) {
   return (
      <StyledChevronIcon rotate={rotate} className="chevron-icon" />
   )
}

export default ChevronIcon
