import styled from 'styled-components';

const EntrancePage = styled.div`
   position: absolute;
   top: 0;
   width: 100vw;
   height: 100vh;
   background-color: white;
   padding: 40px 10px 0;
   font-size: 13px;
   transition: height .05s;
   overflow-y: auto;

   h1 {
      margin-bottom: 27px;
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
         margin-top: 15px;
         background-color: red;
         color: white;
         font-weight: bold;
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
      margin: 20px auto 0;
      color: #777777;
   }

   label {
      display: block;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 15px;
   }

   input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      height: 38px;
      border: solid 1px #ddd;
      border-radius: 3px;
      padding: 0 10px;
   }

   > p {
      padding-top: 10px;
      text-align: center;

      a {
         color: red;
         
         &:hover {
            text-decoration: underline;
         }
      }
   }

   .error {
      color: red;
      display: block;
      width: fit-content;
      margin: 15px auto 0;
      text-align: center;
   }
   
   @media (min-width: 450px) {
      top: 40px;
      left: 50%;
      margin-left: -225px;
      max-width: 450px;
      height: fit-content;
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