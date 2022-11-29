import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

const Signup =()=>{
    const navigate= useNavigate()
   const [name, setName] = useState("");
     const [password, setPassword]= useState("");
     
     
     const PostData =()=>{
        
        fetch("http://134.209.229.112:5000/account/signup",{
            method:"post",
            headers:{
              "content-Type":"application/json"
            },
            body:JSON.stringify({
              name,
              password
              
            })
          })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
              
            
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
         
          <h4>password</h4>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
         
          

          
          
        <button className="login-signupButton"  onClick={()=>PostData()}>Signup</button>   
        
      </div>
      </div>
      </div> 
    )
}
export default Signup;