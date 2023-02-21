import React,{useState} from 'react'
import '../css/Form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import {gotInfo} from '../actions/actions'
import {getCalcStats} from '../actions/actions'
import {getDefStats} from '../actions/actions'



function FormPage() {

  const dispatch = useDispatch()

  const [age, setAge] = useState(18)
  const [feet, setFeet] = useState(5)
  const [inch, setInch] = useState(10)
  const [weight, setWeight] = useState(160)
  const [male, setMale] = useState(true)
  const [activity, setActivy] = useState('None')

  let actcheck = {'None': 1.3, 'Light': 1.55, 'Moderate': 1.65, 'Heavy': 1.8}

  function handlesubmit(e){
    e.preventDefault()
    
    let bmr = 0
    let gen = ''


    //BMI Calc
    let weightInKg = weight * 0.453592
    let height = (feet * 12) + inch
    let heightInM = height * 0.0254
    let bmi = weightInKg / (heightInM * heightInM)

    //BMR Calc
    if(male === 'true'){
      bmr = (10 * weightInKg) + (6.25 * heightInM * 100) - (5 * age) + 5  
    }
    else{
      bmr = (10 * weightInKg) + (6.25 * heightInM * 100) - (5 * age) - 16 
    }

    //Maintenince Calories
    let calUsed = bmr * actcheck[activity]

    bmr = Math.round(bmr * 100) / 100
    bmi = Math.round(bmi * 100) / 100
    calUsed = Math.round(calUsed)

    if(male === 'true'){
      gen = 'Male'
    }
    else{
      gen = 'Female'
    }
    console.log(age, feet, inch, weight, gen)
    console.log(bmi, bmr, calUsed)
    dispatch(gotInfo())
    dispatch(getCalcStats({'bmi': bmi, 'bmr': bmr, 'mcalc': calUsed}))
    dispatch(getDefStats({'age': age, 'feet': feet, 'inch': inch, 'weight': weight, 'isMale': gen}))
  }
  
  
  return (
    <div id='FormBox'>
      <div id='Form'>
        <Form onSubmit={e => handlesubmit(e)}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control type="number" placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)} required/>
                <InputGroup.Text id="basic-addon1">yrs</InputGroup.Text>
              </InputGroup>
          </Form.Group>

          <Form.Label>Height</Form.Label>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <Form.Control type="number" placeholder="Feet" value={feet} onChange={e => setFeet(e.target.value)} required/>
                <InputGroup.Text id="basic-addon1">feet</InputGroup.Text>
              </InputGroup>
                
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
              <Form.Control type="number" placeholder="Inches" value={inch} onChange={e => setInch(e.target.value)} required/>
                <InputGroup.Text id="basic-addon1">inches</InputGroup.Text>
              </InputGroup>
        
              </Form.Group>
            </Col>
          </Row>
          

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control type="number" placeholder="Enter Weight" value={weight} onChange={e => setWeight(e.target.value)} required/>
                <InputGroup.Text id="basic-addon1">Ibs</InputGroup.Text>
              </InputGroup>
            
        
          </Form.Group>

          <Form.Label>Daily Activity</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => setActivy(e.target.value)} required>
            <option >None</option>
            <option >Light</option>
            <option >Moderate</option>
            <option >Heavy</option>
          </Form.Select>
          <br />

          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Male"
              name="group1"
              type={'radio'}
              id={`inline-radio-1`}
              value={true}
              onClick={e => setMale(e.target.value)}
              required
            />
            <Form.Check
              inline
              label="Female"
              name="group1"
              type={'radio'}
              id={`inline-radio-2`}
              value={false}
              onClick={e => setMale(e.target.value)}
            />
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default FormPage