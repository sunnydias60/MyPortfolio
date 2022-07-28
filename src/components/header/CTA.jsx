import React from 'react'
import RESUME from '../../assets/resume.pdf'
import CustomButton from '../button/CustomButton'

const CTA = () => {
  return (
    // <div className='cta' style={{display:'flex'}}>
       <div className='cta'>
        <a href={RESUME} className="btn" >Download CV</a>
        {/* download attibute in href will download file instead showing only preview */}
        {/* <a href={DEMO} download className="btn">Download</a>    */}
        <a href="#contact" className="btn btn-primary">Lets Talk</a>
    </div>
  )
}

export default CTA