import styled from 'styled-components';

const Editor = styled.form`
   width: 100%;

   > input {
      display: block;
      width: 100%;
      height: 36px;
      padding: 0 8px;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;

      &:focus {
         border: 1px solid grey;
      }
   }

   > button {
      margin: 10px 10px 10px 0;
   }
`;

export default Editor