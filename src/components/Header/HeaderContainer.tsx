import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReduces'
import { AppStateType } from '../../redux/reduxStore'

type StateProps = {
  isAuth: boolean
  login: string | null
}

type DispatchProps = {
  logout: () => void
}

type Props = StateProps & DispatchProps

class HeaderContainer extends React.Component<Props> {
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
  }
}

const mapStateToProps = (state: AppStateType): StateProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect<StateProps, DispatchProps, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)