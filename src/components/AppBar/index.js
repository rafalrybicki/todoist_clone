import React from 'react';
import styled from 'styled-components';

import BellBtn from './BellBtn';
import GraphBtn from './GraphBtn';
import HomeBtn from './HomeBtn';
import InfoBtn from './InfoBtn';
import MenuBtn from './MenuBtn';
import PlusBtn from './PlusBtn';
import SearchInput from './SearchInput';

const StyledAppBar = styled.div`
   position: absolute;
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
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
   }

   button:nth-of-type(3) {
      margin-left: auto
   }

   button:nth-of-type(n+3) {
      margin-right: 7px
   }

   button:hover {
      background-color: #e27065;
   }

   .circle {
      background-color: #0197A6;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content:center;
      align-items: center;
      color: white;
      font-weight: 500;
      margin-left: 3px;
   }

   @media (min-width: 750px) {
      padding: 0 40px;
   }
`

function AppBar() {
   return (
      <StyledAppBar>
         <MenuBtn />
         <HomeBtn />
         <SearchInput />
         <PlusBtn />
         <GraphBtn />
         <InfoBtn />
         <BellBtn />
         <span className="circle">R</span>
      </StyledAppBar>
   )
}

export default AppBar
