import "../App.css";
import Home from "../pages/Home.js";
import Header from "../components/Header";
import Posts from "../pages/Post.js";
import Biography from "../pages/Biography";
import Crypto from "../pages/Crypto.js";
import FrontendDev from "../pages/FrontendDev.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/biography" component={Biography} />
          <Route exact path="/crypto" component={Crypto} />
          <Route exact path="/frontend" component={FrontendDev} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
