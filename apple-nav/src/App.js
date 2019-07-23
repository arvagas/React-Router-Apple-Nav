import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import NavWrapper from './components/navigation/NavWrapper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path='/' component={NavWrapper}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
