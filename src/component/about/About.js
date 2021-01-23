import React from 'react';
import {Container} from 'react-bootstrap';
import './About.css'



function About(){
  return(
      <Container id='about' fluid={true} className={'About'}>
        <h2>About</h2>
      </Container>
  )
}

export default About;