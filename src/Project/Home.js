import React from 'react';
import './Home.css';
import img1 from './call2.png';
import img2 from './res2.jpg';
import prof from './prof.png';
import link from './link2.webp'
import git from './git.webp'
import gmail from './gmail2.png'
import './nav.css'


const Home = () => {
  let mnumber=()=>{
document.getElementById('btn1').innerHTML=('+91-8920243351')
  }
  const openResume = () => {
    window.open('shivam_javaUpdated.pdf'); 
  }
  return (
    <div>
      <div className='container' style={{ marginTop: '80px', marginLeft: '20px' }}>
        <div className='row'>
          
          <div className='.col-12 col-sm-12 col-md-8 col-lg-8'>
            <h2>Hii I'am,</h2>
            <h1>Shivam Bhardwaj</h1>
            <h6>FullStack Web Developer | Tech Stack:<br></br>Java/React</h6>
            <button className='btn btn-light mt-4' onClick={mnumber} id='btn1'>
              Contact
              <img src={img1} style={{ width: '15px', marginLeft: '5px' }} alt='contact-icon' />
            </button>
            <button className='btn btn-light mt-4' onClick={openResume}>
              Resume
              <img src={img2} style={{ width: '20px', marginLeft: '5px' }} alt='resume-icon' />
            </button><br></br>
            <a href='https://www.linkedin.com/in/shivam-bhardwaj-332aaa2a8' target='_blank'><img src={link} alt='linkdin' style={{width:"50px",borderRadius:"50%",marginTop:"10px",marginLeft:"30px"}}></img></a>
            <a href='https://github.com/Shivambh123' target='_blank'><img src={git} alt='linkdin' style={{width:"35px",borderRadius:"50%",marginLeft:"30px",marginTop:"10px"}}></img></a>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNpzsnhGGMqfRzHpRjFfbVZtKqHSfZvnljKSRnftWqDJBfknsCGTDqslMwRbkGtcGSprg' target='_blank'><img src={gmail} alt='linkdin' style={{width:"33px",borderRadius:"50%",marginLeft:"30px",marginTop:"10px"}}></img></a>
          </div>
          <div className='.col-12 col-sm-12 col-md-4 col-lg-4' style={{ position: 'relative' }}>
          <div
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                position: 'absolute',
                top: '10px',
                left: '60px',
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
                marginLeft:'50px',
                marginTop:'50px'
              }}
              alt='Profile'
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;






