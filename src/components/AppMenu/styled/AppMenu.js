import styled from 'styled-components';

const AppMenu = styled.div`
   z-index: 100;
   position: absolute;
   top: 0;
   margin-top: 43px;
   height: calc(100% - 43px);
   flex-shrink: 0;
   font-size: 14px;
   width: ${props => props.isOpen ? '291px' : '0'};
   transition: 0.2s width;
   overflow: hidden;

   nav {
      padding: 20px 0;
      height: 100%;
      background-color: #fafafa;
   }

   .view-list, .expandable-list {
      width: 291px;
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