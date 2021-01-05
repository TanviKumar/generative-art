import React, {useState} from 'react'
import * as FaIcons from "react-icons/io5";
import { Link } from "react-router-dom";
import {Sidebar} from './Sidebar';
import {IconContext} from 'react-icons';
import './Navbar.css'


function Navbar() {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar =() => setSidebar(!sidebar);


    return(
        <>
        <IconContext.Provider value ={{color:'#fff'}}>

        <div className="navbar">
            <Link to="#" className='menu-bars'>
            <FaIcons.IoApps onClick={showSidebar}/>
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
        <ul classname='nav-menu-items'  onClick={showSidebar}>

            <Link to="#" className='menu-bars'>
                <FaIcons.IoClose/>
            </Link>

            {/* Using map for fetching menu item from sidebar.js to navbar.js */}
            {Sidebar.map((item,index) =>{
            return(
                <li key={index} className={item.cName}>
                <Link to={item.path}>
                    <span>{item.title}</span>
                </Link>
                </li>
                 )
            })}

        </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;