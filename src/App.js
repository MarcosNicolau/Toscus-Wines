import './styles/index.scss';  
import Nav from './components/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path='/' component={Home}/> */}
      </Switch>
    </Router>
  );
}

export default App;
