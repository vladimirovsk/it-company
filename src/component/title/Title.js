import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './Title.css'
import laptop from '../../assets/img/laptopDesign.jpg';
import logo from '../../LogoCompany.png';
//import title from '../img/title.jpg'
//import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {translate} from "react-switch-lang";
import ScrollAnimation from 'react-animate-on-scroll';

function Title(props){
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
    <>     
    <Container id='home' fluid={true} className={'Title'} 
      style={{
        height:'80vh',  
        backgroundImage: `url(${laptop})`,
         backgroundPosition: 'center',
        backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
        }}>
    {/* <Parallax pages={1.2}> */}
    <div className='fullscreen_context'>  
      {/* <ParallaxLayer offset={0.9} speed={0.2}> */}
          <ScrollAnimation animateIn='animate__slideInUp'  animateOnce={false}>
            <img src={logo} alt='' className='fullscreen_title1 App-logo2 _anim-items1' width={'200px'}/>
         </ScrollAnimation>
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={1} speed={0.3}> */}
      <ScrollAnimation animateIn='animate__lightSpeedInLeft'  animateOnce={false} delay={400}>
          <div className='fullscreen_text _anim-items1'>
            {t('deviz.text1')}
          </div>
      </ScrollAnimation>    
      {/* </ParallaxLayer>    
      <ParallaxLayer offset={1} speed={0.4}> */}
       <ScrollAnimation animateIn='animate__lightSpeedInRight'  animateOnce={false} delay={600}> 
          <div className='fullscreen_text2 _anim-items1'>
          {t('deviz.text2')}
          </div>
          </ScrollAnimation>
      {/* </ParallaxLayer>   */}

        </div>
        {/* </Parallax> */}
      </Container>
      </>
  )
}

export default translate(Title);