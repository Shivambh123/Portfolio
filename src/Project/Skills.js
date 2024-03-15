import React from 'react'
import java from './java.png'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react3.png'
import boot from './boot.svg'
import sql from './sql.png'
import './nav.css'


const Skills = () => {
  return (
    <div >
      <div className='container'>
      <h1 style={{textAlign:"center",fontStyle:"italic",marginTop:"30px"}}>My Skills</h1>
      </div>
      <div className='row'>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={java} alt='java' style={{width:"150px",marginLeft:"150px",marginTop:"30px"}}></img>
        </div>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={html} alt='java' style={{width:"100px",marginLeft:"150px",marginTop:"30px"}}></img>
        </div>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={css} alt='java' style={{width:"100px",marginLeft:"150px",marginTop:"30px"}}></img>
        </div>
      </div>
      <div className='row'>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={js} alt='java' style={{width:"100px",marginLeft:"150px",marginTop:"50px"}}></img>
        </div>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={react} alt='java' style={{width:"120px",marginLeft:"150px",marginTop:"50px"}}></img>
        </div>
        <div className='.col-12 col-md-6 col-lg-4'>
          <img src={boot} alt='java' style={{width:"120px",marginLeft:"150px",marginTop:"50px"}}></img>
        </div>
      </div>
    </div>
    
  )
}

export default Skills