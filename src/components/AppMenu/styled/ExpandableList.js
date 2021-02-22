import styled from 'styled-components';

const ExpandableList = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
   height: ${props => props.open ? 'auto' : '34px'};
   overflow: ${props => props.open ? 'visible' : 'hidden'};
   
   > button {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      display: flex;
      align-items: center;
      font-size: 14px;
      height: 34px;
      width: 100%;
      margin-left: 5px;

      .chevron-icon {
         margin-left: 6px;
         margin-right: 13.5px;
      }
   }

   ul {
      width: 100%;

      > button {
         margin: 10px 0 20px 10px;

         span {
            margin-right: 12px
         }
      }
   }
`

export default ExpandableList