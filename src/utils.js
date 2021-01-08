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