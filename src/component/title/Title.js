import React from 'react';
import {Container} from 'react-bootstrap';
import './Title.css'
import laptop from '../img/laptopDesign.jpg'
//import title from '../img/title.jpg'


function Title(){


   

  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top:rect.top+scrollTop, left: rect.left+scrollLeft }
  }

  React.useEffect(()=>{
    const animItems = document.querySelectorAll('._anim-items')  
    if (animItems.length>0){
      window.addEventListener('scroll', animOnScroll);
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
          if (( window.pageYOffset >= animItemOffset - animItemPoint ) && window.pageYOffset <= (animItemOffset+animItemPoint)){
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
  return(      <Container id='home' fluid={true} className={'Title'} 

      style={{
        height:'80vh',  
        backgroundImage: `url(${laptop})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <div className='fullscreen_context'>  
          <div className='fullscreen_title _anim-items'>
            IT COMPANY
          </div>
          <div className='fullscreen_text _anim-items'>
            Our work is our life
          </div>
          <div className='fullscreen_text2 _anim-items'>
            We turn your ideas into reality
          </div>
        </div>
      </Container>
  )
}

export default Title;