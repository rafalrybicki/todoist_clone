import React, { useState } from 'react';

import AppBar from './components/AppBar'
import Menu from './components/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="App">
      <AppBar toggleMenu={toggleMenu} />
      <Menu isOpen={menuOpen} close={toggleMenu}/>
    </div>
  );
}

export default App;
