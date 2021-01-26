import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';
import ProtectedRoute from './views/ProtectedRoute';
import styled from 'styled-components/macro';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import Login from './views/Login';
import SignUp from './views/SignUp';
import MainView from './views/MainView';
import Inbox from './views/Inbox';
import Project from './views/Project';
import Today from './views/Today';
import Upcoming from './views/Upcoming';
import AppModal from './components/AppModal';
import FirebaseListener from './components/FirebaseListener';

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const userId = useSelector(state => state.user.id);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Router>
      <StyledApp className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path='/'>
            {userId && <FirebaseListener userId={userId} />}
            <AppBar toggleMenu={toggleMenu} />
            <AppMenu isOpen={menuOpen} closeMenu={toggleMenu}/>
            <MainView>
              <Switch>
                <ProtectedRoute path="/inbox" component={Inbox} />
                <ProtectedRoute path="/project/:projectId" component={Project} />
                <ProtectedRoute path="/today" component={Today} />
                <ProtectedRoute path="/upcoming" component={Upcoming} />
                <ProtectedRoute path='/' render={() => <Redirect to= "/inbox" />} />
              </Switch>
            </MainView>
            <AppModal />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
