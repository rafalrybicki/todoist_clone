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
   padding: 0 15px 0 7px;
   height: 43px;
   background-color: #DB4C3F;
   display: flex;
   align-items: center;

   button {
      margin-right: 5px;
      height: 32px;
      min-width: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   button:nth-of-type(3) {
      margin-left: auto
   }

   .button:hover {
      background-color: #e27065;
      border-radius: 3px;
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
      margin-left: 5px;
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
