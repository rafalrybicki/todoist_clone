import { useEffect } from 'react';

function useOutsideClick(isOpen, ref, callback) {
   useEffect(() => {
      function handleClickOutside(event) {
         if (isOpen && ref.current && !ref.current.contains(event.target)) {
            callback();
         }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      }
   }, [isOpen, ref, callback])
}

export default useOutsideClick
