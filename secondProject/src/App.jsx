import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(0)
   
  
   const addValue = () =>{
    if(counter>=0 && counter <20)
    {
      setCounter(counter+1)
    }
    
   }

   const removeValue = () =>{
    if(counter>0)
    {
    setCounter(counter= counter -1)
    }
   
   }

  return (
   <>
   <h1>counter value : {counter} </h1>
   <button onClick={addValue}>add value</button> 
   <button onClick={removeValue}>remove value</button>
   <footer>Max : 20 Min : 0</footer>
   </>
  )
}

export default App

