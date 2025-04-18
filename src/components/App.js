
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import { Link } from "react-router-dom/cjs/react-router-dom";


const App = () => {
  return (
      <div>
        <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <Switch>
          <Route path='/' exact component ={Home}/>
          <Route path='/about' exact component ={About}/>
        </Switch>

       </BrowserRouter>
      </div>

  )
}

export default App
