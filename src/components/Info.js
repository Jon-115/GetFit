import React from 'react'
import Food from './Food'
import Stats from './Stats'
import Work from './Work'
import '../css/Info.css'

function Info() {
  return (
    <div id='InfoMain'>
        <div id='FoodBox' className='InfoBox'>
            <Food/>
        </div>
        <div id='StatsBox' className='InfoBox'>
            <Stats/> 
        </div>
        <div id='WorkBox' className='InfoBox'>
            <Work/> 
        </div>
    </div>
  )
}

export default Info