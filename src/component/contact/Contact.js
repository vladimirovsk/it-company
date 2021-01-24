import React from 'react';
import {Container} from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
//import Zoom from 'react-reveal/Zoom';
import './Contact.css'



function Contact(){
    
    // const [goingUp, setGoingUp] = React.useState(false);
    // const prevScrollY = React.useRef(0);
    // const section1 = React.createRef();

  // const onScroll = e => {
  //   // setScrollTop(e.target.documentElement.scrollTop);
  //   // setScrolling(e.target.documentElement.scrollTop > scrollTop);
  // };  
  
  // const handleScroll = (event) => {
  //   // event.preventDefault()
  //   const currentScrollY = window.scrollY;
  //   if (prevScrollY.current < currentScrollY && goingUp) {
  //     setGoingUp(false);
  //   }
  //   if (prevScrollY.current > currentScrollY && !goingUp) {
  //     setGoingUp(true);
  //   }
  //   prevScrollY.current = currentScrollY;
    
  // };

  // React.useLayoutEffect(()=>{
  //   handleScroll();
  //   console.log('section1', section1);
  //   //onScroll();
  //   //event.preventDefault()
  //   window.addEventListener("scroll", handleScroll);
  //   return ()=>window.removeEventListener("scroll", handleScroll);
    
  // })

  return(
      <Container id='contact' fluid={true} className={'Contact'}>
        {/* <Zoom> */}
        <h2>Contact</h2>
        <Parallax className="custom-class" x={[-100, 0]} tagOuter="figure">    
        <div className='TestObject'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. 
        Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra 
        consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non 
        posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem 
        libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat 
        felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus 
        et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum,
         lacinia nulla ac, tincidunt odio.
        </div>
        </Parallax>
        <Parallax className="custom-class" x={[200, -50 ]} tagOuter="figure">    
        <div className='TestObject' style={{left:'5em'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. 
        Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra 
        consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non 
        posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem 
        libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat 
        felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus 
        et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum,
         lacinia nulla ac, tincidunt odio.
        </div>
        </Parallax>
        {/* </Zoom> */}
 
      </Container>
  )
}

export default Contact;