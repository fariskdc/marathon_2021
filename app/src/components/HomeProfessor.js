import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageProfessor from './HomePageProfessor';
import NavBarProfessor from './NavBarProfessor';
import ProfessorAccount from './ProfessorAccount';
import ProfessorPredmet from './ProfessorPredmet';
import ScheduleExam from './ScheduleExam'

function HomeProfessor () {

    return (
        
        
        <Router> <div>
            <NavBarProfessor />
            <Switch>
            <Route path ="/ScheduleExam" component = {ScheduleExam} ></Route>
            <Route path ="/ProfessorPredmet" component = {ProfessorPredmet}></Route>
            <Route path = "/ProfessorAccount"  component = {ProfessorAccount}></Route>
            <Route path = "/HomePageProfessor" exact component = {HomePageProfessor}></Route>
            </Switch>
        </div>
        </Router>
          

    )
}

export default HomeProfessor;