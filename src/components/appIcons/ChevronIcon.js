import React from 'react';
import styled from 'styled-components/macro';

import { ChevronRight } from 'react-bootstrap-icons';

const StyledChevronIcon = styled(ChevronRight)`
   height: 16px;
   width: 16px;
   transition: transform 0.2s;
   transform: ${props => props.rotate === 'true' ? 'rotate(90deg)' : 'rotate(0)'};
   z-index: 10;
`

function ChevronIcon({ rotate }) {
   return (
      <StyledChevronIcon
         rotate={rotate.toString()}
         className="chevron-icon"
      />
   )
}

export default ChevronIcon