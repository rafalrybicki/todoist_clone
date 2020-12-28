import React, { useState } from 'react';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import Menu from './components/Menu';
import NewProject from './components/NewProject';
import NewTask from './components/NewTask';

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
      {/* <NewProject /> */}
      <NewTask headerText="Quick Add Task"/>
    </StyledApp>
  );
}

export default App;
