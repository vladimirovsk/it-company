import React from 'react';
import macbook from '../../macbook-pro.png';
import logo from '../../LogoCompany.png';
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from 'styled-components';
import { Paper } from '@material-ui/core'
import Image from 'material-ui-image'
import { bounce } from 'react-animations';
import { Parallax } from 'react-scroll-parallax';
//import { Parallax} from 'react-parallax';

import './Home.css';
import { DesktopWindows } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    HomeHeader: {
        backgroundImage: {macbook},//"../../macbook-pro.png",
        height: '60em',
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
        width:'200px'
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

    const handleScrool = () => {
        setOffsetY(window.pageYOffset);
        console.log(window.pageYOffset, window.pageXOffset)
    }

    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

    const ParallaxImage = () => (
        <Parallax className={classes.MyLogo} y={[60,100]} x={[-20,0]}>
            <Image className='App-logo' src={logo}  />
        </Parallax>
    );
    React.useEffect(() => {
        window.addEventListener('scrool', handleScrool)

        return () => window.removeEventListener('scrool', handleScrool)

    }, [])

    return (
        <React.Fragment >
            <div className={classes.HomeHeader}>
                TEST
                <ParallaxImage />
                {/* <Bounce><img src={logo} className='App-logo' alt='logo' /> </Bounce> */}
            </div>
            <div style={{ height:'1000px', backgroundColor:'grey', fontSize:'36px'}}>
                Esse officia laboris dolore nostrud laborum sit amet nulla. Laborum ex anim eiusmod nostrud adipisicing do tempor adipisicing duis sunt. 
                Aliqua consectetur eu ipsum sunt sint. In reprehenderit aliquip ut qui non. Cillum commodo ad elit sit in et nostrud aute cillum minim enim consectetur esse. 
                Minim duis nulla magna officia non in dolore aliquip excepteur. Deserunt aute enim ad magna id consectetur laborum.
                Aute magna aliquip amet dolore id cupidatat sunt adipisicing. Cillum irure aliquip sunt cillum sint sunt ad sint aute cillum. 
                Aliquip magna consequat consectetur occaecat excepteur deserunt quis Lorem commodo commodo. Anim esse voluptate laboris amet dolor anim magna commodo.
                Incididunt quis pariatur occaecat magna tempor veniam ut. Officia sint tempor fugiat consectetur aute proident. Adipisicing reprehenderit cillum eiusmod dolor in ullamco 
                adipisicing labore laborum qui Lorem duis.
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
        </React.Fragment>
    )
}

export default Home;

{/* <div style={{ height:'1000px', backgroundColor:'red', fontSize:'36px'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div> */}