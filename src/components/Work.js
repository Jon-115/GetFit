import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import FoodItem from './FoodItem'
import Button from 'react-bootstrap/Button';

function Work() {

  const [diet, setDiet] = useState('')
  const [exclude, setExclude] = useState('')
  const calcStats = useSelector(state => state.calcStats)
  const [meals, setMeals] = useState([])
  const [nutri, setNutri] = useState({})

  async function handlesubmit(e){
    e.preventDefault()
    let url = 'https://api.spoonacular.com/mealplanner/generate?apiKey='+ process.env.REACT_APP_API_KEY +'&timeFrame=day&targetCalories=' + calcStats.gcalc
    diet === 'None' ? setDiet('') : setDiet('&diet='+diet)
    exclude === 'None' ? setExclude('') : setExclude('&exclude='+exclude)
    url = url + diet + exclude

    console.log(url)

    let response = await fetch(url)
    let info = await response.json();
    setMeals(info.meals)
    setNutri(info.nutrients)
    setDiet('')
    console.log(meals)
  } 
  return (
    <div>

      <div className='box'>
        <p>Don't know where to start. Fill in the blank below to generate a custum meal plan.</p>
      </div>

      <div className='box'>
        <Form onSubmit={e => handlesubmit(e)}>

          <Form.Label>Diet Plan</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => setDiet(e.target.value)} required>
              <option >None</option>
              <option >Gluten Free</option>
              <option >Ketogenic</option>
              <option >Vegetarian</option>
              <option >Lacto-Vegetarian</option>
              <option >Ovo-Vegetarian</option>
              <option >Vegan</option>
              <option >Pescetarian</option>
              <option >Paleo</option>
              <option >Primal</option>
              <option >Low FODMAP</option>
              <option >Whole30</option>
            
            </Form.Select>

            <Form.Label>Exclue</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => setExclude(e.target.value)} required>
              <option >None</option>
              <option >Peanuts</option>
              <option >Shellfish</option>
              <option >Olives</option>
            </Form.Select>

            <Button variant="primary" type="submit">
            Submit
            </Button>

        </Form>

      </div>

      <div className='box'>
        <p>total calories</p>
        <p>{nutri.calories}</p>
      </div>
      <div>
        {meals.map(meal => {
          return <FoodItem key={meal.id} meal={meal} />
        })}
        
      </div>

    </div>
  )
}

export default Work