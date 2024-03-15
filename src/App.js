import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Project/Home';
import Skills from './Project/Skills';
import About_Me from './Project/About_Me';
import Nav from './Project/Nav';
import Education from './Project/Education';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/education' element={<Education />} />
          <Route exact path='/about_me' element={<About_Me />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

