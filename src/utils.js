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

export function getTaskDate(miliseconds) {
   const date = new Date(miliseconds);
   const month = months[date.getMonth()].slice(0,3);
   const day = date.getDate();
   
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

export function getBeginingOfTheDay() {
   const date = getDate();

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