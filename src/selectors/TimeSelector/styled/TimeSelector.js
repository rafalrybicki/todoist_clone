import styled from 'styled-components';

const TimeSelector = styled.div`
   position: relative;
   height: 41px;
   font-weight: bold;
   padding: 0 8px 0 5px;
   display: flex;
   align-items: center;
   justify-content: center;

   .time-btn{
      font-weight: 13px;
      height: 26px;
      padding: 4px;
      color: red;
      font-weight: 600;
      border: ${props => props.isDateTime ? '1px solid #ddd' : '1px solid transparent'};
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
   }

   .close-btn {
      padding-top: 2px;
      border: 1px solid #ddd;
      border-left: none;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
   }

   .selectors {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 20px 0 41px;
      background-color: white;
      display: flex;
      justify-content: center;
      width: 100%;
      z-index: ${props => props.openSelector ? '1' : '-1'};
      opacity: ${props => props.openSelector ? '1' : '0'};
      transition: opacity .1s;

      .separator {
         display: flex;
         align-items: center;
         margin: 0 12px;
      }

      .save-btn, .cancel-btn  {
         position: absolute;
         bottom: 0;
         height: 41px;
         padding: 0 10px;
      }

      .save-btn {
         left: 35px;
         background-color: white;
         color: red;
         font-weight: bold;
      }

      .cancel-btn {
         right: 35px;
      }
   }
`

export default TimeSelector