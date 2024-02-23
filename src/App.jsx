import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Mainroute from "./Navbarcomponent/Mainrouter";
import Hompage from './hompage';

import './App.css'
import Errormessage from './Products-componets/errorPage'
import { Page, Page2, Page3, Page4, Page5 } from './Products-componets/page'

function Portfolio () {
  return (
    <div className='body-port'>
      <Router>
        <Routes>
          
          <Route path='*' element={<Errormessage />} />

          <Route path='/' element={<Hompage />}>
            <Route path='/' element={<Page2 />} />
            <Route path='/page2' element={<Page3 />} />
            <Route path='/page3' element={<Page4 />} />
            <Route path='/page4' element={<Page5 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Portfolio
