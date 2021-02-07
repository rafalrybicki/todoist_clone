import React from 'react';
import PropTypes from 'prop-types';

import StyledToggleSwitch from './styled/ToggleSwitch';

function ToggleSwitch({ value, setValue }) {
   return (
      <StyledToggleSwitch checked={value}>
         <label htmlFor="toggleSwitch">
            Add to Favorites
         </label>
         <input
            type="checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
            checked={value}
            onChange={() => setValue()}
         />
         <span className="switch" />
      </StyledToggleSwitch>
   )
}

ToggleSwitch.propTypes = {
   value: PropTypes.bool.isRequired,
   setValue: PropTypes.func.isRequired
}

export default ToggleSwitch
