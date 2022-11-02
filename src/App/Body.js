import {Routes, Route} from "react-router-dom";
import Home from "./Home.js";
import Counter from "./Counter.js";
import Info from "./Info.js";
import RedCounter from "./RedCounter.js";
import Average from "./Average.js";


const Body = ()=>{
  return(
    <div className="Body-container">
      <p>Test</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />    
        <Route path="/info" element={<Info />} />      
        <Route path="/reducer" element={<RedCounter />} />      
        <Route path="/average" element={<Average />} />      
      </Routes>   
 
    </div>
  )
}
export default Body;