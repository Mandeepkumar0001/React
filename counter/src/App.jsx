import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)

  // let counter = 15

  const addValue=()=>{ 
    // console.log("clicked",counter);
    // counter=counter+1;
    if(counter<20){
      setCounter(counter+1)
    }
    // setCounter(counter+1)
  }

  const removeValue =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    // setCounter(counter-1)
  }

  return (
    <>
    <h1>Mandeep Mukhda</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    </>
  )
}

export default App
