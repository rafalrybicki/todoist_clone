import React from 'react';
import styled from 'styled-components';

import IconBtn from '../shared/IconBtn';
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

   @media (max-width: 749px) {
      z-index: 100;
   }

   @media (min-width: 750px) {
      padding: 0 40px;
   }
`

function AppBar({ toggleMenu }) {
   return (
      <StyledAppBar>
         <IconBtn icon="menu" hoverColor="#e27065" onClick={toggleMenu} />
         <IconBtn icon="home" hoverColor="#e27065" />
         <SearchInput />
         <IconBtn icon="plus" hoverColor="#e27065" />
         <IconBtn icon="graph" hoverColor="#e27065" />
         <IconBtn icon="info" hoverColor="#e27065" />
         <IconBtn icon="bell" hoverColor="#e27065" />
         <span className="circle">R</span>
      </StyledAppBar>
   )
}

export default AppBar
