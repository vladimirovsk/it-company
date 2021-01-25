import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './About.css'

import vsc from '../img/vsc1.jpg'
import db from '../img/DatabaseDesign2.jpg'


function About(){
  return(
      <Container id='about' fluid={true} className={'About'}>
       <Row >
          <Col className='Grid' md={12} lg={6} style={{        
                backgroundImage: `url(${db})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
         
          </Col>
          <Col className='Grid' md={12} lg={6} style={{backgroundColor:'whitesmoke'}}></Col>
        </Row>  
        <Row >
          <Col className='Grid' md={12} lg={6} style={{backgroundColor:'whitesmoke'}}></Col>
          <Col className='Grid' md={12} lg={6} style={{        
                backgroundImage: `url(${vsc})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
         
          </Col>
        </Row>  
      </Container>
  )
}

export default About;