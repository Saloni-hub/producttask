import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Product from './Product'
import Footer from './Footer'
const Home = () => {
    return (
        <div id="home" className="caru">
            <Navbar/>
            <Slider/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Home;
