import React, { useState } from 'react';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import Menu from './components/Menu';
import NewProject from './components/NewProject';

const StyledApp = styled.div`
  padding-top: 43px;
  display: flex;
`

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <StyledApp className="App">
      <AppBar toggleMenu={toggleMenu} />
      <Menu isOpen={menuOpen} close={toggleMenu}/>
      <NewProject />
    </StyledApp>
  );
}

export default App;
