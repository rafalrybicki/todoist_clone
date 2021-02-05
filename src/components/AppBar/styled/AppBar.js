import styled from 'styled-components/macro';

const AppBar = styled.div`
   position: absolute;
   z-index: ${props => props.zIndex};
   top: 0;
   left: 0;
   width: 100%;
   padding: 0 15px 0 7px;
   height: 43px;
   background-color: #DB4C3F;
   display: flex;
   align-items: center;

   button {
      height: 32px;
      min-width: 32px;
      z-index: 10000
   }

   button:nth-of-type(2) {
      margin-left: auto
   }

   @media (min-width: 750px) {
      padding: 0 40px;
   }
`

export default AppBar