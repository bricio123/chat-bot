import React from 'react';
import Login from './Pages/index';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import CheckAM from './Pages/CheckAM';
import CheckPM from './Pages/CheckPM';
import Turno from './Pages/Turno';
import { createGlobalStyle } from 'styled-components';

import {
  Route,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/CheckAM" component={CheckAM} />
        <Route path="/CheckPM" component={CheckPM} />
        <Route path="/Turno" component={Turno} />
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Chat" component={Chat} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export default App;
