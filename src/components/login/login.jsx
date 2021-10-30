import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { toLogin } from './../../redux/authReduces';

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}> 
    <div><Field component="input" name="login" type="text" placeholder="Login"/></div>
    <div><Field component="input" name="password" type="password" placeholder="Password"/></div>
    <div><Field component="input" name="rememberMe" type="checkbox"/> remember me </div>
    <div><button>Login</button></div>
  </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.toLogin(formData.login, formData.password, formData.rememberMe);
  }

  return <>
  <h1> login </h1>
  <LoginReduxForm onSubmit={onSubmit}/>
  </>
}

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, {toLogin})(Login);