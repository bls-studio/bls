import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../Utils/scrollToTop';

import Loader from '../Loader';
import Navbar from '../Navbar';
import Menu from '../OverlayMenu'
import Works from '../Works';
import Services from '../Services';
import Contact from '../Contact';
import Home from '../Home';
import Footer from '../Footer';

const App = () => {
  const [isLoading, loader] = useState(true);

  useEffect(() => {
    // console.log(isLoading)
    // loader(!isLoading)
  })
  return (
    <div>
      {/* <Loader/> */}
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />}/>
          <Route exact path="/services" render={props => <Services {...props} />}/>
          <Route exact path="/works" render={props => <Works {...props} />}/>
        </Switch>
        <Footer />
      </ScrollToTop>
    </div>
    // isLoading ? <Loader/> : 
    // <div>
    // </div>
  )
};

export default App;