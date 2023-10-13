import React from 'react'
import ip from './images/ip.png'
import cc3 from './images/cc3.jpg'
import cb2 from './images/cb2.jpg'
import cb3 from './images/cb3.jpg'
import ls2 from './images/ls2.jpg'
import "./policies.css"
function Citizenawareness() {
  return (
    <div>
      <div>
        <h1>TA CYBER CELL </h1></div>
      <div>
        
          <div id='number1' className="card-container">
            <div class="card" >
              <img src={cb3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
              </div>
            </div>
            <div class="card" >
              <img src={ip} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-text">Incident Reporting
                  We Provide Assistance in Cyber Crimes Investigation impacting citizens & businesses to Law Enforcement Agencies</h5>
              </div>
            </div>
          </div>
          <div id='number2' className="card-container">
            <div class="card" >
              <img src={cc3} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Cyber Crime Awareness
                  This portal is an initiative of TA Cyber Cell department to create awareness on cyber crimes.</p>
                <h4>CONTACT DETAILS</h4>
                <h3>CYBER CELL DEPARTMENT</h3>
                <p>Transaction Analysts INDIA Pvt Ltd</p>
                <p>Bangalore, Karnataka - 560076</p>
                <p>twallet-support@telangana.gov.in</p>
                <p>+91 9100007383</p>
              </div>
            </div>
            <div class="card" >
              <img src={ls2} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Lottery & Prize Money Fraud
                  Our Cyber Security Research Road Map is an attempt to enable us to protect from upcoming cyber threats and Attacks.</p>
                <h4>CONTACT DETAILS</h4>
                <h3>Lottery & Prize Money Fraud</h3>
                <p>Transaction Analysts INDIA Pvt Ltd</p>
                <p>Bangalore, Karnataka - 560076</p>
                <p>twallet-support@telangana.gov.in</p>
                <p>+91 9100007383</p>
              </div>
            </div>
            <div class="card" >
              <img src={cb2} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Capacity Building
                  Capacity building is one of the most important aspects of our Agenda. We have Customized Programs for the Need of Everyone.</p>
                <h4>CONTACT DETAILS</h4>
                <h3>Capacity Building</h3>
                <p>Transaction Analysts INDIA Pvt Ltd</p>
                <p>Bangalore, Karnataka - 560076</p>
                <p>twallet-support@telangana.gov.in</p>
                <p>+91 9100007383</p>
              </div>
            </div>
          </div>
        
      </div>
      <div>
        <h1> © 2019 All rights reserved  | twalletsupport@transactionanalysts.com | 9100007383</h1>
      </div>
    </div>
  )
}

export default Citizenawareness