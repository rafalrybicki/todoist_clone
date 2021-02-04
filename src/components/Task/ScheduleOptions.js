import React from 'react';
import PropTypes from 'prop-types';

import { getDate, getNextWeek, getWeek } from 'utils';

import IconBtn from 'components/appButtons/IconBtn';
import TodayIcon from 'components/appIcons/TodayIcon';
import TomorrowIcon from 'components/appIcons/TomorrowIcon';
import ThisWeekendIcon from 'components/appIcons/ThisWeekendIcon';
import NextWeekIcon from 'components/appIcons/NextWeekIcon';
import NoDateIcon from 'components/appIcons/NoDateIcon';
import OptionsBtn from 'components/appButtons/OptionsBtn';

function ScheduleOptions({ currentDate, setTargetDate }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000;
   const thisWeek = getWeek(today)
   const nextWeek = getNextWeek(today);
   const thisWeekend = thisWeek[5].miliseconds;
   const nextWeekend = nextWeek[5].miliseconds;
   const nextMonday = nextWeek[0].miliseconds;

   return (
      <div className="options">
         {currentDate !== today &&
            <IconBtn
               tooltip="Today"
               onClick={() => setTargetDate(today)}
            >
               <TodayIcon size={17} />
            </IconBtn>
         }

         {currentDate !== tommorow &&
            <IconBtn
               tooltip="Tomorrow"
               onClick={() => setTargetDate(tommorow)}
            >
               <TomorrowIcon size={19} />
            </IconBtn>
         }

         <IconBtn
            tooltip={today >= thisWeekend ? "Next weekend" : "This weekend"}
            onClick={() => setTargetDate(today >= thisWeekend ? nextWeekend : thisWeekend)}
         >
            <ThisWeekendIcon size={18} />
         </IconBtn>

         {nextMonday !== tommorow &&
            <IconBtn
               tooltip="Next week"
               onClick={() => setTargetDate(nextMonday)}
            >
               <NextWeekIcon size={17} />
            </IconBtn>
         }
         
         {currentDate && 
            <IconBtn
               tooltip="No date"
               onClick={() => setTargetDate(null)}
            >
               <NoDateIcon size={18} />
            </IconBtn>
         }

         <OptionsBtn 
            onClick={() => alert(true)}
         />
      </div>
   )
}

ScheduleOptions.porpTypes = {
   setTargetDate: PropTypes.func.isRequired
}

export default ScheduleOptions
