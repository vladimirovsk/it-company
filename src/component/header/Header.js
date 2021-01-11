import React from 'react'
import { makeStyles, useTheme} from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import iconLogo from '../../LogoCompany.png';
import {AppBar, Toolbar, Link, Button, Tabs, Tab,  Switch } from '@material-ui/core'
import {FormControlLabel, FormGroup, Typography } from '@material-ui/core'
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import {ThemeContext} from '../../context/themeContext';
import {green} from '@material-ui/core/colors'
import {withTheme} from '../Theme' 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     // color: theme.palette.text.primary,
      //backgroundColor: theme.palette.background.default,
    },

    title: {
      flexGrow: 1,
      color: theme.palette.text.primary
    },

    tabContainer:{
      marginLeft: 'auto',
      },
    
    leftGroup:{
      marginLeft: 'auto',
    },
    
    tab:{
        //color:'#fafafa',
    ...theme.tab,
        //textShadow: '1px 1px #0000ff',
        color: theme.palette.secondary.main,
        minWidth:10,
        marginLeft:'25px',

    },
    appbar:{
        zIndex: theme.zIndex.modal+1,
        //backgroundColor: theme.palette.background.paper,
        //color: theme.palette.text.primary
        //color: theme.palette.color.default
      },


    logoMini:{
        height:"5em",
        [theme.breakpoints.down("md")]:{
          height:"4em"  },
        [theme.breakpoints.down("sm")]:{
          height:"3em"  }
      },

    logoContainer:{
        outline: 'none',
        padding:'10px',
        "&:hover":{
          backgroundColor:"transparent"
        }
      },
    
  }));

  const IOSSwitch  = withStyles((theme)=>({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
    switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          
          '& + $track': {
            backgroundColor: theme.palette.secondary.main,// '#D2691E',
            opacity: 1,
            border: 'none',
          },

        },
         '&$focusVisible $thumb': {
          color: '#9f8240',
          border: '6px solid #fff',
         },
    },

    thumb: {
      width: 24,
      height: 24,
    },

    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[800]}`,
      //border: `1px solid ${theme.palette.secondary.main}`,

      backgroundColor: '#eeeeee',// theme.palette.primary.main,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
      //focusVisible: {}
  })) (Switch);


const Header = (props) => {
    const [value, setValue] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    const {darkMode, setDarkMode} = props;

    const tabs = (
        <Tabs 
          aria-label="tabsPages"
          className={classes.tabContainer} 
          value={value} 
          onChange={null}
          indicatorColor="secondary"
          scrollButtons="auto"
          color='primary'
          //color='#fafafa'
        >
        <Tab
            className={classes.tab} 
            selected ={value === 0}
            component={Link}  
            to='/'
            label='HOME'
            onClick={()=>setValue(0)} 
        />
        <Tab 
        selected ={value === 1}
        className={classes.tab} 
        component={Link} 
        to='/Project' 
        label='ABOUT'
        onClick={()=>setValue(1)}

            //aria-haspopup="true"
        //      aria-controls="simple-menu"
            //      aria-owns={anchorEl}
            //      aria-haspopup={anchorEl ? "true": undefined}
            //     onMouseOver={(event) => handleClick(event)}
            //onClick={(event) => handleClick(event)}
            //icon={<ArrowDropDownIcon/>}
        //      wrapped={false}

        />
        <Tab 
          selected ={value === 2}
          className={classes.tab} 
          component={Link} 
          to='/about' 
         label ='SERVICES'
         onClick={()=>setValue(2)}
        />
    
        <Tab 
          selected ={value === 3}
          hidden = {false}
         //hidden={props.isAuth}
         className={classes.tab} 
         component={Link} 
         //to={isAuth ?'/logout' :'/auth'} 
          label ='OUR PROJECT'
          onClick={()=>setValue(3)}
        />
       </Tabs>        
    )

     const handleClickNight = (event) =>{
      console.log('PALITTE', theme.palette);
      setDarkMode(!darkMode)}

    return (
        <AppBar position="fixed" className={classes.appbar} color="primary">
            <Toolbar disableGutters={true}>
            <Button component={Link} to="/" onClick={()=>setSelectedIndex(1)}
                disableRipple
                className={classes.logoContainer}> 
                <img alt="logo" src={iconLogo} className={`${classes.logoMini} logoMini`} />
            </Button>
             <Typography variant="h6" color="inherit">
                IT COMPANY
            </Typography> 
            
            {matches ? null : tabs}
            <FormGroup className={classes.tabContainer}>
                    <FormControlLabel
                        control={<IOSSwitch  
                          checked={darkMode} 
                          onChange={handleClickNight} 
                          name="Night" />}
                        
                        //label={getLanguage().toUpperCase()}
                    />
            </FormGroup>  
        </Toolbar>
        </AppBar>    
    )
}

export default withTheme(Header);