
import React from 'react';
import Header from "./component/header/Header";
import P404 from "./component/p404/P404"
import Home from "./component/home/Home";
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import {withTheme} from './component/Theme'
import {  Switch,  Route, Redirect } from "react-router-dom";



function App(props) {
  const {darkMode} = props

  React.useEffect(()=>{
    console.log('APP', darkMode)
  },[darkMode])


  const routes = (
    <Switch>
        <Route exact={true} path="/home" component={Home}/>
        {/* <Route exact={true} path="/" component={Home}/> */}
        <Route path="/p404" exact={true} render={() =><P404 />}/>
       
    </Switch>
    )
  
    return (
      <div>
        <Header />
        {/* <Home /> */}
        <Project />
        <Contact />
        <About />
        <Footer />
      </div>

  );
}

export default withTheme(App);
