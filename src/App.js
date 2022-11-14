import React from 'react';
import logo from './logo.svg';
import './App.css';
import Launches from './Components/launches';
import LaunchContext from './store/context/launchesContext';
import {launchesReducer, initialState} from './store/reducer/launchesReducer';
function App() {
  const [state, dispatch] = React.useReducer(launchesReducer, initialState)
  return (
    <LaunchContext.Provider value={{state, dispatch}} >
      <div className="App">
        <div style={{padding : '50px 250px'}} >
        <Launches/>
        </div>
      </div>
    </LaunchContext.Provider>
  );
}

export default App;
