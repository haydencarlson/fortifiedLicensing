import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Fortify Licensing Panel</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><p className="navbar-text">Already have an account?</p></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
      			<ul id="login-dp" className="dropdown-menu">
      				<li>
      					 <div className="row">
      							<div className="col-md-12">
      								Login via
      								<div className="social-buttons">
      									<a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
      									<a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
      								</div>
                                      or
      								 <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
      										<div className="form-group">
      											 <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
      											 <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
      										</div>
      										<div className="form-group">
      											 <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
      											 <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                                   <div className="help-block text-right"><a href="">Forget the password ?</a></div>
      										</div>
      										<div className="form-group">
      											 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      										</div>
      										<div className="checkbox">
      											 <label>
      											 <input type="checkbox"/> keep me logged-in
      											 </label>
      										</div>
      								 </form>
      							</div>
      							<div className="bottom text-center">
      								New here ? <a href="#"><b>Join Us</b></a>
      							</div>
      					 </div>
      				</li>
      			</ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
