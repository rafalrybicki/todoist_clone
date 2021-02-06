import styled from 'styled-components';

const AppMenu = styled.div`
   position: absolute;
   top: 0;
   padding: 63px 0 30px;
   background-color: #FAFAFA;
   height: 100%;
   width: ${props => props.isOpen ? '291px' : '0'};
   flex-shrink: 0;
   font-size: 14px;
   overflow-y: auto;
   overflow-x: hidden;
   transition: 0.2s width;

   > * {
      width: 291px;
      padding-left: 37px;
      padding-right: 10px;
   }

   @media (min-width: 750px) {
      position: static;
      padding: 30px 0 30px;
   }
`

export default AppMenu