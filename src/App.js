import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import TeacherProfile from './screens/TeacherProfile/index';

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
