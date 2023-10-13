import React from 'react'
import m288 from './images/m288.png'
import m289 from './images/m289.png'
import m290 from './images/m290.png'
import m291 from './images/m291.png'
import m292 from './images/m292.png'

function Dashboard() {
  return (
    <div>
      <img src={m288} alt="" style={{ maxWidth: '100%' }}/>
      <img src={m289} alt="" style={{ maxWidth: '100%' }}/><br /><br />
      <img src={m290} alt="" style={{ maxWidth: '100%' }}/>
      <img src={m291} alt="" style={{ maxWidth: '100%' }}/><br /><br />
      <img src={m292} alt="" style={{ maxWidth: '100%' }}/>
    </div>
  )
}

export default Dashboard