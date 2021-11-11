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

const LoginForm = ({login}) => {
  return <Formik
      initialValues={{ email: "", password: "", rememberMe: false}}

      onSubmit = {(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          const response = login(values, setFieldError);
          setSubmitting(false);
        }, 400);  
      }}>

      {({ errors, touched, isSubmitting}) => (
        <Form>
          
          <Field type="email" name="email" /> <br />
          <Field type="password" validate={validatePassword} name="password" />  <br />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <Field type="checkbox" name="rememberMe" /> <br />

          <button type="submit" disabled={isSubmitting}> Submit </button>
        </Form>
      )}
    </Formik>
}

const Login = ({login, isAuth}) => {
  if (isAuth) { 
    return (<Redirect to="/profile"/>);
  };

  return <>
  <h1> login </h1>
  <LoginForm login={login}/>
  </>
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {login})(Login);