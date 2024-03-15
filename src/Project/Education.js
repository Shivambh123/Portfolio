import React from 'react';
import img1 from './edu.png'
import './education.css'
import './nav.css'

const Education = (props) => {
  return (
    <div>
      <h1 className='text-center mt-3 'style={{fontStyle:"italic",marginLeft:"10px"}} >Education <img src={img1} style={{width:"80px"}}></img></h1> 
      <div className='container mt-5'>
        <div className='row' >
          <div className='col-12 .col-sm-12 col-md-6 mt-3'>
            <div className='card' style={{width:"23rem",boxShadow:"0px 0px 10px 5px grey"}}>
              <div className='card-header bg-dark'>
                <h2 className='text-center text-white'>MBA</h2>
              </div>
              <div className='card-body'>
                <div className='card-text'>
                <h6 className="gradient-text"><b>Year:</b> 2024</h6>
                </div>
                <h6 className="gradient-text"><b>College:</b> Indian Institute of Management Jammu </h6>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 mt-3'>
            <div className='card' style={{width:"23rem",boxShadow:"0px 0px 10px 5px grey"}}>
              <div className='card-header bg-dark'>
                <h2 className='text-center text-white'>B.Tech(Mechanical)</h2>
              </div>
              <div className='card-body'>
                <div className='card-text'>
                <h6 className="gradient-text"><b>Year:</b> 2018</h6>
                </div>
                <h6 className="gradient-text" ><b>College:</b> Dronacharya Group Of Institution </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5' >
          <div className='col-12 col-sm-12 col-md-6'>
            <div className='card' style={{width:"23rem",boxShadow:"0px 0px 10px 5px grey"}}>
              <div className='card-header bg-dark'>
                <h2 className='text-center text-white ' >Senior Secondary</h2>
                
              </div>
              <div className='card-body' >
                <div className='card-text'>
                <h6 className="gradient-text"><b>Year:</b> 2014</h6>
                </div>
                <h6 className='gradient-text'><b>College:</b> R.S.B.V </h6>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 mt-3'>
            <div className='card' style={{width:"23rem",boxShadow:"0px 0px 10px 5px grey"}}>
              <div className='card-header bg-dark'>
                <h2 className='text-center text-white '>Higher Education</h2>
              </div>
              <div className='card-body'>
                <div className='card-text'>
                <h6 className="gradient-text"><b>Year:</b> 2012</h6>
                </div>
                <h6 className="gradient-text"><b>College:</b>New Oxford Public School </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
