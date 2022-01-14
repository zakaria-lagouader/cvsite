import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Page from './pages/profile/Page';
function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile/:id" component={Page} />
    </BrowserRouter>
  );
}

export default App;
