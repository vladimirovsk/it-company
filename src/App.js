
import React from 'react';
import Header from "./component/header/Header";
// import P404 from "./component/p404/P404"
// import Home from "./component/home/Home";
import Title from "./component/title/Title";
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import {withTheme} from './component/Theme'
//import {  Switch,  Route } from "react-router-dom";

//img
// import react from './component/img/react.png';
// import nodejs from './component/img/nodejs.png';


//import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

function App(props) {
  //const {darkMode} = props

  // React.useEffect(()=>{
  //   console.log('APP', darkMode)
  // },[darkMode])


  // const routes = (
  //   <Switch>
  //       <Route exact={true} path="/home" component={Title}/>
  //       {/* <Route exact={true} path="/" component={Home}/> */}
  //       <Route path="/p404" exact={true} render={() =><P404 />}/>
       
  //   </Switch>
  //   )
  
    return (
      <div>

        <Header />

        <Title />
        <Project /> 

        
        <Contact />
        <About />
        <Footer />
       

      </div>

  );
}

export default withTheme(App);
