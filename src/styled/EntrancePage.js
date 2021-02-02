import styled from 'styled-components';

const EntrancePage = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   background-color: white;
   padding: 10px;
   margin-top: -40px;
   font-size: 13px;
   transition: height .05s;
   overflow-y: auto;

   h1 {
      margin: 8px 0 27px;
      font-size: 26px;
   }

   button {
      height: 38px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #ddd;
      border-radius: 3px;
      margin-bottom: 10px;
      transition: all .2s;

      &[type="submit"] {
         background-color: red;
         color: white;
         font-weight: bold;
         margin: 15px 0;
      }

      &:hover {
         border-color: #202020;
         background-color: #eee;
      }

      img {
         max-height: 16px;
         max-width: 16px;
         margin-right: 8px;
      }
   }

   .separator {
      position: relative;
      z-index: 10;
      display: block;
      width: 40px;
      text-align: center;
      background-color: white;
      margin: 20px auto 10px;
      color: #777777;
   }

   &:after {
      content: '';
      position: absolute;
      top: 174px;
      left: 10px;
      height: 1px;
      width: calc(100% - 20px);
      background-color: #ddd;
   }

   label {
      display: block;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 15px;
      
      &.checkbox-label {
         font-weight: normal;
         position: relative;
         top: -1px;
         display: inline-block;
         margin: 0 0 15px 5px;
      }
   }

   input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      height: 38px;
      border: solid 1px #ddd;
      border-radius: 3px;
   }

   > p {
      border-top: 1px solid #eee;
      padding-top: 20px;
      text-align: center;

      a {
         color: red;
         
         &:hover {
            text-decoration: underline;
         }
      }
   }
   
   @media (min-width: 450px) {
      max-width: 452px;
      height: fit-content;
      margin: 0 auto;
      padding: 25px;
      border: solid 1px #dbdbdb;
      border-radius: 8px;

      &:after {
         top: 189px;
         left: 25px;
         width: 402px;
      }
   }
`;

export default EntrancePage