import React, { useState } from 'react';

import StyledSearchInput from './styled/SearchInput';
import { Search } from 'react-bootstrap-icons';

function SearchInput() {
   const [focus, setFocus] = useState(false);

   return (
      <StyledSearchInput focus={focus}>
         <input
            type="text"
            placeholder="Find"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onClick={() => alert('coming soon')}
         />
         <Search className="search-icon" />
      </StyledSearchInput>
   )
}

export default SearchInput
