export function dynamicSort(property, direction) {
   return function(a, b) {
      if (a[property] < b[property]) {
         return direction === 'up' ? -1 : 1;
      }
      if (a[property] > b[property]) {
         return direction === 'up' ? 1 : -1;
      }
      return 0
   }
}

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

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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