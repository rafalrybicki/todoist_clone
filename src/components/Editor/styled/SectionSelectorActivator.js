import styled from 'styled-components';

const SectionSelectorActivator = styled.button`
   margin-right: auto;
   height: 28px;
   padding: 0 8px;
   border: 1px solid #ccc;
   border-radius: 3px;
   color: #555;

   svg {
      margin-right: 5px;
   }

   svg.inbox-icon {
      margin-bottom: -2px;
   }

   &:hover, &:focus {
      background-color: #eee;
   }
`

export default SectionSelectorActivator