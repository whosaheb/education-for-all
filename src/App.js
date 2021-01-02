import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Contributors from './pages/Contributors';
import Gallery from './pages/Gallery';
import Refecence from './pages/Refecence';
import SiteMap from './pages/SiteMap';

const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/community' exact component={ Community } />
        <Route path='/contact' exact component={ Contact } />
        <Route path='/contributors' exact component={ Contributors } />
        <Route path='/gallery' exact component={ Gallery } />
        <Route path='/refecence' exact component={ Refecence } />
        <Route path='/site-road-map' exact component={ SiteMap } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
