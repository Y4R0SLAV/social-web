import React, { useState, FC } from "react"
import { connect } from 'react-redux'
import { login } from '../../redux/authReduces'
import { Redirect } from 'react-router'
import { Formik, Form, Field} from 'formik'
import s from './../common/FormsControl/FormsControl.module.css'
import { AppStateType } from "../../redux/reduxStore"

type LoginFormPropsType = {
  login: (values: {
    email: string
    password: string
    rememberMe: boolean
    captcha: string}, setFieldError: any) => void
  captchaUrl: string | null
}

const LoginForm: FC<LoginFormPropsType> = ({login, captchaUrl}) => {
  return <Formik
      initialValues={{ email: "", password: "", rememberMe: false, captcha: ""}}

      onSubmit = {(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          login(values, setFieldError)
          setSubmitting(false)
        }, 400);  
      }}>

      {({ errors, touched, isSubmitting}) => (
        <Form>
          
          <Field type="email" name="email" /> <br />
          <Field type="password" name="password" />  <br />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <Field type="checkbox" name="rememberMe" /> <br />

          {captchaUrl && <img src={captchaUrl}/>}  <br />
          {captchaUrl && <Field name="captcha" /> }

          <button type="submit" disabled={isSubmitting}> Submit </button>
        </Form>
      )}
    </Formik>
}

type LoginPropsType = {
  isAuth: boolean 
}

const Login: FC<LoginPropsType & LoginFormPropsType> = ({login, isAuth, captchaUrl}) => {
  if (isAuth) { 
    return (<Redirect to="/profile"/>)
  }

  return <>
  <h1> login </h1>
  <LoginForm login={login} captchaUrl={captchaUrl}/>
  </>
}

const mapStateToProps = (state: AppStateType) => ({isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl})

export default connect(mapStateToProps, {login})(Login)