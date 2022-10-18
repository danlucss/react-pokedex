import react from 'react';
import { SearchBar } from '../SeachBar';

import './index.scss';


export const Navbar = () => {
    return (<>
        <nav>
            <h4>logo</h4>

            <ul>

                <li> <a href="#home">HOME</a> </li>
                <li><a href="#pokedex">MY POKEDEX</a> </li>
                <li><a href="#team">MY TEAM</a> </li>
            </ul>
        </nav>

    </>


    )

}


