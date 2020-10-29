import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Todo from './components/todo.js';
import Login from './components/login.js';
import Logout from './components/logout.js';

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(!1);
 
  return (
    <div className="App">
     
      <Router>
        <Switch>
          {/* <Route
           exact
           path="/"
           render = {()=> {Login}  /> */}
          <Route exact path={"/"} component ={Login}/>
          <Route exact path={"/home"} component ={Todo}/>
          <Route exact path={"/logout"} component ={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
