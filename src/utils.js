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

export function getDate(miliseconds) {
   const date = miliseconds ? new Date(miliseconds) : new Date();
   const year = date.getFullYear();
   const month = date.getMonth() + 1;
   const day = date.getDate();
   const today = `${year}-${month}-${day}`
   const weekDay = date.getDay() === 0 ? 7 : date.getDay();

   return  {
      year,
      month,
      day,
      today,
      weekDay
   }
}