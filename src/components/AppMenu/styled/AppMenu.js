import styled from 'styled-components';

const AppMenu = styled.div`
   z-index: 100;
   position: absolute;
   top: 0;
   padding: 10px 0 30px;
   margin-top: 43px;
   background-color: #FAFAFA;
   height: calc(100% - 43px);
   width: ${props => props.isOpen ? '291px' : '0'};
   flex-shrink: 0;
   font-size: 14px;
   overflow-y: auto;
   overflow-x: hidden;
   transition: 0.2s width;

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
      padding-top: 30px;
   }
`

export default AppMenu