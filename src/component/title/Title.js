import React from 'react';
import {Container} from 'react-bootstrap';
import './Title.css'
import laptop from '../img/laptopDesign.jpg';
import logo from '../../LogoCompany.png';
//import title from '../img/title.jpg'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';


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
    <Container id='home' fluid={true} className={'Title'} 
      style={{
        height:'80vh',  
        backgroundImage: `url(${laptop})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
    <Parallax pages={1.2}>
    <div className='fullscreen_context'>  
      <ParallaxLayer offset={0.9} speed={0.2}>
          {/* <div className='fullscreen_title_parallax _anim-items1'>
            IT COMPANY
          </div>  */}
          <img src={logo} alt='' className='App-logo1' 
            style={{ 
              width: '25%', textShadow: '2px 2px white'}} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3}>
          <div className='fullscreen_text_parallax _anim-items1'>
            Our work is our life
          </div>
      </ParallaxLayer>    
      <ParallaxLayer offset={1} speed={0.4}>
          <div className='fullscreen_text_parallax _anim-items1'>
            We turn your ideas into reality
          </div>
      </ParallaxLayer>  

        </div>
        </Parallax>
      </Container>
  )
}

export default Title;