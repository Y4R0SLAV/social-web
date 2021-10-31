import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { login } from './../../redux/authReduces';
import { requiered } from './../../utilits/validators/validator';
import {WithValidationComponent} from './../common/FormsControl/FormsControl';
import { Redirect } from 'react-router';
import s from './../common/FormsControl/FormsControl.module.css';

const Input = WithValidationComponent('input');

const LoginForm = (props) => {
  console.log(props);
  return <form onSubmit={props.handleSubmit}> 
    <div>
      <Field component={Input} name="login"
              type="text" placeholder="Login"
              validate={[requiered]} />
      </div>
    <div>
      <Field component={Input} name="password"
              type="password" placeholder="Password"
              validate={[requiered]}/></div>

    <div>
      <Field component={Input} name="rememberMe"
              type="checkbox" /> remember me
    </div>

    {props.error && <div className={s.commonError}>
      {props.error}
    </div>}
    
    <div><button>Login</button></div>
  </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);



const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  }

  if (props.isAuth) { 
    return (<Redirect to="/profile"/>);
  };

  return (<>
  <h1> login </h1>
  <LoginReduxForm onSubmit={onSubmit}/>
  </>)
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
export default connect(mapStateToProps, {login})(Login);