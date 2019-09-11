import React from 'react';

// Home components
import Landing from './Home__Landing';
import About from './Home__About';
import Works from './Home__Works';
import Services from './Home__Services';
import Splash from './Home__Splash';

const Home = () => (
  <div>
    <Landing />
    <About />
    <Works />
    <Splash />
    <Services />
  </div>
);

export default Home;