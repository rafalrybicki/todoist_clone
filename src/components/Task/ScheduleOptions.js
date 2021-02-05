import React from 'react';
import PropTypes from 'prop-types';

import { getDate, getNextWeek, getWeek, getTimeArr, getMilisecondsFromTimeArr } from 'utils';
import { updateDocument } from 'firebase/index.js';

import IconBtn from 'buttons/IconBtn';
import TodayIcon from 'components/appIcons/TodayIcon';
import TomorrowIcon from 'components/appIcons/TomorrowIcon';
import ThisWeekendIcon from 'components/appIcons/ThisWeekendIcon';
import NextWeekIcon from 'components/appIcons/NextWeekIcon';
import NoDateIcon from 'components/appIcons/NoDateIcon';
import OptionsBtn from 'buttons/OptionsBtn';
import DateTimeSelector from 'components/appSelectors/DateTimeSelector/DateTimeSelector';

function ScheduleOptions({ id, currentDate, isDateTime }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000;
   const thisWeek = getWeek(today)
   const nextWeek = getNextWeek(today);
   const thisWeekend = thisWeek[5].miliseconds;
   const nextWeekend = nextWeek[5].miliseconds;
   const nextMonday = nextWeek[0].miliseconds;

   const setDate = (miliseconds, isDateTime) => {
      if (isDateTime) {
         const timeArr = getTimeArr(currentDate);
         const newMiliseconds = getMilisecondsFromTimeArr(timeArr) + miliseconds;

         updateDocument('tasks', id, {
            targetDate: newMiliseconds,
            isDateTime: true
         });
      } else if (miliseconds === null) {
         updateDocument('tasks', id, {
            targetDate: miliseconds,
            isDateTime: false
         });
      } else {
         updateDocument('tasks', id, {
            targetDate: miliseconds,
            isDateTime: false
         });
      }
   }

   return (
      <div className="options">
         {currentDate !== today &&
            <IconBtn
               tooltip="Today"
               onClick={() => setDate(today, isDateTime)}
            >
               <TodayIcon size={17} />
            </IconBtn>
         }

         {currentDate !== tommorow &&
            <IconBtn
               tooltip="Tomorrow"
               onClick={() => setDate(tommorow, isDateTime)}
            >
               <TomorrowIcon size={19} />
            </IconBtn>
         }

         <IconBtn
            tooltip={today >= thisWeekend ? "Next weekend" : "This weekend"}
            onClick={() => setDate((today >= thisWeekend ? nextWeekend : thisWeekend), isDateTime)}
         >
            <ThisWeekendIcon size={18} />
         </IconBtn>

         {nextMonday !== tommorow &&
            <IconBtn
               tooltip="Next week"
               onClick={() => setDate(nextMonday, isDateTime)}
            >
               <NextWeekIcon size={17} />
            </IconBtn>
         }
         
         {currentDate && 
            <IconBtn
               tooltip="No date"
               onClick={() => setDate(null, false)}
            >
               <NoDateIcon size={18} />
            </IconBtn>
         }

         <DateTimeSelector
            miliseconds={currentDate}
            isDateTime={isDateTime}
            onChange={setDate}
         >
            <OptionsBtn />
         </DateTimeSelector>
      </div>
   )
}

ScheduleOptions.porpTypes = {
   id: PropTypes.string.isRequired,
   currentDate: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired
}

export default ScheduleOptions
