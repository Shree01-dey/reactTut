import Greet from "./components/Greeting"
import './App.css'

function App() {
  const cnt = 10
  return (
    <>
    <div>hello shrewa {cnt}</div>
    <Greet name="shrewa" age={21}  /> 
    <Greet age = {26}/> 
    <Greet age = {28}/> 
    </>
  )

}


export default App