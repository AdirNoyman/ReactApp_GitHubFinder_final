import React, { useState, Fragment } from 'react';
import GithubState from './context/github/GithubState';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {

  const [alert, setAlert] = useState(null);



  const handelEmptySearch = (message, type) => {

    setAlert({ message, type });

    setTimeout(() => setAlert(null), 5000);

  };


  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    setAlert={handelEmptySearch} />
                  <Users />
                </Fragment>

              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>

          </div>

        </Fragment>
      </Router>
    </GithubState>
  );


}

export default App;