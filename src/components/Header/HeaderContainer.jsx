import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { loginButton } from './../../redux/authReduces';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.loginButton();
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {loginButton})(HeaderContainer);