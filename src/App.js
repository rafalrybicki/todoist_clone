import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from './pages/ProtectedRoute';

import AppBar from './components/AppBar/AppBar';
import AppMenu from './components/AppMenu/AppMenu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainView from './pages/MainView';
import Project from './pages/Project';
import Today from './pages/Today';
// import Upcoming from './pages/Upcoming';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path='/'>
            <AppBar toggleMenu={toggleMenu} />
            <AppMenu isOpen={menuOpen} closeMenu={toggleMenu}/>
            <MainView>
              <Switch>
                <ProtectedRoute path="/inbox" component={Project} />
                <ProtectedRoute path="/project/:projectId" component={Project} />
                <ProtectedRoute path="/today" component={Today} />
                {/* <ProtectedRoute path="/upcoming" component={Upcoming} /> */}
                <ProtectedRoute path='/' render={() => <Redirect to= "/inbox" />} />
              </Switch>
            </MainView>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
