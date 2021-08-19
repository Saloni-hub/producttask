import React from 'react'

const Login = () => {
    return (
        <>
        <div>
             <form>  
             <div class="Loginpaged container">   
            <label>EMAIL</label>   
            <input type="email" placeholder="youremail@gmail.com" name="email"  required/>  
            <label>PASSWORD </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
             Forgot Password?
            <button type="submit">LET'S GO !</button>  
        </div>  
        </form> 
        </div>
        </>
    )
}

export default Login
