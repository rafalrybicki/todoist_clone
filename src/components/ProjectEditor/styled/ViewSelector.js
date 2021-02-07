import styled from 'styled-components';

const ViewSelector = styled.div`
   position: relative;
   display: flex;
   flex-direction: row; 
   justify-content: space-between;
   padding-top: 20px;

   p {
      position: absolute;
      top: -5px;
   }

   .column {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 162px;
      height: 154px;
      align-items: strech;
      cursor: pointer;

      img {
         width: 100%;
         height: 122px;
         margin-bottom: 15px;
         border-width: 1px;
         border-style: solid;
         border-color: #ddd;
         border-radius: 5px;

         &.board {
            padding: 4px 0 0 4px;
         }
      }

      &.active img {
         border-color: #ff7066;
      }

      &:hover {
         img {
            border-color: #ff7066
         }
      }

      svg {
         margin: 2px 10px 0 0 ;
      }
   }
`

export default ViewSelector