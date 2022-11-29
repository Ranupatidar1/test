import "./App.css";
import Signup from "./Signup";
import Signin from "./Signin";
import React from "react";
import { Routes, Route } from 'react-router-dom';

const App =()=>{
    
    
    return(
        <div >
          <Routes>
      
      <Route path="/" element={<><Signup/></>}></Route>
          <Route path='/signin' element={<><Signin/></>}></Route>
          
          
      </Routes>
      
      
      </div> 
    )
}
export default App;