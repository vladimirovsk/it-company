import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Title.css'

import laptop from '../../assets/img/pust.jpg';
import logo from '../../assets/img/W.png';
import {translate} from "react-switch-lang";
import ScrollAnimation from 'react-animate-on-scroll';

function Title(props){
  const [{t}] = useState(props);
  const [source, setSource] = React.useState(laptop)


  React.useEffect(() => {
    const img = new Image()
    img.src = laptop
    img.onload = () => setSource(laptop)
}, [laptop]);
  // React.useEffect(()=>{
  //   const animItems = document.querySelectorAll('._anim-items')  
  //   if (animItems.length>0){
  //     window.addEventListener('scroll', animOnScroll);
      
  //     function offset(el) {
  //       const rect = el.getBoundingClientRect(),
  //       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //       return { top:rect.top+scrollTop, left: rect.left+scrollLeft }
  //     }
  //     function animOnScroll(){
  //       for (let index = 0; index < animItems.length; index++) {
  //         const animItem = animItems[index];
  //         const animItemHeight = animItem.offsetHeight;
  //         const animItemOffset = offset(animItem).top;
  //         const animStart = 4;
          
  //         let animItemPoint = window.innerHeight - animItemHeight / animStart
  //         if (animItemHeight>window.innerHeight){
  //           animItemPoint = window.innerHeight - window.innerHeight / animStart
  //         }
  //         if (( window.pageYOffset > animItemOffset - animItemPoint ) && window.pageYOffset < (animItemOffset+animItemPoint)){
  //         animItem.classList.add('_active')
  //         }else{
  //         animItem.classList.remove('_active') 
  //         }
  //       }
  //     } 


  //     animOnScroll();
  //   } 

  //   //return () => window.removeEventListener('scroll', animOnScroll);
    
   
  // },[])
    // style={{  
    //   backgroundImage: `url(${source})`,
    //   backgroundPosition: 'right',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //    backgroundAttachment:''
    //   }}> 


  return(
    <div className='imageTitle' style={{  
         backgroundImage: `url(${source})`
    }}>


    <Container id='home' fluid={true} className={'Title'}>
     
    <Row className={'rowTitle'} >

    <Col sm={12} md={6} className='logoTitle'>
        {/* <img src={logo} width='150px' alt='logo' /> */}
    </Col>  

     <Col sm={12} md={6} className='textTitle'>
          <div className='fullscreen_text _anim-items1' style={{fontSize: '4em', fontWeight: '400'}} >
            {t('deviz.text1')}
          </div>

       <ScrollAnimation animateIn='animate__fadeIn'  animateOnce={false} delay={500}> 
          <div className='fullscreen_text2 _anim-items1' style={{fontSize: '2em', fontWeight: '400'}}>
          {t('deviz.text2')}
          </div>
        </ScrollAnimation>
      </Col>  
    </Row>  
    </Container>
   </div> 
  )
}

export default translate(Title);