import React from 'react'
import "./first.css"
import tlogo from '../components/images/tlogo.png'
import FlagofTelangana from './images/FlagofTelangana.png'
import kcr from './images/kcr.jpg'
import telanganamap from './images/telanganamap.jpg'
import ktr from './images/ktr.jpg'
import { Link, Routes, Route } from 'react-router-dom'
import About from './About'
import ContactUs from './ContactUs'
import Home from "./Home"
import Dashboard from './Dashboard'
import Departments from './Departments'
import Policies from './Policies'
import Citizenawareness from './Citizenawareness'
import Help from './Help'
import Terms from './Terms'
import Privacy from './Privacy'


function First() {
  return (
    <div>
      <div id='Header'>
        <div className='header'>
          <img src={tlogo} alt="logo"  />
          <span>The Official digital wallet
            <p>of telangana state</p> </span>
          <img src={kcr} alt="cm" />
          <span>K.CHANDRASHEKAR RAO
            <p>Hon'CM of telangana</p>
          </span>
          <img src={FlagofTelangana} alt="flag" />
          <span>Govt. of telangana
            <p>ITE&C</p></span>
          <img src={ktr} alt="minister" />
          <span>K.TARAKA RAMA RAO
            <p>Hon'ble minister of IT</p>
            <p>Industries,Nri Affairs</p>
          </span>
          <img src={telanganamap} alt="map" />
          <span>Number of Districts
            <p>in Telanagana state</p>
          </span>
        </div>
        <div className='headerin'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contactus">ContactUs</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/policies">Policies</Link>
          <Link to="/citizenawareness">Citizenawareness</Link>
        </div>
      </div>
      <div id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='/citizenawareness' element={<Citizenawareness />} />
          <Route path='/terms&conditions' element={<Terms />} />
          <Route path='/privacypolicy' element={<Privacy />} />
        
          <Route path='/help&faq' element={<Help />} />
        </Routes>
      </div>
      <div id='footer'>
        <div className='one'>``
          <p>Co-Branded by Transaction Analysts (INDIA) Pvt. Ltd.
            WALLET APP DESIGNED, DEVELOPED & OWNED BY TRANSACTION ANALYSTS.
            © 2018 Government of Telangana. All rights reserved</p>
        </div>
        <div className='two'>
          <div className='two-one'></div>
          <Link to="/terms&conditions">Terms&conditions</Link>
          <Link to="/privacypolicy">privacypolicy</Link>
          <Link to="/help&faq">HELP & FAQ'S</Link>
        </div>
      </div>
    </div>
  )
}

export default First