import React from "react";
import './Form.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';



function Signup() {
    return (
        <div className="all">
         <div className="container">

            <div className="forms">
                
                <p className="title"><span>FruitVendors</span></p>
                
                <h1>Welcome to <br/>
                    FruitVendors
                    <br/>
                    Buy
                </h1>
                <h5>Sign Up  get your fevourate Gig</h5>
        
            </div>
            <div />
            {/* <div className="col1">
                <label className="myname">Name
                <input type="name" name="fullname" placeholder=""></input>
                </label>
                <div/>
                </div> */}
          
            <div className='col'>

                    <div className='txt-fld'>
                        <label className="form-label">Email
                         <input type="email" name="emailAddress" placeholder=""/>
                        
                        </label>
                </div>
                <div className='txt-fld'>
                        <label>Password
                        <input type="password" name="password" placeholder="" />
                        </label>
                </div>

                <div className='check_box'>
                      
                  </div>

                <div>
                 {/* <button type="login">Sign in</button> */}
                    <Router>
                    <Link to ="/Fruits">
                    <button type="login">Explore</button> </Link>
                    <a href="https://localhost:5000"target="_blank" rel="noreferrer">
                    <button>Login</button>
                </a>
                    </Router>
                    <div/>
                
                    </div>
        

                    <p>____________________________ or Login _____________________________</p>

            </div>
      
        <div/>
        <div/>
        <div className="container2">
            <div className="sub">
            <h5>Fruitvendors is the most marketable platform that contacts<br/>orders of  to fresh Fruits and vegetables</h5>
            <h5>FruitVendors Market Place</h5>
            <p>From Experts</p>
            </div>

        </div>
        </div>
        </div>
    );
    
}
export default Signup