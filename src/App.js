import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route path="/detail/:imdbId">
              <Detail/>
            </Route>

            <Route path="/">
              <Main/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
