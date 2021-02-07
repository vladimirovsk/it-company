import React, {useState} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
//import Zoom from 'react-reveal/Zoom';
import './Contact.css'
import Lisa from './Lisa.jpg'
import Sergey from './Sergey.jpg'
//import bg_contact from './bg_contact.jpg';
import {translate} from "react-switch-lang";


function Contact(props) {
    
  const [{t}] = useState(props);

  React.useEffect(()=>{
    const animItems = document.querySelectorAll('._anim-items')  
    if (animItems.length>0){
      window.addEventListener('scroll', animOnScroll);
      
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top:rect.top+scrollTop, left: rect.left+scrollLeft }
      }
      function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
          
          let animItemPoint = window.innerHeight - animItemHeight / animStart
          if (animItemHeight>window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart
          }
          if (( window.pageYOffset > animItemOffset - animItemPoint ) && window.pageYOffset < (animItemOffset+animItemPoint)){
          animItem.classList.add('_active')
          }else{
          animItem.classList.remove('_active') 
          }
        }
      } 


      animOnScroll();
    } 

    //return () => window.removeEventListener('scroll', animOnScroll);
    
   
  },[])


  return(

      <Container id='contact' fluid={true} className={'Contact'} >
       {/* <div className='contact_out _anim-item'> */}
         <Row>
           <Col md={2}/>
           <Col md={4}> 
             <Card className='CardContact text-center _anim-items'> 
              <Card.Img className='Photo' variant="top" src={Lisa} />
              <Card.Body>
                <Card.Title className='CardContact_title'>{t('contact.lisa.fio')}</Card.Title>
                <Card.Text className='CardContact_title'>
                {t('contact.lisa.text')}
                </Card.Text> 
              </Card.Body>
              <a href="mailto:lisa@webnit.pl?subject=From Web page WebNit&amp;body=Hello, " style={{color: 'white'}} >lisa@webnit.pl</a>
            </Card>

          </Col>
          <Col md={4}>
          <Card className="CardContact text-center _anim-items">
              <Card.Img className='Photo' variant="top" src={Sergey} />
              <Card.Body>
                <Card.Title className='CardContact_title'>{t('contact.sergey.fio')}</Card.Title>
                <Card.Text className='CardContact_text'>
                {t('contact.sergey.text')}
                </Card.Text > 
              </Card.Body>
              <a href="mailto:sergey@webnit.pl?subject=From Web page WebNit&amp;body=Hello," style={{color: 'white'}}>sergey@webnit.pl</a>
            </Card>
          </Col>
          <Col md={2}/>
          
         </Row>
      {/* </div> */}
      </Container>
  )
}

export default translate(Contact);