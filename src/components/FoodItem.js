import React from 'react'

function FoodItem({meal}) {
  return (
    <div id='FoodItem' className='box'>
        {meal.title}
    </div>
  )
}

export default FoodItem