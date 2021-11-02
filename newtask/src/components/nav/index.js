import React from 'react'
import {BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import './style.css';
import { FaBackward } from 'react-icons/fa';

// import { Home  } from '../home';
// import { About } from '../about';
// import { Contact } from '../contact';
// import { Card } from '../card';

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
           </ul>
        </div>
    )
}
