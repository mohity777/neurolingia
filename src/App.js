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
          <Route path="/" component={TeacherProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
