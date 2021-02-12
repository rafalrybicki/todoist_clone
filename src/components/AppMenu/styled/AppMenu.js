import styled from 'styled-components';

const AppMenu = styled.div`
   z-index: 100;
   position: absolute;
   top: 0;
   margin-top: 43px;
   height: calc(100% - 43px);
   flex-shrink: 0;
   font-size: 14px;
   transform: ${props => props.isOpen ? 'translateX(0)' : 'translate(-291px)'};
   transition: 0.2s transform;

   nav {
      padding: 20px 0;
      height: 100%;
      background-color: #fafafa;
   }

   .view-list, .expandable-list {
      width: 291px;
      height: auto;
      overflow: visible;
      padding-left: 37px;
      padding-right: 10px;
   }

   @media (min-width: 750px) {
      position: static;
      height: 100%;
      margin-top: 0;

   }
`

export default AppMenu