import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../shared/buttons/IconBtn';
import SearchInput from './SearchInput';

import { Justify, HouseDoor, Plus, GraphUp, QuestionCircle, Bell } from 'react-bootstrap-icons';

const StyledAppBar = styled.div`
   position: absolute;
   z-index: 10;
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
      z-index: 1001;
   }

   @media (min-width: 750px) {
      padding: 0 40px;
   }
`

function AppBar({ toggleMenu }) {
   return (
      <StyledAppBar>
         <IconBtn
            hoverColor="#e27065"
            onClick={toggleMenu}
            tooltip="Open menu"
            tooltipWidth="78px"
         >
            <Justify
               color="white"
               size={22}
            />
         </IconBtn>

         <IconBtn
            hoverColor="#e27065"
            tooltip="Go to start page"
            tooltipWidth="102px"
         >
            <HouseDoor
               color="white"
               size={18}
            />
         </IconBtn>

         <SearchInput />

         <IconBtn
            hoverColor="#e27065"
            tooltip="Quick Add Task"
            tooltipWidth="98px"
         >
            <Plus
               color="white"
               size={32}
            />
         </IconBtn>

         <IconBtn hoverColor="#e27065">
            <GraphUp
               color="white"
               size={18}
            />
         </IconBtn>

         <IconBtn hoverColor="#e27065">
            <QuestionCircle
               color="white"
               size={18}
            />
         </IconBtn>

         <IconBtn hoverColor="#e27065">
            <Bell
               color="white"
               size={18}
            />
         </IconBtn>

         <span className="circle">R</span>
      </StyledAppBar>
   )
}

export default AppBar
