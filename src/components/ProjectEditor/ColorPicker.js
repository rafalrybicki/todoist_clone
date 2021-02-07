import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { CircleFill } from 'react-bootstrap-icons';
import Popover from '../Popover';
import MenuList from '../MenuList';

const StyledColorPicker = styled.div`
   position: relative;
   margin-bottom: 20px;

   .project-icon {
      position: absolute;
      top: 33px;
      left: 9px;
      z-index: 100;
   }

   input[type="text"] {
      padding-left: 35px !important;
      cursor: pointer;
      margin-bottom: 0 !important;
   }

   ul {
      width: 100%;
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      li svg {
         margin-top: 3px;
      }
   }
`
const colors = [
   { name: 'Red', val: 'red' },
   { name: 'Orange', val: 'orange' },
   { name: 'Yellow', val: 'yellow' },
   { name: 'Olive Green', val: '#afb83b' },
   { name: 'Lime Green', val: 'limegreen' },
   { name: 'Green', val: 'green' },
   { name: 'Mint Green', val: '#6accbc' },
   { name: 'Teal', val: 'teal' },
   { name: 'Sky Blue', val: 'skyblue' },
   { name: 'Blue', val: 'blue' },
   { name: 'Grape', val: '#884dff' },
   { name: 'Violet', val: 'violet' },
   { name: 'Lavender', val: 'lavender' },
   { name: 'Magenta', val: 'magenta' },
   { name: 'Salmon', val: 'salmon' },
   { name: 'Charcoal', val: '#808080' },
   { name: 'Grey', val: 'grey' },
   { name: 'Taupe', val: '#ccac93' },
   { name: 'Black', val: 'black' }
]

function ColorPicker({ currentColor, setColor }) {
   let color;

   if (!currentColor.name) {
      color = colors.find(el => el.val === currentColor);
   } else {
      color = currentColor
   }

   return (
      <StyledColorPicker>
         <label htmlFor="color">Color</label>
         <CircleFill
            color={color.val}
            size={14}
            className="project-icon"
         />
         <Popover
            activator={
               <input
                  type="text"
                  value={color.name}
                  readOnly
               />
            }
         >
            <MenuList>
               {colors.map(item => 
                  <li
                     key={item.val}
                     className={item.val === color.val ? "active" : ""}
                     onClick={() => setColor(item)}
                  >
                     <CircleFill color={item.val} />
                     {item.name}
                  </li>
               )}
            </MenuList>
         </Popover>
      </StyledColorPicker>
   )
}

ColorPicker.propTypes = {
   currentColor: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]).isRequired,
   setColor: PropTypes.func.isRequired
}

export default ColorPicker