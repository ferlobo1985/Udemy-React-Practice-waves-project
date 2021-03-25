import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/navigation/header';
import Footer from './components/navigation/footer';
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
