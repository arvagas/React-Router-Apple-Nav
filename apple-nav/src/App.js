import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import NavWrapper from './components/navigation/NavWrapper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavWrapper/>
      </header>
      <Router>
        <Route />
      </Router>
    </div>
  );
}

export default App;
