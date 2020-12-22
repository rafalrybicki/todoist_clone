import React from 'react';
import styled from 'styled-components';

import Icon from '../shared/Icon';

const StyledSearchInput = styled.div`
   position: relative;
   margin-left: 7px;
   height: 29px;

   input {
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 30px;
      height: 100%;
      background-color: #E27065;
      border: none;
      border-radius: 3px;
      font-size: 15px;
      width: 45px
   }

   input::-webkit-input-placeholder {
      color: transparent
   }

   input:focus, input:hover {
      background-color: white
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

function SearchInput() {
   return (
      <StyledSearchInput>
         <input type="text" placeholder="Find" />
         <Icon icon="search" />
      </StyledSearchInput>
   )
}

export default SearchInput
