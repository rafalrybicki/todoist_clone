import styled from 'styled-components';

const SearchInput = styled.div`
   position: relative;
   margin-left: 7px;
   height: 29px;
   background-color: ${props => props.focus ? 'white' : '#E27065'};
   border-radius: 3px;
   transition: background-color .2s;

   &:hover {
      background-color: white;
   }

   input {
      position: relative;
      padding-left: 30px;
      height: 100%;
      border: none;
      font-size: 15px;
      width: 45px;
      background-color: transparent;
      z-index: 10;
      transition: width .2s;
   }

   input::-webkit-input-placeholder {
      color: transparent
   }

   input:focus {
      width: 240px
   }

   input:focus::-webkit-input-placeholder, input:hover::-webkit-input-placeholder {
      color: black;
   }

   .search-icon {
      position: absolute;
      top: 7px;
      left: 7px;
      color: white;
   }

   .search-icon :hover, input:focus + .search-icon , input:hover + .search-icon  {
      color: black;
   }

   @media (min-width: 750px) {
      input {
         width: 180px;
      }

      input:focus {
         width: 340px;
      }

      input::-webkit-input-placeholder {
         color: white
      }
   }
`

export default SearchInput