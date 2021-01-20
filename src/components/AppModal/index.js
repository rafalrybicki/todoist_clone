import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectEditor from '../common/ProjectEditor';
import Overlay from '../common/Overlay';

const StyledAppModal = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   z-index: ${props => props.open ? '1000' : '-1'};
`

function AppModal() {
   const [open, setOpen] = useState(true);

   return (
      <StyledAppModal open={open}>
         <ProjectEditor />
         <Overlay
            show={open}
            hide={() => setOpen(false)}
         />
      </StyledAppModal>
   )
}

export default AppModal
