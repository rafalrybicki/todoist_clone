import React, { useState } from 'react';
import styled from 'styled-components/macro';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import MainView from './views/MainView';
import Inbox from './views/Inbox';
import Today from './views/Today';
import Upcoming from './views/Upcoming';

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
      <AppMenu isOpen={menuOpen} close={toggleMenu}/>
      <MainView>
        {/* <Upcoming /> */}
        <Inbox />
        {/* <Today /> */}
      </MainView>
      {/* <NewProject /> */}
      {/* <TaskEditor headerText="Quick Add Task"/> */}
      {/* <TaskModal /> */}
    </StyledApp>
  );
}

export default App;
