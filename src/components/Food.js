import React from 'react'
import { useSelector } from 'react-redux'
import '../css/Food.css'

function Food() {

  // const loose = []
  // const gain = []

  const calcStats = useSelector(state => state.calcStats)
  const defStats = useSelector(state => state.defStats)
  const mode = useSelector(state => state.mode)

  return (
    <div>

      <div  id='TopFood'>

        <div className='box' id='FoodBoxInfo'>
          <p>Calories</p>
          <p>{mode ===  'Loose' ? calcStats.mcalc - 200 : calcStats.mcalc + 200 }</p>
        </div>

        <div className='box' id='FoodBoxInfo'>
          <p>Protein </p>
          <p>{.8 * defStats.weight}g</p>
        </div>

      </div>

      <div className='box'>
        
      </div>

    </div>
  )
}

export default Food