import React from 'react'
import { useSelector } from 'react-redux'
import '../css/Stats.css'

function Stats() {

  const calcStats = useSelector(state => state.calcStats)
  const defStats = useSelector(state => state.defStats)
  const mode = useSelector(state => state.mode)

  return (
    <div>

      <div id='Top' className='box'>
        <p>Maintenince Calories</p>
        <h1>{calcStats['mcalc']}</h1> 
      </div>

      <div id='Mid'>
        <div id='MidBox' className='box'>
          <p>BMI</p>
          <h1>{calcStats['bmi']}</h1>
        </div>
        <div id='MidBox' className='box'>
          <p>BMR</p>
          <h1>{calcStats['bmr']}</h1>
        </div>
      </div>

      <div id='Bot' className='box'>
        <div>
          <h3>{defStats['isMale']}</h3>
        </div>
        <div id='BotSub1'>

          <div>
            <p>Age</p>
            <h1>{defStats['age']}</h1>
          </div>
          <div>
            <p>Weight</p>
            <h1>{defStats['weight']}</h1>
          </div>

        </div>
        <div>
          <p>Height</p>
          <h1>{defStats['feet']}'{defStats['inch']}</h1>
        </div>

        <div>
          <p>Goal</p>
          <h1>{mode}</h1>
        </div>
        
      </div>

     
      
      
      
      
      
      
      
      
    </div>
  )
}

export default Stats