import React, {useState} from 'react'
// import {Link, animateScroll as scroll } from "react-scroll";
import {Link } from "react-scroll";
import {translate ,getLanguage, setLanguage } from 'react-switch-lang';
import { makeStyles} from "@material-ui/core/styles";
import {Button,  Menu, MenuItem, } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {withTheme} from '../Theme' 
import { Navbar, Nav, Form } from 'react-bootstrap';

import './Header.css';


 const useStyles = makeStyles((theme) => ({
  buttonLng:{
    //...theme.typography.button,
    outline: 'none',
    width:'5em',
    height:"28px",
  },

  menu: {
   backgroundColor: theme.palette.common.primary,
   color  : theme.typography.caption,//"black",
   borderRadius:'0px',
  
   //"&:hover":{
   //color:"black",
   // },
  },

  menuItem:{
    color  : theme.typography.caption,
   //...theme.typography.tab,
   opacity:0.7,
   borderRadius:'0px',
  },

 }));
//     root: {
//       flexGrow: 1,
//      // color: theme.palette.text.primary,
//       //backgroundColor: theme.palette.background.default,
//     },

//     title: {
//       flexGrow: 1,
//       color: theme.palette.text.primary
//     },

//     tabContainer:{
//       marginLeft: 'auto',
//       },
    
//     leftGroup:{
//       marginLeft: 'auto',
//     },
    
//     tab:{
//         //color:'#fafafa',
//     ...theme.tab,
//         //textShadow: '1px 1px #0000ff',
//         color: theme.palette.secondary.main,
//         minWidth:10,
//         marginLeft:'25px',

//     },
//     appbar:{
//         zIndex: theme.zIndex.modal+1,
//         //backgroundColor: theme.palette.background.paper,
//         //color: theme.palette.text.primary
//         //color: theme.palette.color.default
//       },


//     logoMini:{
//         height:"5em",
//         [theme.breakpoints.down("md")]:{
//           height:"4em"  },
//         [theme.breakpoints.down("sm")]:{
//           height:"3em"  }
//       },

//     logoContainer:{
//         outline: 'none',
//         padding:'10px',
//         "&:hover":{
//           backgroundColor:"transparent"
//         }
//       },
    
//   }));

  // const IOSSwitch  = withStyles((theme)=>({
  //   root: {
  //       width: 42,
  //       height: 26,
  //       padding: 0,
  //       margin: theme.spacing(1),
  //     },
  //   switchBase: {
  //       padding: 1,
  //       '&$checked': {
  //         transform: 'translateX(16px)',
  //         color: theme.palette.common.white,
          
  //         '& + $track': {
  //           backgroundColor: theme.palette.secondary.main,// '#D2691E',
  //           opacity: 1,
  //           border: 'none',
  //         },

  //       },
  //        '&$focusVisible $thumb': {
  //         color: '#9f8240',
  //         border: '6px solid #fff',
  //        },
  //   },

  //   thumb: {
  //     width: 24,
  //     height: 24,
  //   },

  //   track: {
  //     borderRadius: 26 / 2,
  //     border: `1px solid ${theme.palette.grey[800]}`,
  //     //border: `1px solid ${theme.palette.secondary.main}`,

  //     backgroundColor: '#eeeeee',// theme.palette.primary.main,
  //     opacity: 1,
  //     transition: theme.transitions.create(['background-color', 'border']),
  //   },
  //   checked: {},
  //     //focusVisible: {}
  // })) (Switch);

const Header = (props) => {
    const classes = useStyles();
    const [{t}] = useState(props);
    // const theme = useTheme();
    const [anchorEl2, setAnchorEl2] =  useState(null)
    const [openMenu, setOpenMenu] = useState(false)


    // const [value, setValue] = React.useState(0);
    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const matches = useMediaQuery(theme.breakpoints.down("sm"));
    // 
    //const {darkMode, setDarkMode} = props;

    // const scrollToTop = () => {
    //   scroll.scrollToTop();
    // };

    const handleClickLng = (event) => {
      setOpenMenu(true)
      setAnchorEl2(event.currentTarget);
    }

    const handleCloseLng = (event) => {
		  setOpenMenu(false)
	  	setAnchorEl2(null)
  }

  const handleChangeLg = (event, lng) => {
		setLanguage(lng);
		setAnchorEl2(null)
		setOpenMenu(false)
  };

  const autoClose = async(event) => {
      //let element = await document.getElementById("responcive-navbar-nav");
     // await element.classList.toggle("show");
    }
        //  const handleClickNight = (event) =>{
    //   //console.log('PALITTE', theme.palette);
    //   setDarkMode(!darkMode)}

    const lngButton = (
      <React.Fragment>
        <Button 

          // display = 'inline-block'
          border = {0}
          hidden = {false}
          variant="contained"
          color="secondary"
          className={classes.buttonLng}
          onClick={handleClickLng}
          endIcon={<ArrowDropDownIcon/>}
          style={{ outline: '0', outlineOffset: '0'}}
        >
          {getLanguage()}
        </Button>
  
        <Menu
          id="simple-menu-lng"
          anchorEl={anchorEl2}
          keepMounted
          open={openMenu}//{Boolean(anchorEl2)}
          onClose={handleCloseLng}
          classes={{paper: classes.menu}}
          style={{zIndex: 5402 }}
          MenuListProps={{
            onMouseLeave: handleCloseLng
          }}
      >
              <MenuItem onClick={(event) => {handleChangeLg(event, 'en'); setOpenMenu(false)}} className={classes.menuItem}  >EN</MenuItem>
              <MenuItem onClick={(event) => {handleChangeLg(event, 'ru'); setOpenMenu(false)}} className={classes.menuItem}  >RU</MenuItem>
              <MenuItem onClick={(event) => {handleChangeLg(event, 'pl'); setOpenMenu(false)}} className={classes.menuItem}  >PL</MenuItem>
        </Menu>	
      </React.Fragment>
    )

    return (
      <Navbar collapseOnSelect sticky="top" expand="lg" className='navbar'>
        {/* <div className='container'> */}
         {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav>
            <Nav><Link 
              onClick={autoClose}
              activeClass="msactive"
              to="home"
              spy={true}
              href="#home"
              smooth={true}
              offset={-30}
              duration={800}
              className='nav-link'>{t('navbar.glavn')}</Link></Nav>
            <Nav><Link 
              onClick={autoClose}
              activeClass="msactive"
              to="project"
              spy={true}
              href="#project"
              smooth={true}
              offset={-30}
              duration={800}
              className='nav-link'>{t('navbar.project')}</Link></Nav>
            <Nav><Link  
              onClick={autoClose}
              activeClass="msactive"
              to="contact"
              spy={true}
              href="#contact"
              smooth={true}
              offset={-30}
              duration={800}
              className='nav-link'>{t('navbar.kontact')}</Link></Nav>
            <Nav><Link 
              onClick={autoClose}
              to="about"
              spy={true}
              href="#about"
              smooth={true}
              offset={-30}
              duration={800}
              className='nav-link'>{t('navbar.about')}</Link></Nav>
          </Nav>
          </Navbar.Collapse>
        {/* </div>  */}
      <Nav>
        <Form inline>
        {lngButton}
           {/* <IOSSwitch   
            checked={darkMode} 
            onChange={handleClickNight} 
            name="Night" />             */}
          </Form>
          
      </Nav>
      
      </Navbar>
        // <AppBar position="fixed" className={classes.appbar} color="primary">
        //     <Toolbar disableGutters={true}>
        //     {/* <Button component={Link} to="/" onClick={()=>setSelectedIndex(1)}
        //         disableRipple
        //         className={classes.logoContainer}> 
        //         <img alt="logo" src={iconLogo} className={`${classes.logoMini} logoMini`} />
        //     </Button>
        //      <Typography variant="h6" color="inherit">
        //         IT COMPANY
        //     </Typography>  */}
        //     <Link to='/home'>HOME</Link>
        //     <Link to='/project'>PROJECT</Link>
        //     <Link to='/p404'>CONTACT</Link>
        //     <Link to='/about'>ABOUNT</Link>
            
        //     {/* {matches ? null : tabs} */}
        //     <FormGroup className={classes.tabContainer}>
        //             <FormControlLabel
        //                 control={<IOSSwitch  
        //                   checked={darkMode} 
        //                   onChange={handleClickNight} 
        //                   name="Night" />}
                        
        //                 //label={getLanguage().toUpperCase()}
        //             />
        //     </FormGroup>  
        // </Toolbar>
        // </AppBar>    
    )
}

export default withTheme(translate(Header));