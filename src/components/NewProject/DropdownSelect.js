import React, { useState } from 'react';
import styled from 'styled-components';
import { CircleFill } from 'react-bootstrap-icons';

import DropdownSelectList from './DropdownSelectList';
import DropdownSelectOption from './DropdownSelectOption';

const StyledDropdownSelect = styled.div`
   position: relative;
   z-index: 100;

   input {
      cursor: pointer;
      padding-left: 32px !important;
      position: relative;
   }

   .current-circle {
      position: absolute;
      z-index: 100;
      top: 32px;
      left: 11px
   }
`

function DropdownSelect() {
   const [color, setColor] = useState({ id: "16", name: 'Charcoal', val: 'rgb(128, 128, 128)' });
   const [showList, setShowList] = useState(false)

   const colors = [
      { id: "1", name: 'Red', val: 'red' },
      { id: "2", name: 'Orange', val: 'orange' },
      { id: "3", name: 'Yellow', val: 'yellow' },
      { id: "4", name: 'Olive Green', val: 'rgb(175, 184, 59)' },
      { id: "5", name: 'Lime Green', val: 'limegreen' },
      { id: "6", name: 'Green', val: 'green' },
      { id: "7", name: 'Mint Green', val: 'rgb(106, 204, 188)' },
      { id: "8", name: 'Teal', val: 'teal' },
      { id: "9", name: 'Sky Blue', val: 'skyblue' },
      { id: "10", name: 'Blue', val: 'blue' },
      { id: "11", name: 'Grape', val: 'rgb(136, 77, 255)' },
      { id: "12", name: 'Violet', val: 'violet' },
      { id: "13", name: 'Lavender', val: 'lavender' },
      { id: "14", name: 'Magenta', val: 'magenta' },
      { id: "15", name: 'Salmon', val: 'salmon' },
      { id: "16", name: 'Charcoal', val: 'rgb(128, 128, 128)' },
      { id: "17", name: 'Grey', val: 'grey' },
      { id: "18", name: 'Taupe', val: 'rgb(204, 172, 147)' },
      { id: "19", name: 'Black', val: 'black' }
   ]

   const changeColor = (id) => {
      const index = colors.findIndex(color => color.id === id);

      setColor(colors[index]);
      setShowList(false);
   }

   return (
      <StyledDropdownSelect>
         <label htmlFor="color">Color</label>
         <CircleFill className="current-circle" color={color.val} size={14} />
         <input
            type="text"
            value={color.name}
            onClick={() => setShowList(!showList)}
            readOnly
         />
         {showList &&
         <DropdownSelectList>
            {colors.map(color => (
               <DropdownSelectOption
                  key={color.name}
                  text={color.name}
                  color={color.val}
                  onClick={() => changeColor(color.id)}
               />
            ))}
         </DropdownSelectList>
         }
      </StyledDropdownSelect>
   )
}

export default DropdownSelect
