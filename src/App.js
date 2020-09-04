import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Detail from './components/Detail';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
