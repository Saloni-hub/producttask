import React from 'react'
const Footer = () => {
    return (
        <div className="container">
            <h1>Footer</h1>
            <footer>
                    <div>
                      <h2>Company</h2>    
                      <ul>
                          <li>Shipping</li>
                          <li>Return Policy</li>
                          <li>Work with Us</li>
                          <li>Terms&Condition</li>
                      </ul>
                    </div>  
                    <div>
                         <h2>Follow us out there</h2>
                          <ul>
                          <li><i class="fab fa-facebook"></i>Faceboook</li>
                          <li><i class="fab fa-twitter"></i>Twitter</li>
                          <li><i class="fab fa-github"></i>Github</li>
                          <li><i class="fab fa-instagram"></i>Instagram</li>
                          </ul>
                    </div>  
                    <div>
                       <h2>Thank You</h2>    
                       <p>Thank you to wonderful folkks over at Herbivore for letting us their beautiful imagery in this demo.</p>
                    </div>  
                    <div>
                       <h2>NEWSLETTER</h2>    
                       <input type="text" value="your@email.com"/>
                       <input type="button" value="SUBSCRIBE"/>
                    </div> 
            </footer> 
        </div>
    )
}

export default Footer
