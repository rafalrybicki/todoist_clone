export function dynamicSort(property, order) {
   return function(a, b) {
      if (a[property] < b[property]) {
         return order === 'asc' ? -1 : 1;
      }
      if (a[property] > b[property]) {
         return order === 'asc' ? 1 : -1;
      }
      return 0
   }
}

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getHours() {
   let hours = new Date().getHours();
   
   if (hours > 12) {
      hours = hours - 12
   } 

   return hours < 10 ? '0' + hours : hours;
}

export function getMinutes() {
   const minutes = new Date().getMinutes();

   return minutes < 10 ? '0' + minutes : minutes;
}

export function getDisplayDate(date) {
   const arr = date ? new Date(date).toString().split(' ') : new Date().toString().split(' ')

   return `${arr[0]} ${+arr[2]} ${arr[1]}`
}

export function getTimeArr(miliseconds) {
   const date = miliseconds ? new Date(miliseconds) : new Date();
   let hours = date.getHours();
   const minutes = date.getMinutes();
   const timePeriod = hours > 12 ? 'PM' : 'AM';

   if (hours > 12) {
      hours -= 12;
   }

   return [hours, minutes, timePeriod]
}

export function getMilisecondsFromTimeArr(timeArr) {
   const hours = timeArr[2] === 'AM' ? timeArr[0] : timeArr[0] + 12;
   const minutes = timeArr[1];
   let miliseconds = 0;

   miliseconds += (hours * 3600000)
   miliseconds += (minutes * 60000);

   return miliseconds
}

export function getTaskDate(miliseconds, isDateTime) {
   if (!miliseconds) {
      return 'Schedule';
   }

   const date = new Date(miliseconds);
   const month = months[date.getMonth()].slice(0,3);
   const day = date.getDate();
   
   if (isDateTime) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let timePeriod = hours > 12 ? 'PM' : 'AM';
      if (hours > 12) {
         hours = hours - 12
      }

      if (minutes < 10) {
         minutes = '0' + minutes
      }

      return `${day} ${month.slice(0,3)} ${hours}:${minutes} ${timePeriod}`;
   }

   return `${day} ${month.slice(0,3)}`;
}

export function getMiliseconds(dateString) {
   if (!dateString) {
      const date = new Date();
      dateString = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`
   }

   return Date.parse(dateString)
}

export function getDate(miliseconds) {
   if (!miliseconds) {
      miliseconds = getMiliseconds();
   }

   const date = new Date(miliseconds);
   const year = date.getFullYear();
   const month = date.getMonth() + 1;
   const day = date.getDate();
   const stringDate = `${year}-${month}-${day}`

   return  {
      day,
      miliseconds,
      month,
      stringDate,
      year
   }
}

export function getWeek(miliseconds) {
   if (!miliseconds) {
      miliseconds = getMiliseconds();
   }

   const week = [];
   const today = new Date(miliseconds);
   const weekDay = today.getDay() === 0 ? 7 : today.getDay();
   const todayMiliseconds = today.valueOf();
   let newMiliseconds 

   if (weekDay === 1) {
      newMiliseconds = todayMiliseconds;
   } else {
      const difference = (weekDay - 1) * 86400000;
      newMiliseconds = todayMiliseconds - difference;
   }
   
   while (week.length < 7) {
      week.push(getDate(newMiliseconds));
      newMiliseconds += 86400000;
   }

   return week
}

export function getMonth(month, year) {
   const firstWeek = getWeek(`${year} ${month} 1`);
   const lastDayMiliseconds = getLastDayOfTheMonth(month, year);
   const monthArr = [firstWeek];
   
   let miliseconds = firstWeek[0].miliseconds + (7 * 86400000);

   while (miliseconds <= lastDayMiliseconds) {
      const nextWeek = getWeek(miliseconds)
      monthArr.push(nextWeek)
      miliseconds += (7 * 86400000);
   }

   return monthArr
}

export function getNextWeek(miliseconds) {
   const date = new Date(miliseconds);
   const dayOfTheWeek = date.getDay() === 0 ? 7 : date.getDay();
   const diff = 7 - dayOfTheWeek;

   let newMiliseconds = miliseconds + 86400000;
   newMiliseconds += (diff * 86400000)

   return getWeek(newMiliseconds)
}

export function getBeginingOfTheDay(miliseconds) {
   const date = getDate(miliseconds);

   return Date.parse(`${date.year}, ${date.month}, ${date.day}, 00:00`)
}

export function getEndOfTheDay() {
   const date = getDate();

   return Date.parse(`${date.year}, ${date.month}, ${date.day}, 23:59:59`)
}

export function getFirstDayOfTheMonth(month, year) {
   const day = new Date(`${year}, ${month}, 1`);
   return Date.parse(day)
}

export function getLastDayOfTheMonth(month, year) {
   const day = new Date(year, month, 0);
   return Date.parse(day)
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday', 'Sunday']

export function getDisplayDay(miliseconds) {
   let day = new Date(miliseconds).getDay();
   day = day === 0 ? 6 : (day - 1);

   return days[day].slice(0, 3);
}

export function scrollToElement(elementId, viewId) {
   const view = document.querySelector(viewId);
   const target = document.getElementById(elementId).offsetTop - 131;
   console.log('target = ' + target)

   view.scrollTo({
      top: target,
      left: 0,
      behavior: 'smooth'
   });
}

export function validateEmail(email) {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}