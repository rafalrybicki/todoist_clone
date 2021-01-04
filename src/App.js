import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components/macro';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import MainView from './views/MainView';
import Inbox from './views/Inbox';
import Today from './views/Today';
import Upcoming from './views/Upcoming';
import Project from './views/Project';

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
    <Router>
      <StyledApp className="App">
        <AppBar toggleMenu={toggleMenu} />
        <AppMenu isOpen={menuOpen} closeMenu={toggleMenu}/>
        <MainView>
          <Switch>
            <Route path="/inbox" component={Inbox} />
            <Route path="/today" component={Today} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/project/:id" component={Project} />
            <Route path='/' render={() => <Redirect to= "/inbox" />} />
          </Switch>
        </MainView>
      </StyledApp>
    </Router>
  );
}

export default App;
