import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Profile from './Components/Teacher/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basicinfo" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
