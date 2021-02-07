import React , {useState}from 'react';
import clsx from 'clsx';
import {Container} from 'react-bootstrap';
import {Avatar, IconButton, Card, CardActions, CardHeader, Grid, Typography, CardContent, Button } from "@material-ui/core";
import {List, ListItem} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import {Button, Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {translate} from "react-switch-lang";

import restApi from '../../assets/img/REST_API.png'; 
import imgNit from '../../assets/img/nit.png'; 
import avr from '../../assets/img/AVR.png'; 
import gkh from '../../assets/img/GKH.png'; 
import imgNodeJs from '../../assets/img/node.png'
import imgArduino from '../../assets/img/arduino.png'
import imgDelphi from '../../assets/img/delphi.png'
import imgUP1 from '../../assets/img/atmega.jpg'
import impReact from '../../assets/img/react.png'
import webdesign from '../../assets/img/webdesign2.png';
import okt1 from '../../assets/img/OKT1.png';
import okt2 from '../../assets/img/OKT2.png';

import nit1 from '../../assets/img/NIT1.png';
import nit2 from '../../assets/img/NIT2.png';
import nit3 from '../../assets/img/NIT3.png';

import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles} from "@material-ui/core/styles";
import './Project.css'


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Raleway'
  } ,


  projectCard:{
    //   position:'absolute',
      boxShadow: theme.shadows[10],
      fontFamily: 'Raleway',
      borderRadius: 15,
  },
  avatar: {
      backgroundColor: '#202020',//theme.palette.common.colorSecondary,
      boxShadow: theme.shadows[10],
      fontFamily: 'Raleway'
    },
    expand: {
      //backgroundColor: theme.palette.secondary,
      backgroundColor: '#f4511e',
      //WebkitTapHighlightColor: 'transparent',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      //style={{ outline: '0', outlineOffset: '0', backgroundColor: '#f4511e'}}
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
       "&:hover":{
        backgroundColor: '#F5683C',
        boxShadow: theme.shadows[10],
        },

    },
    expandOpen: {
      //WebkitTapHighlightColor: 'transparent',
      outline: 'none',
      transform: 'rotate(180deg)',
      backgroundColor: '#f4511e',
    }
}));

function Project(props){
  const classes = useStyles();
  const [{t}] = useState(props);
  //const [openDlg, setOpenDlg] = useState(props);
  const [expanded0, setExpanded0] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);

  const handleClick = () => {

  }

  const handleExpandClick = (event) => {
    switch (event.currentTarget.id) {
        case '0': 
        setExpanded0(!expanded0);
       break;
        case '1': 
           setExpanded1(!expanded1);
          break;
        case '2': 
            setExpanded2(!expanded2);
           break;  
        case '3': 
           setExpanded3(!expanded3);
          break;           
        case '4': 
          setExpanded4(!expanded4);
         break;           
          default: 
            console.log('Not find id element: '+event.currentTarget.id);   
  }
}


function raiseInvoiceClicked() {
  const url = 'https://drive.google.com/file/d/0B7gHNdjZ_HOscGJ3M1ZyXzRQbVU/view?usp=sharing';
  //https://docs.google.com/document/d/1p78v4zjbJ-2rgdtp6taDgCFi65i3VRqmOvInCF-rvCk/edit?usp=sharing
  window.open(url, '_blank');
}


function openPymentSystem() {
    const url = 'https://docs.google.com/document/d/1p78v4zjbJ-2rgdtp6taDgCFi65i3VRqmOvInCF-rvCk/edit?usp=sharing';
    //
    window.open(url, '_blank');
  }


  return(
    <Container fluid={true} style={{backgroundColor:'#202020'}}>  
      <Container id='project' fluid={true} className={'Project'}>   
            <Grid container 
                style={{
                    height: '100%',
                    left: 0,
                    top: 0,
                    marginRight: '2em',
                    padding: '0em',
                    paddingTop: '2em', 
                    paddingBottom: '2em', 
                    backgroundColor: '#202020',
                    fontFamily: 'Raleway'
                    }} 
                    
                    spacing={2} 
                    alignItems='center' 
                    justify='center' 
    >
{/*----Zero Cards --------------------------------*/}
                    <Grid item md={12}>
                        <ScrollAnimation animateIn='animate__slideInLeft' animateOnce={true}>
                        <Card className={classes.projectCard}> 
                            <CardHeader style={{fontFamily: "Raleway"}}
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={impReact}/>
                                }
                                title = {t('project.row0.title')}
                                subheader = 'React JS, Meterial-UI, Bootstrap, css'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                            <CardContent style={{fontFamily: "'Raleway', sans-serif"}}>
                                <Grid container direction='row'>
                                    <Grid item md={2}>
                                        <img  width={160} height={100} alt={t('project.row0.title')} className="mr-3" src={webdesign} />
                                    </Grid>
                                    <Grid item md={10}>
                                        <Typography className='myText' variant='body1' paragraph align='justify' 
                                        style={{fontFamily: 'Raleway'}}
                                        >{t('project.row0.text')}</Typography>
                                    </Grid>    
                                </Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    disabled={true}
                                    id='0'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded0,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded1}
                                    aria-label="show more"
                                    style={{ outline: '0', outlineOffset: '0'}}
                                    >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                                <Collapse in={expanded0} timeout="auto" unmountOnExit>
                                  <CardContent>
                                    <List>
                                      <ListItem>
                                      </ListItem>
                                      <ListItem>
                                      </ListItem>
                                    </List>
                                  </CardContent>
                                </Collapse>
                        </Card>
                        </ScrollAnimation>
                    </Grid>
{/*----One Cards --------------------------------*/}
                    <Grid item md={12} >
                        <ScrollAnimation animateIn='animate__slideInRight'  animateOnce={true}>
                        <Card className={classes.projectCard}>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgNodeJs}/>
                                }
                                title = {t('project.row1.title')}
                                subheader = 'Node JS'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />

                            <CardContent>
                            <Grid container direction='row'>
                                    <Grid item md={2}>
                                        <img  width={150} height={110} alt={t('project.row1.title')} className="mr-3" src={restApi} />
                                    </Grid>
                                    <Grid item md={10}>
                                        <Typography variant='body1' paragraph align='justify'
                                        style={{fontFamily: 'Raleway'}}
                                        >{t('project.row1.text')}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="outlined" size="small" color="secondary" hidden={true} onClick={handleClick()}>
                                {t('project.row1.documents')}
                                </Button>
                                <IconButton
                                    disabled={true}
                                    id='1'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded1,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded1}
                                    aria-label="show more"
                                    style={{ outline: '0', outlineOffset: '0'}}
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
                    </Grid>
{/*----Two Cards --------------------------------*/}
                    <Grid item md={12} >
                        <ScrollAnimation animateIn='animate__slideInLeft' animateOnce={true}>
                        <Card className={classes.projectCard}>
                        <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                  src={imgDelphi}
                                  />
                                }
                                title = {t('project.row2.title')}
                                subheader = 'Delphi'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />

                        <CardContent>
                            <Grid container>
                                <Grid item md={2} >
                                    <img  width={160} height={120} alt={t('project.row2.title')} className="mr-3" src={imgNit} style={{padding:10}}/>
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'
                                    style={{fontFamily: 'Raleway'}}
                                    >{t('project.row2.text')}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions disableSpacing>
                        <Button variant="outlined" size="small" color="secondary" onClick={openPymentSystem}>
                                {t('project.row4.documents')}
                                </Button>
                                <IconButton
                                    disabled={false}
                                    id='2'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded2,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded2}
                                    aria-label="show more"
                                    style={{ outline: '0', outlineOffset: '0'}}
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography variant='h5' align='center' 
                                style={{fontFamily: 'Raleway'}}
                                >{t('project.row4.colapseTitle')}</Typography>
                                    <Grid container style={{padding:20}}>
                                    <Grid item>
                                            <Grid container >
                                                <Grid item md={4}>                                
                                                <img style={{marginBottom:15, padding:10}} width={'80%'} src={nit1} alt='NIT1'/>
                                                <img style={{marginBottom:15, padding:10}} width={'80%'} src={nit2} alt='NIT2'/>
                                                <img style={{marginBottom:15, padding:10}} width={'80%'} src={nit3} alt='NIT3'/>
                                                </Grid>  
                                                <Grid item md={8}>
                                                    <ul>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row2.colapseText.row1')}</li>
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row2.colapseText.row2')}</li>
                                                    </Typography> 
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row2.colapseText.row3')}</li>
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row2.colapseText.row4')}</li>
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row2.colapseText.row5')}</li>
                                                    </Typography>
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                    </Grid>
                                    </CardContent>
                            </Collapse>
                        </Card>
                      </ScrollAnimation>
                    </Grid>
{/*----Three Cards --------------------------------*/}
                    <Grid item md={12} >
                        <ScrollAnimation animateIn='animate__slideInRight' animateOnce={true}>
                        <Card className={classes.projectCard}>
                        <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgArduino} />
                                }
                                title = {t('project.row3.title')}
                                subheader = 'Atmel C++, PHP, HTML'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                        <CardContent>
                            <Grid container>
                                <Grid item md={2}>
                                    <img  width={150} height={130} alt={t('project.row3.title')} className="mr-3" src={avr} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'
                                    style={{fontFamily: 'Raleway'}}
                                    >{t('project.row3.text')}</Typography>
                                </Grid>
                            </Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    id='3'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded3,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded3}
                                    aria-label="show more"
                                    style={{ outline: '0', outlineOffset: '0'}}
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant='h5' align='center'
                                    style={{fontFamily: 'Raleway'}}
                                    >{t('project.row3.colapseTitle')}</Typography>
                                    <Grid container style={{padding:20}}>
                                    <Grid item>
                                            <Grid container >
                                                <Grid item md={4}>
                                                    <img style={{marginBottom:15, padding:10}} width={'80%'} src={imgUP1} alt='UP1'/>
                                                </Grid>  
                                                <Grid item md={8}>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        {t('project.row3.colapseText.row1')}
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        {t('project.row3.colapseText.row2')}
                                                    </Typography> 
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        {t('project.row3.colapseText.row3')}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                    </Grid>
                                    </CardContent>
                                    
                            </Collapse>

                        </Card>
                        </ScrollAnimation>     
                    </Grid>
{/*----Fourth Cards --------------------------------*/}
                    <Grid item md={12} >
                        <ScrollAnimation animateIn='animate__slideInLeft' animateOnce={true} >
                        <Card className={classes.projectCard}>
                        <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgDelphi}
                                >
                                </Avatar>
                                }
                                title = {t('project.row4.title')}
                                subheader = 'Delphi'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                        <CardContent>
                            <Grid container>
                                <Grid item md={2}>
                                    <img  width={150} height={150} alt={t('project.row4.title')} className="mr-3" src={gkh} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'
                                    style={{fontFamily: 'Raleway'}}
                                    >{t('project.row4.text')}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions disableSpacing>
                                <Button variant="outlined" size="small" color="secondary" onClick={raiseInvoiceClicked}>
                                {t('project.row4.documents')}
                                </Button>
                                <IconButton
                                    id='4'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded4,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded4}
                                    aria-label="show more"
                                    style={{ outline: '0', outlineOffset: '0'}}
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography variant='h5' align='center' style={{fontFamily: 'Raleway'}}>{t('project.row4.colapseTitle')}</Typography>
                                    <Grid container style={{padding:20}}>
                                    <Grid item>
                                            <Grid container >
                                                <Grid item md={4}>                                
                                                <img style={{marginBottom:15, padding:10}} width={'80%'} src={okt1} alt='OKT1'/>
                                                <img style={{marginBottom:15, padding:10}} width={'80%'} src={okt2} alt='OKT2'/>
                                                </Grid>  
                                                <Grid item md={8}>
                                                    <ul>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row4.colapseText.row1')}</li>
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row4.colapseText.row2')}</li>
                                                    </Typography> 
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row4.colapseText.row3')}</li>
                                                    </Typography>
                                                    <Typography paragraph align='justify' style={{fontFamily: 'Raleway'}}>
                                                        <li>{t('project.row4.colapseText.row4')}</li>
                                                    </Typography>
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                    </Grid>
                                    </CardContent>
                            </Collapse>
                        </Card>
                       </ScrollAnimation>
                    </Grid>
        </Grid >
      </Container>
  </Container>    
  )
}

export default translate(Project);
