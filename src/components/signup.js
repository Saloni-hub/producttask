import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
const Signup = () => {
    return (
       <>
       <div className="login">
            <Navbar/>
            <h1>User Registration</h1>
             <form>  
                
           <div class="Loginpaged container">    
            <label>FIRSTNAME</label>   
            <input type="text" placeholder="FirstName" name="Firstname"  required/>  
            <label>LASTNAME</label>   
            <input type="text" placeholder="lastName" name="lastname"  required/> 
            <label>EMAIL</label>   
            <input type="email" placeholder="youremail@gmail.com" name="email"  required/>  
            <label>PASSWORD </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
             
            <button type="submit" className="btnn">REGISTER</button> 

            <Link to="/login" className="btnn link">Have a Account</Link> 
            <button></button>
                
        </div>   
        </form>    
        </div>
        <Footer/>
        </>
    )
}

export default Signup
