import React from 'react'
import './DashBoard.css';
import {Link} from 'react-router-dom';
export default function DashBoard() {
   
    return (
        <div>
           <h1>Dash Board</h1>
           <div className="showcase">
               <Link to='/art/beyond_binary'>Beyond Binary</Link>
           </div>
        </div>
    )
}
