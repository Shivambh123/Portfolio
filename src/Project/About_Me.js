import React from 'react'
import prof from './prof.png'
import './aboutme.css'
import img1 from './call2.png'
import './nav.css'

const About_Me = () => {
  let mnumber=()=>{
    document.getElementById('btn1').innerHTML=('+91-8920243351')
      }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='.col-12 col-md-6'>
          <div
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                position: 'relative',
                top: '100px',
                left:'70px',
                
                transform: 'translateX(-20%)'
              }}
            />
            <img
              
              src={prof}
              style={{
                width: '250px',
                position: 'relative',
                zIndex: '1',
                display: 'block',
                marginLeft:'60px',
                marginTop:'-210px'
              }}
              alt='Profile'
            />
          </div>
          <div className='.col-12 col-md-6'>
            <div className='container-fluid' style={{width:'400px',height:'650px',marginTop:'30px',marginLeft:'-15px',padding:"15px"}}>
              <h1 style={{textAlign:'center',marginLeft:"-20px"}}>About Me!</h1>
              <p style={{fontSize:"16px",fontStyle:"italic"}}>I'm Shivam Bhardwaj, a seasoned Java full-stack web developer.
              My journey in software development began with a strong foundation in core Java,
               which I've since augmented with advanced Java techniques, along with expertise
                in HTML, CSS, Bootstrap, React.js, and JavaScript.My passion for continuous learning
                 led me to pursue the Java Full Stack Course at Ducat Noida, where I further refined my
                  skills and stayed updated with the latest industry trends. Prior to that, I spent four
                   rewarding years as a Senior Engineer at Maruti Suzuki, where I had the privilege of contributing
                    to impactful projects and honing my problem-solving abilities in a dynamic environment.
                    Currently, I'm actively seeking new job opportunities where I can leverage my expertise
                     to drive innovation and deliver exceptional results. Whether it's developing intuitive 
                     user interfaces, optimizing backend functionality, or collaborating with cross-functional
                      teams, I'm committed to delivering cutting-edge solutions that exceed expectations.</p>

                      <button className='btn btn-light mb-5' onClick={mnumber} id='btn1'>
              Contact
              <img src={img1} style={{ width: '15px', marginLeft: '5px' }} alt='contact-icon' />
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_Me