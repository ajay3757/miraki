import React, { useEffect, useState } from 'react'
import "./home.css"
import dtlogo from './images/dtlogo.png'
import dtlogo2 from './images/dtlogo2.jpg'

function Departments() {
  const [currentimg, setcurrentimg] = useState(0)
  const images = [dtlogo, dtlogo2]
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentimg + 1) % images.length;
      setcurrentimg(next)
    }, 5000)
    return () => clearInterval(interval);
  }, [currentimg])
  return (
    <div><div>
    <h1 className='lr'>T-Wallet anytime Anywhere digital ayment option for everyone</h1>
    <div className='inside'>
      <div className='insideone'>
        <h1>Telengana-wallet</h1>
        <img src={images[currentimg]} alt="" />
        <h1>Towards Digitally</h1>
        <h1>  Empowered State</h1>
      </div>
      <div className='insidetwo'>
        <h1>Key features</h1>
        <p>T Wallet is the official digital wallet of Telangana State, is launched by Honble Minister of IT Shri. K. T. Rama Rao on June 01, 2017.</p>
        <p>T Wallet is available as a Any Time Any Where digital payment option for Everyone.</p>
        <p>Citizens can use T Wallet to make payments for both Government and Private transactions to avail services and</p>
        <p>is integrated with Government departments such as Mee Seva, RTA, TSSPDCL, TSNPDCL, Traffic Challan, HMWSSB, GHMC / CDMA (Property Tax)</p>
        <p>, TSCHE (DOST, EAMCET), SBTET (TSPOLYCET), JNTU, TSRTC, TSPSC, etc.T Wallet serves through Online Web Browser, Smart Phone.</p>
        <p>Feature Phone and No Phone Users can use Mee Seva centers to Load money into wallet and make payments.</p>
        <p>Supports Telugu Urdu besides English.</p>
        <p>No service charge for using T Wallet.</p>
        <p>T Wallet uses two factor authentication, through Aadhaar + Biometric or Aadhaar + OTP to Aadhaar linked mobile number for  phone users.</p>
        <p>Is hosted on Azure platform and designed for high and secure performance.</p>
        <p>Govt. payments such as Aasara Pensions, MNREGA payments will be pushed to eligible respective citizens T Wallet. Right now Post Matric Students Scholarship is being piloted</p>
      </div >
      <div className='insidethree'>
        <form>
          <h1>Department</h1>
           <h2>SIGNIN</h2> 
          <label htmlFor="">Mobilenumber</label><br />
          <input type="text" placeholder='mobilenumber' /><br />
          <label htmlFor="">password</label><br />
          <input type="password" placeholder='password' /> <br />
          <button className='btn btn-info'>Login</button>
          <button className='btn btn-warning'>Register</button>
        </form>
      </div>
    </div>
    
  </div></div>
  )
}

export default Departments