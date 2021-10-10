import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { toLogin } from './../../redux/authReduces';


class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.toLogin();
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {toLogin})(HeaderContainer);