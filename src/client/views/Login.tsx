import React, { Fragment } from "react";
import "../scss/login";
import { Link } from "react-router-dom";

const Login: React.FC<{}> = () => {
  return (
    <>
      <div className="login-container d-flex align-items-center justify-content-center">
        <form className="login-form text-center">
          <h1 className="mb-2 font-weight-light text-uppercase" id="login2" >Login</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg "
              placeholder="Password"
            />
          </div>
          <div className="forgot-link d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember"/>
              <label id="form-color" >Remember Password</label>

            </div>
            <Link to="" id="link" >Forgot Password</Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg login-1"
          >
            Login
          </button>
          <p className="mt-3 font-weight-normal" id='form-color'>
            Don't have an account? <Link to="#" id="link" >Register Now</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
