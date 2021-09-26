import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
          <div className='about-info'>
            I have a passion for coding and challenging myself creatively. I use minimalistic aesthetic to design and build user interfaces. I am always seeking to learn new skills and play with new web technologies. <br/><br/>

            I am currently working part time at a startup as a Front End Developer
            while working full time as a Technical Consultant. I eventually want to transistion my career as a Front End Engineer focusing on UI / UX.

          </div>
          <div className='about-photo'>
            <img src={require('../../../assets/working.png').default} className='picture' />

          </div>
      </div>
      
      <SocialContact />
    </div>
  )
}

export default About
