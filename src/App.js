
import React from 'react';
import Header from "./component/header/Header";
import P404 from "./component/p404/P404"
import Home from "./component/home/Home";
import {withTheme} from './component/Theme'
import {

  Switch,
  Route, Redirect
  
} from "react-router-dom";

function App(props) {
  const {darkMode} = props

  React.useEffect(()=>{
    console.log('APP', darkMode)
  },[darkMode])


  const routes = (
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/p404" exact={true} render={() =><P404 />}/>
        <Redirect to={'/'}/>
    </Switch>
    )
  
    return (
      <div>
        <Header />
        {routes}
      </div>

  );
}

export default withTheme(App);
