import React, { useState } from "react";
import { connect } from 'react-redux';
import { login } from '../../redux/authReduces';
import { Redirect } from 'react-router';
import { Formik, Form, Field} from 'formik';
import s from './../common/FormsControl/FormsControl.module.css';

const validatePassword = (value) => {
  if (value === "123") {
    return "wrong password";
  } return "";
}

const LoginForm = ({login, captchaUrl}) => {
  return <Formik
      initialValues={{ email: "", password: "", rememberMe: false, captcha: ""}}

      onSubmit = {(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          login(values, setFieldError);
          setSubmitting(false);
        }, 400);  
      }}>

      {({ errors, touched, isSubmitting}) => (
        <Form>
          
          <Field type="email" name="email" /> <br />
          <Field type="password" validate={validatePassword} name="password" />  <br />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <Field type="checkbox" name="rememberMe" /> <br />

          {captchaUrl && <img src={captchaUrl}/>}  <br />
          {captchaUrl && <Field name="captcha" /> }

          <button type="submit" disabled={isSubmitting}> Submit </button>
        </Form>
      )}
    </Formik>
}

const Login = ({login, isAuth, captchaUrl}) => {
  if (isAuth) { 
    return (<Redirect to="/profile"/>);
  };

  return <>
  <h1> login </h1>
  <LoginForm login={login} captchaUrl={captchaUrl}/>
  </>
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl});

export default connect(mapStateToProps, {login})(Login);