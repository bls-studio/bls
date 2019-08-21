import React from 'react';

import Navbar from '../Navbar';
import Menu from '../OverlayMenu'
import Landing from '../Landing'
import VideoReel from '../VideoReel';

const App = () => (
  <div>
    <Navbar />
    {/* <Menu /> */}
    <Landing />
    <VideoReel />
  </div>
);

export default App;