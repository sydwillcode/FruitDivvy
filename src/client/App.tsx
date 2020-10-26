import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Provider from "./views/provider";
import Collector from "./views/Collector"
import MapPage from "./views/Map";
import Footer from "./views/Footer"
import Login from "./views/Login"


const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/provider" component={Provider} />
        <Route exact path="/collector" component={Collector} />   
        <Route exact path="/login" component={ Login } />
        <Route exact path="/map" component={ MapPage } />     
      </Switch>
      <Footer />
    </Router>
  );
};

interface AppProps {}

export default App;
