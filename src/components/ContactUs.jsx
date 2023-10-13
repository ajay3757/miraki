import React from 'react'
import './contact.css'
import ss from './images/ss.png'

function ContactUs() {
  return (
    <div id='main'>
      ContactUs
      <img src={ss} alt="" />
      <div>
        <h1>Contact for Grievances:</h1>
        <table className="centered-table" border="2">
          <thead>
            <tr>
              <th>Address</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Call Centre</td>
              <td>1100/18004251110</td>
            </tr>
            <tr>
              <td>Email  </td>
              <td>twallet-support@telangana.gov.in</td>
            </tr>
            <tr>
              <td>Phone No </td>
              <td> 9100007383  </td>
            </tr>
            <tr>
              <td>Whatsapp</td>
              <td>9100008393</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h1>Escalations:</h1>
        <table className="centered-table" border="2">
          <thead>
            <tr>
              <th>LEVEL2</th>
              <th>LEVEL3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >kirankumar.p@transactionanalysts.com</td>
              <td>sreenivasulu.m@transactionanalysts.com</td>

            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>Official</h1>
        <table className="centered-table" border="2">
          <thead>
            <tr>
              <th>Department officials</th>
              <th></th>
            </tr>
          </thead>
   

          <tbody>
            <tr>
              <td>Shri. Jayesh Ranjan, I.A.S</td>
              <td>Principal Secretary, ITE&C Dept.</td>
              <td>2nd Floor, D-Block</td>
              <td>TS Secretariat, Hyderabad.</td>
            </tr>
            <tr>
              <td>Shri.Jayesh Ranjan, IAS.</td>
              <td>Principal Secretary, ITE&C Dept.</td>
              <td>Commissioner ESD, MeeSeva</td>
              <td>1st Floor, MCH Building</td>
              <td> Road No.7, Banjarahills </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactUs