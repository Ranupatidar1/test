import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

const Signup =()=>{
    const navigate= useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
     const [password, setPassword]= useState("");
     const [country, setCountry]= useState("");
     const [state, setState]= useState("");
     const [city, setCity]= useState("");
     const [country_id, setCountry_id]= useState("");
     const [state_id, setState_id]= useState("");
     const [city_id, setCity_id]= useState("");
     
     const PostData =()=>{
        
        fetch("http://134.209.229.112:5000/account/signup",{
            method:"post",
            headers:{
              "content-Type":"application/json"
            },
            body:JSON.stringify({
              name,
              password,
              email
            })
          })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
              navigate("/signin")
            
          }).catch(err=>{
            console.log(err)
          })
    }
     
    return(
        <div >

      <div className="main">
      
        <div className="login-container">
        <h3>sign up</h3>
        
          <h4>Name</h4>
          <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
          <h4>E-mail</h4>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
          <h4>password</h4>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
          <h4>role_type</h4>
          <select name="role_type" id="Quiz">
              <option>recriter</option>
              <option>employee</option>
        
       </select>
          
          <h4>country</h4>
          <input type="text" value={country} onChange={e=> setCountry(e.target.value)}/>
          <h4>state</h4>
          <input type="text" value={state} onChange={e=> setState(e.target.value)}/>
          <h4>city</h4>
          <input type="text" value={city} onChange={e=> setCity(e.target.value)}/>
          
          <h4>country_id</h4>
          <input type="text" value={country_id} onChange={e=> setCountry_id(e.target.value)}/>
          
          <h4>state_id</h4>
          <input type="text" value={state_id} onChange={e=> setState_id(e.target.value)}/>
          
          <h4>city_id</h4>
          <input type="text" value={city_id} onChange={e=> setCity_id(e.target.value)}/>
          

          
          
        <button className="login-signupButton"  onClick={()=>PostData()}>Signup</button>   
        
      </div>
      </div>
      </div> 
    )
}
export default Signup;