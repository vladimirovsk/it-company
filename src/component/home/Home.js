import React from 'react';
import macbook from '../../macbook-pro.png';
import logo from '../../LogoCompany.png';
import { makeStyles, useTheme} from "@material-ui/core/styles";
import styled, { keyframes } from 'styled-components';
import {Paper} from '@material-ui/core'
//import Image from 'material-ui-image'
import { bounce } from 'react-animations';

//import { Parallax} from 'react-parallax';

import './Home.css';
import { DesktopWindows } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    HomeHeader: {
       backgroundImage: {macbook},//"../../macbook-pro.png",
       height: '70em',
       //textAlign: 'center',
      // justifyContent: 'center',
       //marginTop:'1em',
       //display: 'flex',
       //flexDirection: 'column',
       //alignItems: 'center',
       //color: '#000000 ',
       backgroundColor: '#eeeeee'//theme.palette.primary.main,
   }  
 }));

 const insideStyles = {
    background: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    position: "relative",
    transform: "translate(-50%,-50%)"
  };
  

  const Home = () => {
    const classes = useStyles();
    const [offsetY, setOffsetY] = React.useState(0);
    const handleScrool = () =>{
        setOffsetY(window.pageYOffset);
    }
    
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

    React.useEffect(()=>{
        window.addEventListener('scrool',handleScrool)

        return() => window.removeEventListener('scrool', handleScrool)

    }, [])

    return(
        <React.Fragment>
            <Paper >

                <Bounce><h2 style={{color:'#fff'}}>IT COMPANY</h2></Bounce>
            </Paper>
        </React.Fragment>
    )
}

export default Home;

{/* <div style={{ height:'1000px', backgroundColor:'red', fontSize:'36px'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div> */}