import React from 'react';
import NavBar from './NavBar';
import Index from './Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './Schedule';
import StudentAccount from './StudentAccount';
import HomePageStudent from './HomePageStudent';

function HomeStudents () {

    return (
        
        
        <Router> <div>
            <NavBar />
            <Switch>
            <Route path ="/Index" component = {Index}></Route>
            <Route path ="/Schedule" component = {Schedule}></Route>
            <Route path = "/StudentAccount" component = {StudentAccount}></Route>
            <Route path = "/" exact component = {HomePageStudent}></Route>
            </Switch>
        </div>
        </Router>
          

    )
}

export default HomeStudents;