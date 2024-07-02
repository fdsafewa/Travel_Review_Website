import React from 'react';

const Fortest = () => {
    return (
      <div>
        <div className="side-left">
          <div className="sid-layy">
            <div className="row slid-roo">
              <div className="data-portion">
                <h2>Manage Your orders</h2>
                <p>
                  Add captions to your slides easily with the .carousel-caption element within any .carousel-item. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with .d-none and bring them back on medium-sized devices 
                </p>
                <ul>
                  <li>Ph :- +91 9756545434</li>
                  <li>Fax :- (+7867 65 544)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-end align-items-center vh-100">
      <div className="side-right p-40">
        <img className="logo mb-4" src="../img/website_logo.jpg" alt="logo" />
        <h2 className="mb-4">Login into Your Account</h2>
        <div className="form-row mb-3">
          <label>Email ID</label>
          <input type="text" placeholder="yourname@company.com" className="form-control form-control-sm" />
        </div>
        <div className="form-row mb-3">
          <label>Password</label>
          <input type="password" placeholder="Password" className="form-control form-control-sm" />
        </div>
        <div className="form-row row mb-3">
          <div className="col-7 d-flex align-items-center">
            <input type="checkbox" className="me-2" /> Keep me Sign In
          </div>
          <div className="col-5 text-end">
            <span><a href="#">Forget Password?</a></span>
          </div>
        </div>
        <div className="form-row mb-3">
          <button className="btn btn-sm btn-success w-100">Login</button>
        </div>
        <div className="text-center mb-3">
          <a href="#">or login with</a>
        </div>
        <div className="soc-det d-flex justify-content-center">
          <ul className="list-unstyled d-flex gap-3">
            <li className="facebook"><i className="fab fa-facebook-f"></i></li>
            <li className="twitter"><i className="fab fa-twitter"></i></li>
            <li className="pin"><i className="fab fa-pinterest-p"></i></li>
            <li className="link"><i className="fab fa-linkedin-in"></i></li>
          </ul>
        </div>
        
      </div>
      
    </div>
    <div className="copyco">
          <p>Copyrigh 2019 @ smarteyeapps.com</p> 
        </div>
       </div> 
   
    );
    
};

export default Fortest;
