import React from 'react';
import './P404.css';
import logo from '../../LogoCompany.png';
import {Typography} from '@material-ui/core'
import { makeStyles, useTheme} from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import {withTheme} from '../Theme'

const useStyles = makeStyles((theme) => ({
     AppHeader: {
        height: '60em',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop:'1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000 ',
        backgroundColor: '#eeeeee'//theme.palette.primary.main,
    }  
  }));

const P404 = (props) => {
    //const theme = useTheme();
    const classes = useStyles();
    return (
        <Paper className={classes.AppHeader}>      
            <img src={logo} className="App-logo" alt="logo" />
            <code>
              <Typography variant="h3" component="h3" >
                Przepraszam.<br/>
      	        Strona w budowie
              </Typography>
            </code>       
        </Paper>     
    )
}

export default withTheme(P404)