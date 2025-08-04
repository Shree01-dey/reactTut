import Greet from "./components/Greeting"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  console.log("xyz")
  const [cnt, setCnt] = useState(10) // A hook
  const [cnt2, setCnt2] = useState(10)
  function increase(){
    //cnt = cnt+1
    setCnt(cnt+1)
    return cnt
  }

  useEffect(function (){
    console.log("practice")
  },[cnt])

  useEffect(function (){
    console.log("practice2")
  },[cnt2])

  useEffect(function (){
    console.log("Start")
  },[])

  return (
    <>
    <div>hello shrewa {cnt} {cnt2}</div>
    <Greet name="shrewa" age={21}  /> 
    <Greet age = {26}/> 
    <Greet age = {28}/> 
    <button onClick={increase}>IncreaseShrewa</button>
    <button onClick={function (){
      setCnt2(cnt2+1)
      }}>IncreaseShrewa2</button>

    </>
  )

}


export default App