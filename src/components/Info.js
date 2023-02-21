import React from 'react'
import Food from './Food'
import Stats from './Stats'
import Work from './Work'
import '../css/Info.css'

function Info() {
  return (
    <div id='InfoMain'>
        <div id='FoodBox'>
            <Food/>
        </div>
        <div id='StatsBox'>
            <Stats/> 
        </div>
        <div id='WorkBox'>
            <Work/> 
        </div>
    </div>
  )
}

export default Info