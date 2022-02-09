import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="container">
            <form className="w-50 m-auto">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button><br></br>
  <br></br>
  
  
</form>

<button onClick={signInUsingGoogle} type="submit" className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;