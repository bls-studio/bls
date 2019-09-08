import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Navbar from '../Navbar';
import Menu from '../OverlayMenu'
import Works from '../Works';
import Services from '../Services';
import Contact from '../Contact';
import Home from '../Home';
import Footer from '../Footer';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />}/>
      <Route exact path="/services" render={props => <Services {...props} />}/>
      <Route exact path="/works" render={props => <Works {...props} />}/>
      {/* <Route exact path="/" render={props => <Editor {...props} />}/> */}


    </Switch>
    <Footer />
  </div>
);

export default App;