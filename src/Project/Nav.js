import React, { useState } from 'react';
import img3 from './logo.jpg';
import img1 from './sun2.png';
import img2 from './moon2.png';
import './nav.css';

const Nav = () => {
  const [image, setImage] = useState(img2);
  const [linkColor, setLinkColor] = useState('black');

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setImage(image === img2 ? img1 : img2);
    setLinkColor(linkColor === 'white' ? 'black' : 'white');
  };

  return (
    <nav className='navbar navbar-expand-sm dark' style={{ opacity: '0.3px' }}>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          <img src={img3} className='rounded-pill ' alt='img' style={{ width: '50px',marginLeft:"20px" }} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navcol'
          style={{ visibility: 'visible', position: 'relative' }}
        >
          <span className='navbar-toggler-icon' style={{ background: 'blue', display: 'block', width: '1.5em', height: '2px' }}></span>
          <span
            className='navbar-toggler-icon'
            style={{ background: 'blue', display: 'block', width: '1.5em', height: '2px', marginTop: '0.25rem' }}
          ></span>
          <span
            className='navbar-toggler-icon'
            style={{ background: 'blue', display: 'block', width: '1.5em', height: '2px', marginTop: '0.25rem' }}
          ></span>
        </button>

        <div className='collapse navbar-collapse' id='navcol'>
          <ul className='navbar-nav ms-auto '>
            <li className='nav-item'>
              <a className='nav-link' href='/' style={{ marginRight: '15px', fontStyle: 'italic' , color:linkColor}}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/skills' style={{ marginRight: '15px',  fontStyle: 'italic',color:linkColor }}>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='/education'
                style={{ marginRight: '15px',  fontStyle: 'italic',color:linkColor }}
              >
                Education
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='/about_me'
                style={{ marginRight: '15px',  fontStyle: 'italic',color:linkColor }}
              >
                About_Me
              </a>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-sm rounded-circle mt-1' onClick={toggleDarkMode}>
                <img src={image} style={{ width: '18px' }} alt="mode-icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
