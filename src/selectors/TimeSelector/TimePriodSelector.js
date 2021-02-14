import React from 'react';
import PropTypes from 'prop-types';

import StyledTimePeriodSelector from './styled/TimePeriodSelector';

function TimePeriodSelector({ timePeriod, onChange }) {
   return (
      <StyledTimePeriodSelector>
         <button
            type="button"
            className={timePeriod === 'AM' ? "active" : ""}
            onClick={() => onChange('AM')}
         >
            AM
         </button>
         <button
            type="button"
            className={timePeriod === 'PM' ? "active" : ""}
            onClick={() => onChange('PM')}
         >
            PM
         </button>
      </StyledTimePeriodSelector>
   )
}

TimePeriodSelector.propTypes = {
   timePeriod: PropTypes.oneOf(['AM', 'PM']),
   onChange: PropTypes.func.isRequired
}

export default TimePeriodSelector
