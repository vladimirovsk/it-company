import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { green, grey, orange } from '@material-ui/core/colors';

// const theme = createMuiTheme (
  //   {
  //   palette:{
  //     type:palletType,
  //     // background:{
  //     //   dark:{
  //     //     default: grey[500],
  //     //     },
  //     //   light:{
  //     //     default: green[500],
  //     //   },  
  //     //   },

  //     primary:{
  //       main: grey[800],
  //       light:grey[400],
  //       dark: grey[800],
  //       contrastText: orange[400]
  //     },
  //     secondary:{
  //       main: green[500],
  //       light:green[400],
  //       dark: green[800],
  //       contrastText: yellow[400]
  //     },

  //     // background: {
  //     //   light: grey[400],
  //     //   //default: grey[800],
  //     //   dark: grey[800]
  //     // },
  //   },
  //   text:{
  //     dark: orange[500],
  //     primary: orange[500],
  //     light: grey[800]
  //   },
  //   // text:{
  //   //   disabled: "rgba(0, 0, 0, 0.38)",
  //   //   hint: "rgba(0, 0, 0, 0.38)",
  //   //   primary: "rgba(0, 0, 0, 0.87)",
  //   //   secondary: "rgba(0, 0, 0, 0.54)",
  //   //   dark:grey[50],
  //   //   light: "#FFBA60"
  //   // }

  //   })



const themeLight = createMuiTheme({
  palette:{
    type:'light',
    primary:{main:'#eeeeee'},
    secondary:{main:'#f4511e'},
  },

  tab:{
    //textShadow: '1px 1px #000000',
  }

})

const themeDark = createMuiTheme({
  palette:{
    type:'dark',  
    primary:{main:'#373737'},
    secondary:{main:'#f4511e'},
  },
  tab:{
    textShadow: '1px 1px rgba(0, 0, 0, 0.87)',
  }

})

const Theme = (props) => {
  
  const {children, darkMode} = props;
  const theme = darkMode ?  themeLight: themeDark
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};


export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props}  darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>  
    );
  };
}