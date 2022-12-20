
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { ethers } from "ethers";

import axios from "axios";

const RegisterComponent =()=> {
  const [message,setMessage]=useState("");
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    address:"",
    gouvernorat:"",
    city:"",
    position:"",
    telephone:""
  })
  const CountryList = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kébili",
    "Le Kef",
    "Mahdia",
    "La Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan"
];        

  const navigate = useNavigate();


  const handleChange=(e:any)=>{
    console.log(e.target)
    const name=e.target.name;
    const value=e.target.value;
    setUser((prev)=>{
      return {...prev,[name]:value}
    })

  }
  console.log(user);
  const handleSubmit=(async(event:any)=>
  {
    event.preventDefault();
    console.log(user.address);
    /** mail regex */
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    /**Has minimum 8 characters in length. Adjust it by modifying {8,}
    At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
    At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
    At least one digit. You can remove this condition by removing (?=.*?[0-9])
    At least one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-]) */


    const pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    console.log("aziz")
    if((user.password=="")||(user.email=="")||(user.name==="")||(user.city==="")||(user.address==="")||(user.position==="")||(user.telephone==="")||(user.gouvernorat===""))
    {
      setMessage("empty fields")
      console.log(user.password," ",user.email)
    } else if (!regex.test(user.email)) {
      setMessage("This is not a valid email format!")
    } else if (!pwdregex.test(user.password)) {
      setMessage("Password is weak")
    }
    else{
 
      await axios.post('http://localhost:3000/donator', {
        body:user
      })
        .then((res) => 
        
        console.log(res))
        
        .catch((err) => {
           console.log(err.message);
        });
        navigate('/login');
    }


   
  })


  return (
    <section className ="author_form_area " >
    <section className="container-fluid justify-content-center">
  <form>
      <h3 className="text-center">Join Us, Register!</h3>
      <br/>
      
      <div className="mb-3">
        
        <input name="name" 
          required
          type="text"
          className="form-control"
          placeholder="Enter full name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        
        <input name="address"
          required
          type="text"
          className="form-control"
          placeholder="Enter full address"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        
        <input name="email"
          required
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
        />

      </div>

                  
                  <div className="mb-3">
                       <input 
                       name="password"
                        required
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                         onChange={handleChange}/>
                       
                   </div>

                   <div className="mb-3">
                   <Form.Select aria-label="Default select example"  name="gouvernorat"  onChange={handleChange}>
            <option>Gouvernorats</option>
            {CountryList.map((option:any,index:any) => (
               
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Form.Select>
                       
                   </div>
                   <div className="mb-3">
                       <input 
                       name="city"
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your city"
                         onChange={handleChange}/>
                       
                   </div>
                   <div className="mb-3">
                       <input 
                       name="position"
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your position"
                         onChange={handleChange}/>
                       
                   </div>
                   <div className="mb-3">
                       <input 
                       name="telephone"
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your tel"
                         onChange={handleChange}/>
                       
                   </div>
                

                   
       
       
       <p className="text-danger text-center">{message}</p>

      <div className="d-grid">
        <button className="btn btn_theme "   type="submit" onClick={handleSubmit} >
          Submit
        </button>
      </div>
 

      <hr/>

      <div className="d-grid">
        {/*<button className="btn btn_theme "   type="submit" >
         continue with google
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
         </svg>
         
            </button>*/}
      </div>

    </form> 
    </section>
    </section> 

  );
}
export default RegisterComponent;