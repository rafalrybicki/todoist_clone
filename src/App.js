import React, { useState } from 'react';
import styled from 'styled-components/macro';

import AppBar from './components/AppBar';
import Menu from './components/Menu';
import Inbox from './components/Inbox';
import NewProject from './components/NewProject';
import TaskEditor from './components/TaskEditor';
import TaskModal from './components/TaskModal';

const StyledApp = styled.div`
  padding-top: 43px;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
      <Inbox />
      {/* <NewProject /> */}
      {/* <TaskEditor headerText="Quick Add Task"/> */}
      {/* <TaskModal /> */}
    </StyledApp>
  );
}

export default App;
