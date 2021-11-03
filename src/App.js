// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { Nav } from './components/nav';
import { Route, Switch } from 'react-router';
import { About } from './components/about';
import Card from './components/card';
import  Cards  from './components/Cards';
import { Contact } from './components/contact';
import Favorite from './components/Favorite';
import Search from './components/search';
//import { Route, Switch } from 'react-router';
function App() {
  return (
    <div className="App">
<Nav/>    
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/About" component={About}/>
<Route exact path="/Card/:id" component={Card}/>
<Route exact path="/Cards" component={Cards}/>
<Route exact path="/Contact" component={Contact}/>
<Route exact path="/Favorite" component={Favorite}/>
<Route exact path="/Search" component={Search}/>
<Route path="*" 
render={()=>{
  return <h2>error - page not found</h2>
}}/>
</Switch>
    </div>

  );
}

export default App;
