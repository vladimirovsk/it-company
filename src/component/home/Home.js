import React from 'react';
import macbook from '../../macbook-pro.png';
import laptopItservis from '../img/laptopItservis.jpg';
import logo from '../../LogoCompany.png';
import react from '../img/react.png';
import nodejs from '../img/nodejs.png';
import arduino2 from '../img/arduino2.png';
import delphi from '../img/delphi.png';
import html from '../img/html.png';
import vm from '../img/vm.png';
import sql from '../img/sql.png';
import sql2 from '../img/sql2.png';
import angular from '../img/angular.png';
import s1 from '../img/1c.png';
import rest from '../img/REST.png';
import network4 from '../img/network4.jpg';

import imgDatabase from '../img/database.jpg';
import imgServer from '../img/servers.jpg';
//import imgRest from '../img/REST.png';
import imgWebDev from '../img/webdev.jpg';
import {withTheme} from '../Theme' 



import { makeStyles, useTheme} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
//import styled, { keyframes } from 'styled-components';
//import { Paper } from '@material-ui/core'
//import Image from 'material-ui-image'
//import { bounce } from 'react-animations';
//import { Parallax } from 'react-scroll-parallax';
//import { Parallax} from 'react-parallax';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import './Home.css';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

//const urlNetwork = url('https://www.lfnetworking.org/wp-content/uploads/sites/55/2017/12/cog_bg_networking.jpg')
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>









const Home = (props) => {

  const useStyles = makeStyles((theme) => ({
    HomeHeader: {
        backgroundImage: {macbook},//"../../macbook-pro.png",
        //height: '60em',
       // width: '100%',
        //textAlign: 'center',
        //justifyContent: 'center',
        marginTop: '6em',
        display: 'relative',
        //flexDirection: 'column',
        //alignItems: 'center',
        color: '#000000 ',
        //backgroundColor: '#eeeeee'//theme.palette.primary.main,
    },
    MyLogo:{
        height: '200px',
        width:'200px',
        backgroundColor: 'transparent',
        position: "relative",
    },
    imgMacbok:{
        backgroundColor: 'transparent',
        position: "relative",
        height:'200%'
    },
    cardMedia:{
      paddingTop: "56.25%",
      //borderRadius: theme.spacing(2), // 16px   
      boxShadow: '0px 4px 4px rgba(34, 35, 58, 0.2)',
        //position: 'relative'
    },
    
    CardContent:{
          margin:'auto',
          maxWidth: 500,
          //paddingBottom: theme.spacing(2),
          flexGrow:1, 
          
          //heigh:500
    },

    cardGrid:{
          // 16px
          //transition: '0.3s',
          //boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
          //position: 'relative',
          //maxWidth: 500,
          //marginLeft: 'auto',
          //overflow: 'initial',
          
          //background: theme.palette.primary.main, //'#ffffff',
          display: 'flex',
          flexDirection: 'column',
          //alignItems: 'left',
          //paddingBottom: 100,
          //marginTop: theme.spacing(4)
    },
    cardItem:{
      borderRadius: theme.spacing(2),  
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      //paddingBottom: theme.spacing(2),
      //marginBottom:theme.spacing(4),
      "&:hover":{
          //color: "red"
          boxShadow: '0px 14px 14px rgba(34, 35, 58, 0.4)',
        }
    },

}));
    //const theme = useTheme();
    const classes = useStyles();
    const [darkMode, setDarkMode] = React.useState(props)

    const cards = [
      {id:"1",
      title:'Database Development',
      text:'One of the main directions of our work is the development of databases and database management systems (DBMS). We work with databases of various architectures (MySQL, MSSQL, Interbase, Firebird, Postgresql). The development of the software interface is carried out at the request of the customer on more convenient software for him, both for the Web interface and for the operating system API.',
      img: imgDatabase
      },
    
      {
      id:"2",
      title:'Protocol API Development',
      text:'Development and use of REST requests in payment systems, in information collection systems of electronic metering devices, as well as the organization of dispatching',
      img: imgServer
    },
    {
      id:"3",
      title:"WEB Development",
      text:"In today's world it is no longer possible to do without Web applications. I am engaged in FullStack development of Web applications to present your products and services to a wide audience, creating attractive and functional websites.",
      img: imgWebDev
    }]
    
    const infoGrid = (
      <Container className={classes.cardGrid}>
            <Grid container spacing={4} justify='center'>
                    {cards.map ((card)=> (
                        <Grid item key={card.id} xs={12} md={4} lg={4}>
                            <Card className={classes.cardItem}>
                            <CardMedia 
                                    className={classes.cardMedia}
                                    image={card.img}
                                    //title="image card"
                            />
                                <CardContent  className={classes.cardContext}>
                                    <Typography variant="h5" gutterBottom align='center'>
                                        {card.title}
                                    </Typography>
                                    <Typography paragraph gutterBottom align='justify'>
                                        {card.text}
                                    </Typography>
                                </CardContent>
                            </Card>    
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
    
    React.useEffect(()=>{
      console.log('HOME', darkMode)
      setDarkMode(darkMode)
  }, [darkMode])

    return (
      
        <React.Fragment >

      
        {/*<div style={{height: '100px', backgroundImage:`${laptopItservis}`}}>
        </div>*/}
        <Parallax  pages={3}> {/*ref={ref => (parallax = ref)}*/}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#242424' }} /> 
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#242424' }} /> 
         {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage:  url('stars', true), backgroundSize: 'cover' }} /> */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
             {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />  */}
            <img src={logo} alt='' className='App-logo1' style={{ width: '10%', marginLeft: '5%' }} />
            {infoGrid}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.6, backgroundColor: 'transparent' }}>
          <img src={react} alt='' style={{  display: 'block', backgroundColor: '#transparent', width: '10%', marginLeft: '55%' }} />
          <img src={nodejs} alt='' style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.5 }}>
          <img src={html} alt='' style={{ display: 'block', width: '10%', marginLeft: '70%' }} />
          <img src={angular} alt='' style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.6}}>
          <img src={sql} alt='' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={s1} alt='' style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={sql2} alt='' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={sql} alt='' style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={arduino2} alt='' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={delphi} alt='delphi' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={vm} alt='vm'style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          {/* <img  src={network4} style={{ width: '60%' }} alt='footer'/> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: `${network4}`
          }}
          >
        </ParallaxLayer>    
        <ParallaxLayer
          offset={0}
          speed={0.9}
          //onClick={() => props.parallax.scrollTo(1)}
          style={{ display: 'flex', position:'sticky', margin: '0', top:'0px', left:'0px', backgroundImage:`${laptopItservis}`,
          alignItems: 'center', justifyContent: 'center'}}>
          <img src={macbook} alt='laptop' style={{ width: '75%',  }} /> 
          {/* {url('server')} */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.4}
          speed={0.3}
          //onClick={() => props.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     

           <img src={url('bash')} style={{ width: '40%' }} /> 
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-1.0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          //onClick={() => props.parallax.scrollTo(0)}
          >
          <img src={url('clients-main')} style={{ width: '40%' }} /> 
        </ParallaxLayer>
    
            </Parallax>
        
        </React.Fragment>
    )
}

export default withTheme(Home);

