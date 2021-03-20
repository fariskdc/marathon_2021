import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    
    return (
        <div>
            <nav className = "NavigationBar">
                <ul>
                    <Link to ='/'>
                            <li>Home</li>
                        </Link>
                    <Link to = '/Index'>
                            <li>Index</li>
                        </Link>
                    <Link to = '/Schedule'>
                            <li>Prijava ispita</li>
                        </Link>
                    <Link to = '/StudentAccount'>
                            <li>Racun</li>
                        </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;