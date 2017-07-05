/**
 * Created by xinzhang on 7/5/17.
 */
import React from 'react';
import {BrowserRouter,Route,Link} from  'react-router-dom';
import App from './App';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <ul>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/app">App</Link><br/>
      </ul>
      <hr/>
      <Route exact path="/" component={() => <div>Home</div>}/>
      <Route path="/about" component={() => <div>About</div>}/>
      <Route path="/app" component={App}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;