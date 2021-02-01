import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../redux/actions';

import ProjectEditor from '../ProjectEditor';
import Overlay from '../Overlay';

const StyledAppModal = styled.div`
   position: fixed;
   top: 0;
   height: 100vh;
   width: 100vw;
   z-index: ${props => props.show ? '101' : '-1'};
`

function AppModal() {
   const dispatch = useDispatch();
   const componentName = useSelector(state => state.modal);

   const closeModal = () => {
      dispatch(hideModal())
   }

   return (
      <StyledAppModal show={componentName}>
         {componentName === 'project' &&
            <ProjectEditor close={closeModal} />
         }
         <Overlay
            show={componentName}
            hide={(closeModal)}
         />
      </StyledAppModal>
   )
}

export default AppModal
