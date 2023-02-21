// import React, {useState} from 'react'
import '../css/Display.css'
import Info from './Info'
import FormPage from './FormPage'
import { useSelector } from 'react-redux'



function Display() {

    const showInfo = useSelector(state => state.gotInfo)
  return (
    <div id='Screen'>

        <div id='TopBar'>
          <h1>GetFit</h1> 
        </div>
        
        <div id='Main'>
            {showInfo ? <Info/> : <FormPage/>} 
        </div>
        
        
    </div>
  )
}

export default Display