import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import ScrollToTop from './components/Utils/scrollToTop';



import App from './components/App/';

import './components/App/reset.scss';

render(<Router><App/></Router>, document.getElementById('root'));