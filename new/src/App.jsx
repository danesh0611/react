import "./App.css"
import Course from "./Course"
import Navbar from "./Navbar"
import Courselist from "./Courselist"



function App() {
  

  return (
    <>
   
    <Course name="html"  des="hello" show={true}/>
    <Courselist/>
      
    </>
  )
}

export default App
