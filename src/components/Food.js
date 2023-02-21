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
          <p>{calcStats.gcalc}</p>
        </div>

        <div className='box' id='FoodBoxInfo'>
          <p>Protein </p>
          <p>{.8 * defStats.weight}g</p>
        </div>

      </div>

      <div className='box' id='FoodDescription'>
      {mode ===  'Loose' ? 
      <>
      The most important part of weight loss journey is the nutrition. Eating the right foods and at the right quantity will help
      you meet your goal much quicker then you would of otherwise. When it comes to loosing weight you must be in a calorie deficeit
      or in other words eating below your maintence calorie level. An important thing to note when taking upon the challenge of 
      loosing weight is to eat foods cotaining high fibre to help you keep full. Most high fibre foods come from plants such as,
      fruits, vegetables, and grains.
      </>
      : 
      <>
      The most important part in building muscle is the nutrition. Making sure to have a planed meals will help in meeting your goals
      ,and if you stick to a consistent training regimine you will also notice much quicker results. To even begin building muscle your
      body must be in a calorie surplus or you must eat more than your maintence calorie level. A nice tip for those who struggle to gain
      weight is to eat calorie dense foods, foods that contain high amounts of calories relative to their weight, such as meats. 
      </>
      }
        


      </div>

    </div>
  )
}

export default Food