import React from 'react'
import { Route,Switch, Redirect } from 'react-router-dom';
import './App.css'
import SignUp from './component/SignUp'
import Login from './component/Login'

function App() {
  return (
    
    <div>
      <Switch>
        <Route path="/Login" component= {Login}/>
        <Route path="/SignUp" component= {SignUp}/>
        <Redirect from="/" to="/SignUp"/>
      </Switch>
    </div>
  );
}

export default App;
