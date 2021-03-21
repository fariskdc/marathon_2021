import React from 'react';
import {Link} from 'react-router-dom';

const NavBarProfessor = () =>{
    
    return (
        <div>
            <nav className = "navigationBar" >
                <ul className = 'navList'>
                    <Link to ='/HomePageProfessor'>
                            <li>Home</li>
                        </Link>
                    <Link to = '/ScheduleExam'>
                            <li>Zakazi ispit</li>
                        </Link>
                    <Link to = '/ProfessorPredmet'>
                            <li>Predmet</li>
                        </Link>
                    <Link to = '/ProfessorAccount'>
                            <li>Racun</li>
                        </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBarProfessor;