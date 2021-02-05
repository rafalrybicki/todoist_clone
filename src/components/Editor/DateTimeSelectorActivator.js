import React from 'react';
import PropTypes from 'prop-types';

import { getTaskDate } from 'utils';

import SelectorActivator from './styled/SelectorActivator';
import { CalendarEvent } from 'react-bootstrap-icons';

function DateTimeSelectorActivator({ miliseconds, isDateTime }) {
   return (
      <SelectorActivator type="button">
         <CalendarEvent className="calendar-icon" />
         {getTaskDate(miliseconds, isDateTime)}
      </SelectorActivator>
   )
}

DateTimeSelectorActivator.propTypes = {
   miliseconds: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired
}

export default DateTimeSelectorActivator
