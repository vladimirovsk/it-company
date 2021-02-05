import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import {translate} from "react-switch-lang";
import {Typography} from '@material-ui/core';
import './About.css'

import vsc from '../../assets/img/vsc1.jpg'
import db from '../../assets/img/DatabaseDesign2.jpg'


function About(props){
  const [{t}] = React.useState(props);
  return(
      <Container id='about' fluid={true} className={'About'}>
       <Row >
          <Col className='Grid' xs={0} md={12} lg={6} style={{
                backgroundImage: `url(${db})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
          </Col>
          <Col className='Grid' xs={12} md={12} lg={6} style={{
            padding : '2em',
            lineHeight : 1.5,
            backgroundColor:'whitesmoke',
            color: 'black',
            textAlign: 'justify-context'
            }}>
                <Typography variant='body1' paragraph align='justify' >
                {t('about.text1.row1')}
                </Typography>

                <Typography variant='body1' paragraph align='justify'>
                {t('about.text1.row2')}
                </Typography>

                <Typography variant='body1' paragraph align='justify'>
                {t('about.text1.row3.title')}
                </Typography>
                <Typography component='li' variant='body1' align='justify'>
                {t('about.text1.row3.item1')}
                </Typography>
                <Typography component='li' variant='body1' align='justify'>
                {t('about.text1.row3.item2')}
                </Typography>
                <Typography component='li' variant='body1' align='justify'>
                {t('about.text1.row3.item3')}
                </Typography>

          {/* </Paper> */}
          </Col>
          <Col className='Grid' xs={12} md={12} lg={6} style={{
            padding : '2em',
            
            backgroundColor:'whitesmoke',
            color: 'black',
            textAlign: 'justify-context'
            }}>
              <Typography variant='body1' paragraph={true}  align='justify' style={{lineHeight:'1.8'}}>
                {t('about.text2.row1')}
              </Typography>
              <Typography variant='body1' paragraph align='justify' style={{lineHeight:'1.8'}}>
                {t('about.text2.row2')}
              </Typography>
              <Typography variant='body1' paragraph align='justify' style={{lineHeight:'1.8'}}>
                {t('about.text2.row3.title')}
              </Typography>
          </Col>
          <Col className='Grid' xs={0} md={12} lg={6} style={{
                backgroundImage: `url(${vsc})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
          </Col>
        </Row>  
      </Container>
  )
}

export default translate(About);
//Современная технология разработки программного обеспечения ориентировано на индивидуального заказчика. Очень многое зависит от организации процесса разработки, состава и квалификации специалистов команды разработчиков, а так же правильное документирования всех процессов разработки программного обеспечения.

//


//.
