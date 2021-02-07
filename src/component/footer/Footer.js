import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import fb from '../../assets/img/fb.png';




function Footer(){
  return(
    <Container fluid={true} style={{fontFamily: 'Raleway' ,backgroundColor:'#000'}}>
      <Container id='footer' fluid={'sm'} className='Footer pt-5' >
        <Row>

          <Col sm={12}  md={4} className='Grid_footer text-left'>
          <div className='Grid_footer_title text-left'>PROGRAMMING</div>
          <ul>
              <li>Database Design </li>
              <li>WEB page development</li>
              <li>API Aplication</li>
              <li>REST and Micro Services</li>
            </ul>
          </Col>
          
          <Col sm={12}  md={4} className='Grid_footer float-left'>
          <div className='Grid_footer_title text-left'>CONTACT</div>
          <ul>
              <li>31-153 Kraków, </li>
              <li>ul. Szlak 77/222</li>
              <li>email: <a href="mailto:lisa@webnit.pl?subject=From Web page WebNit&amp;body=Hello, " style={{color: 'white'}} >lisa@webnit.pl</a></li>
              <li>tel: <a href="tel:+48881515691" style={{color: 'white'}} >+48 881 515 691</a></li>
            </ul>
          </Col>

          <Col sm={12}  md={4} className='Grid_footer'>
          <div className='Grid_footer_title text-left'>SOCIAL</div>
          <ul>
          <li><a href="https://www.facebook.com/itvladimirov" 
              style={{color: 'white'}} target= "_blank" rel= "noopener noreferrer">
            <img src={fb} alt='fb' height='40' style={{marginRight: '10px'}}/ >
            webnit.pl
            </a>
          </li>  
          </ul>
          </Col>

          {/* <Col lg={3} sm={12}  className='Grid_footer'>
          <div className='Grid_footer_title text-center'>PARTHERS</div>

          </Col> */}
        </Row>  
        <Row>
          <Col md={12} className='Grid_footer_copyright'>
            <p>Copyright &copy; 2021 by <a href='/' >Web NIT </a></p>
                    {/* <p>Nasza strona wykorzystuje pliki cookie. 
                      <a href="polityka_prywatnosci.html">Polityka prywatności</a></p> */}
          </Col>
        </Row>  
      </Container>
      </Container>
  )
}

export default Footer;