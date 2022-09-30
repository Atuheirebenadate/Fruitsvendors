import React from "react";
import Navbar from'./Navbar';

function Navbar() {
    return (
      <div className="Navbar">
        <Router>
                <nav>
                <Link className='links' to="/fruits"> <button className='nav' >Fruits</button> </Link>
                <Link className='links' to="/vegetables"> <button className='nav' >Vegetables</button> </Link>
                <Link className='links' to="/"> <button className='nav' >Form</button> </Link>
                </nav>
                <Routes>
                   <Route path='/' element={<Form/>} exact component ={Form} />
                   <Route path='/vegetables' element={<Vegetables/>} exact component={Goods}/>
                   <Route path='/fruits' element={<Fruits/>} exact component={Fruits}/>
                </Routes>
              </Router>
      </div>
    );
  }
  export default Navbar;