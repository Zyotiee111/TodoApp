import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// import Login from './components/login.js';
import Logout from './components/logout.js';
import ListItem from './components/ListItem.js'
import Signin from './components/Signin.js'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(!1);

  return (
    <div className="todo-app">

      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={
              () =>
                isLoggedIn ?
                  <Redirect to="/home" /> :
                  <Signin setLoggedIn={setLoggedIn} />} />

          <Route
            exact
            path={"/home"}
            render={
              () =>
                isLoggedIn ?
                  <ListItem setLoggedIn={setLoggedIn} /> :
                  <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  )
 }
export default App;
