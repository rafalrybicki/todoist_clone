import styled from 'styled-components';

const ProjectEditor = styled.div`
   z-index: 1000;
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: ${props => props.isOpen ? 'flex' : 'none'};
   justify-content: center;
   align-items: center;
   transition: all 0.2s;

   form {
      z-index: 101;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100vw;
      max-width: 400px;
      min-height: 520px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: white;
      padding: 0 24px;

      h1 {
         font-size: 16px;
         display: flex;
         align-items: center;
         height: 54px;
         border-bottom: 1px solid #ddd;
         background-color: #fafafa;
         padding: 0 24px;
         margin: 0 -24px 20px;
      }

      label, p {
         display: block;
         margin-bottom: 5px;
         font-size: 14px;
         font-weight: 700
      }

      input[type="text"] {
         width: 100%;
         border: 1px solid #ddd;
         border-radius: 5px;
         outline: none;
         transition: border .3s;
         height: 31px;
         padding: 5px;
         font-size: 14px;
         margin-bottom: 20px;
      }

      input[type="text"]:focus {
         border: 1px solid black;
      }

      button {
         position: absolute;
         bottom: 24px;
         height: 32px;

         &.submit-btn {
            right: 24px;
         }

         &.cancel-btn {
            right: 86px;
         }
      }
   }

   @media (min-width: 500px) {
      align-items: flex-start;

      form {
         margin-top: 90px;
      }
   }
`

export default ProjectEditor