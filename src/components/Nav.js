import React from 'react';
import { Link } from 'react-router-dom';

function Nav( props ) {
    const style = {
        color: 'white'
    }
    return(
        <nav>
            <div>Icon</div>

            <ul>
                <li><Link  style={style} to="/about">About</Link></li>
                <li><Link  style={style} to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;