
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

import {setDefaultLanguage, setLanguageCookie, setTranslations, translate} from "react-switch-lang";
import ru from './i18/ru.json';
import en from './i18/en.json';
import pl from './i18/pl.json';

setTranslations({ ru, en, pl });
setDefaultLanguage('pl');
setLanguageCookie();


function App(props) {
  
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

export default withTheme(translate(App));
