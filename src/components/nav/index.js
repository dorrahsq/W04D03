import React from 'react'
import {BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import './style.css';
import { FaBackward } from 'react-icons/fa';

export const Nav = () => {
    const history = useHistory();

  const  oneStepback =() =>{
  console.log("ff");   
  history.goBack()
  }

    return (
        <div>
           <ul className="allul" >
<li className="liele"> <FaBackward  onClick={oneStepback}/> </li>              
<li className="liele">  <Link className="linkk" to="/"> Home </Link></li>
<li className="liele"> <Link className="linkk" to="/About"> About </Link></li>
<li className="liele"><Link className="linkk" to="/Cards"> Cards </Link></li>
<li className="liele"><Link className="linkk" to="/Contact"> Contact </Link></li>
<li className="liele"><Link className="linkk" to="/Favorite"> Favorite </Link></li>
<li className="liele"><Link className="linkk" to="/Search">   Search </Link></li>
      {/* <span className="spann"> <input type="text" placeholder="search for your fav color"/> </span> */}


           </ul>
        </div>
    )
}
