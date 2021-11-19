import { Redirect } from 'react-router'
import React, { ComponentProps } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/reduxStore'



export const withAuthRedirect = (Component: ComponentProps<any>) => {
  let mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth })
  type StateProps = {isAuth: boolean}

  class RedirectComponent extends React.Component<StateProps> {
    render() {
      if (!this.props.isAuth) {return <Redirect to={'/login'}/>}
      return <Component {...this.props}/>
    }
  }

  return connect<StateProps, {}, {}, AppStateType>(mapStateToProps)(RedirectComponent)
}