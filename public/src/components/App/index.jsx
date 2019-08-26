import React from 'react';

import Navbar from '../Navbar';
import Menu from '../OverlayMenu'
import Landing from '../Landing'
import VideoReel from '../VideoReel';
import Services from '../Services';

const App = () => (
  <div>
    <Navbar />
    {/* <Menu /> */}
    <Landing />
    {/* <VideoReel /> */}
    <Services />
  </div>
);

export default App;