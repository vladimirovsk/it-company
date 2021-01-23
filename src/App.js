
import React from 'react';
import Header from "./component/header/Header";
import P404 from "./component/p404/P404"
import Home from "./component/home/Home";
import {withTheme} from './component/Theme'
import {  Switch,  Route, Redirect } from "react-router-dom";

function App(props) {
  const {darkMode} = props

  React.useEffect(()=>{
    console.log('APP', darkMode)
  },[darkMode])


  const routes = (
    <Switch>
        <Route exact={true}  path="/home" component={Home }/>
        {/* <Route exact={true}  path="/" component={Home}/> */}
        <Route exact={true}  path="/p404" component={P404}/>
        {/* <Redirect to='/p404' /> */}
       
    </Switch>
    )
  
    return (
      <div>
        <Header />
        <Home />
        {/* {routes} */}
      </div>

  );
}

export default withTheme(App);
