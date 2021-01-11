
import React from 'react';
import Header from "./component/header/Header";
import P404 from "./component/p404/P404"
import Home from "./component/home/Home";
import {withTheme} from './component/Theme'

function App() {
    return (
      <div>
        <Header />
        <Home />
    </div>
  );
}

export default withTheme(App);
