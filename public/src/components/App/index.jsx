import React from 'react';

import Navbar from '../Navbar';
import Menu from '../OverlayMenu'
import Landing from '../Landing'
import About from '../About';
import Works from '../Works';
import Services from '../Services';


const App = () => (
  <div>
    <Navbar />
    <Landing />
    <About />
    <Works />
    {/* <Menu /> */}
    {/* <Services /> */}
  </div>
);

export default App;