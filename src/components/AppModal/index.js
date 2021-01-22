import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectEditor from '../common/ProjectEditor';
import Overlay from '../common/Overlay';

const StyledAppModal = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   z-index: ${props => props.open ? '101' : '-1'};
`

function AppModal() {
   const [open, setOpen] = useState(true);

   const closeModal = () => {
      setOpen(false);
   }
   return (
      <StyledAppModal open={open}>
         <ProjectEditor close={closeModal} />
         <Overlay
            show={open}
            hide={closeModal}
         />
      </StyledAppModal>
   )
}

export default AppModal
