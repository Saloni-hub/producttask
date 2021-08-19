import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const LgginSignup = () => {
    return (
        <>
        <div className="login"> 
            <Navbar/>
            <p>DenyDesigns.</p>
            <p className="sale" style={{color:'gray'}}>WHOLESALE LOGIN</p>
            <Login/>
            <h4>Not a WholeSale Patner?</h4>
            <div className="butt">
            <Link to ="/login" className="link btnn">KEEP BROWSING</Link>
            <Link to="/signup" className="link btnn">APPLY HERE</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default LgginSignup
