import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Team from './components/pages/Team';
import Contact from './components/pages/ContactPage';
import About from './components/pages/About';
import Social from './components/pages/Social';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/social' component={Social} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
