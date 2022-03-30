import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/header';
import MovieDetail from './components/Moviedetail/Moviedetail'; 
import pageNotFound from './components/pageNotFound/pageNotFound';
// import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/" component={Home} />
        <Route path="/movie/:imdbID" component={MovieDetail} />
        <Route component={pageNotFound} />
      </Router>
    </div>
  );
}

export default App;
