import '../App.css';
import Home from "../pages/Home.js"
import Header from '../components/Header';
import Post from '../pages/Post';
import Biography from '../pages/Biography';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post" component={Post}/>
          <Route exact path="/biography" component={Biography}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
