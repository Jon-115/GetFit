import React from 'react'

function FoodItem({meal}) {
  return (
    <div id='FoodItem' className='box'>
        <a href={meal.sourceUrl}>{meal.title}</a> <br />
        Ready in {meal.readyInMinutes} minutes
    </div>
  )
}

export default FoodItem