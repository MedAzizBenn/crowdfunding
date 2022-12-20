
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import {useDispatch} from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { Provider } from 'react-redux';
import axios from "axios";

import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const LoginComponent =()=> {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");
  const [show, setShow] = useState(false);
  const GOOGLE_CLIENT_ID="790211340840-uuml345hckj6nfbfd3p0osc506pli76s.apps.googleusercontent.com"
  const navigate = useNavigate();

  /*useEffect(()=>
  {
    function start(){
      gapi.auth2.init({
        clientId:GOOGLE_CLIENT_ID,
        scope:""
      })
    }
    gapi.load('client:auth2',start)
  })*/
  const handleEmailChange=((event:any) =>
  {
    setEmail(event.target.value);
    
  })
  const handlePasswordChange=((event:any)=>
  {
    setPassword(event.target.value);
    
  })
  const handleSubmit=(async(event:any)=>
  {
    event.preventDefault();
    if((password=="")||(email==""))
    {
      setMessage("empty fields")
      console.log(password," ",email)
    }
    else
    {
      console.log(email);
      await axios.post("http://localhost:3000/donator/login",{
        email: email,
        password: password
    }).then((response) =>{
        console.log(response);
        localStorage.setItem("token","Bearer "+response.data.token)
    })

    }
    
    
  })
  /*const onSuccess=(async(res:any)=>
  {
    const result=res?.profileObj;
    const token=res?.tokenId;
    

    console.log(res);
    try{
     /* dispatch({
        type:'AUTH',
        data:{profile,token}
      })
      
  
    }
    catch(error)
    {
      console.log(error);
    }
    
    console.log("LOGIN SUCCESS! Current user : ",res.profileObj)
    navigate('/');


  });
  const onFailure=((error:any)=>
  {
    console.log("LOGIN Failed res : ",error)

  });*/

  /*interface Props{
    profile:any;
    token:string;
  }
  const App=({profile,token}:Props)=>
  {
   
  }*/

/*const googleLogin=async()=>
{
  const {data:response}=await axios.get("http://localhost:3000/donator/google");
  console.log(response);
}*/

  return (
 
    <section  className ="author_form_area "  >
      <section className="container-fluid justify-content-center">
    <form action="http://localhost:3000/donator/google" method="get">
        <h3 className="text-center">Welcome, Sign In !</h3><br/>
        <div className="mb-3">
          
          <input
            type="email"
            
            className="form-control"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
         
          <input
            type="password" 
            className="form-control"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#" className="link-secondary">password?</a>
        </p>
        <br/>
     
      <p className="text-danger text-center">{message}</p>
        
     
<hr/>
        <div className="d-grid">
          <button  className="btn btn_theme "  onClick={handleSubmit}>
            Submit
          </button>
        </div>
       
        <hr/>
        <div className="d-grid">

        
        {/* <GoogleLogin clientId={GOOGLE_CLIENT_ID}
           buttonText="Login"
            onSuccess={onSuccess}
             onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
               isSignedIn={true}>

  </GoogleLogin>*/}
          <button type="submit" className="btn btn_theme"><img style={{height:"20",width:"20px",marginRight:"20px"}} src="assets/img/icon/google.png" alt="icon" />google</button>

        </div>
        Not registred ? Sign up here : 
                                            <a href="/register" className="nav-link">Register</a>
                                     

      </form> 

      </section>
      </section> 
       );
      }
      export default LoginComponent;