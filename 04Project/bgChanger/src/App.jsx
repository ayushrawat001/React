import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color,setColor]= useState("black")
  

  return (
   
    <div className='duration-200 ' style={{backgroundColor:color, height:"100vh", width:"100vw"}}>

    
    <div className="text-center">
      
        <button style={{background:"red"}} onClick={()=>{setColor("red")}}>red</button>
        <button style={{background:"yellow"}}onClick={()=>{setColor("yellow")}}>yellow</button>
        <button style={{background:"green"}}onClick={()=>{setColor("green")}}>green</button>
        <button style={{background:"blue"}}onClick={()=>{setColor("blue")}}>blue</button>
        <button style={{background:"pink"}}onClick={()=>{setColor("pink")}}>pink</button>
    </div>
      
    </div>
  )
}

export default App
