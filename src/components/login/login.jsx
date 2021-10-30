import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { toLogin } from './../../redux/authReduces';
import { MaxLengthCreator, requiered } from './../../utilits/validators/validator';
import {WithValidationComponent} from './../common/FormsControl/FormsControl';



const maxLength20 = MaxLengthCreator(20);
const Input = WithValidationComponent('input')

const LoginForm = (props) => {
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