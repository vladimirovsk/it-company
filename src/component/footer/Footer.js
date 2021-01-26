import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import fb from '../img/fb.png';




function Footer(){
  return(
      <Container id='footer' fluid={true} className='Footer'>
        <Row> 
          <Col lg={3}  sm={12} className='Grid_footer text-left'>
          <div className='Grid_footer_title text-center'>Programming</div>
          <ul>
              <li>Database Design </li>
              <li>WEB page development</li>
              <li>API Aplication</li>
              <li>REST and Micro Services</li>
            </ul>
          </Col>
          
          <Col lg={3}  sm={12}  className='Grid_footer float-left'>
          <div className='Grid_footer_title text-center'>Contact</div>
          <ul>
              <li>31-153 Kraków, </li>
              <li>ul. Szlak 77/222</li>
              <li>email: lisa@it-company.com</li>
              <li>tel +48 881 515 691</li>
            </ul>
          </Col>
          <Col lg={3}  sm={12}  className='Grid_footer'>
          <div className='Grid_footer_title text-center'>Social</div>
          <ul>
          <li><a href="https://www.facebook.com/itvladimirov" 
              style={{
                color: 'white'
              }} target= "_blank" rel= "noopener noreferrer">
            <img src={fb} alt='fb' height='40' style={{marginRight: '10px'}}/ >
              IT-COMPANY
            </a>
          </li>
            
          </ul>
          </Col>
          <Col lg={3} sm={12}  className='Grid_footer'>
          <div className='Grid_footer_title text-center'>Partners</div>

          </Col>
        </Row>  
      </Container>
  )
}

export default Footer;