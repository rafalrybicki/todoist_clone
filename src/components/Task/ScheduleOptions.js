import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getDate, getNextWeek, getWeek, getTimeArr, getMilisecondsFromTimeArr } from 'utils';
import { updateDocument } from 'firebase/index.js';
import { updateTask } from 'redux/actions';

import IconBtn from 'buttons/IconBtn';
import TodayIcon from 'icons/TodayIcon';
import TomorrowIcon from 'icons/TomorrowIcon';
import ThisWeekendIcon from 'icons/ThisWeekendIcon';
import NextWeekIcon from 'icons/NextWeekIcon';
import NoDateIcon from 'icons/NoDateIcon';
import OptionsBtn from 'buttons/OptionsBtn';
import DateTimeSelector from 'selectors/DateTimeSelector/DateTimeSelector';

function ScheduleOptions({ id, currentDate, isDateTime, close }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000;
   const thisWeek = getWeek(today)
   const nextWeek = getNextWeek(today);
   const thisWeekend = thisWeek[5].miliseconds;
   const nextWeekend = nextWeek[5].miliseconds;
   const nextMonday = nextWeek[0].miliseconds;
   const dispatch = useDispatch();

   const setDate = (miliseconds, isDateTime) => {
      let fields;

      if (isDateTime) {
         const timeArr = getTimeArr(currentDate);
         const newMiliseconds = getMilisecondsFromTimeArr(timeArr) + miliseconds;
         
         fields = {
            targetDate: newMiliseconds,
            isDateTime: true
         }
      } else if (miliseconds === null) {
         fields = {
            targetDate: miliseconds,
            isDateTime: false
         }
      } else {
         fields = {
            targetDate: miliseconds,
            isDateTime: false
         }
      }

      updateDocument('tasks', id, fields);
      dispatch(updateTask(id, fields));
      close();
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
   isDateTime: PropTypes.bool.isRequired,
   close: PropTypes.func.isRequired,
}

export default ScheduleOptions
