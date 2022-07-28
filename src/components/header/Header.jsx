import React from 'react'
import './header.css'
import CTA from './CTA'
import PIC from '../../assets/sunnydias.jpg'
import HeaderSocials from './HeaderSocials'
import LOGO from '../../assets/sd601.png'
import ParticlesBg from 'particles-bg'
import CustomButton from '../button/CustomButton'
import RESUME from '../../assets/resume.pdf'


const Header = () => {
  return (
    <header>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      <div className="container header__container">
        <img src={LOGO}  className="logo" alt="LOGO" />
        <h4>Hello, I am</h4>
        <h1>Sunny Dias</h1>
        <h5 className="text-light">IT Engineer | Developer | CloudOps</h5>
        {/* <CTA /> */}
        <div className="cta">
          <CustomButton type="two" link={RESUME} text="Download CV" />
          <CustomButton type="one" link="#contact" text="Lets Talk" />
        </div>
        <HeaderSocials />
        <div className="me">
          <img className='me__image' src={PIC} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header