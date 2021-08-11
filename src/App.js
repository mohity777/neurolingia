import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Profile from './Components/Teacher/Profile';
import TeacherProfile from './Screens/TeacherProfile/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basicinfo" component={TeacherProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
