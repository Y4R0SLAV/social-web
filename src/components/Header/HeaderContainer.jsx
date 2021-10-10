import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData } from './../../redux/authReduces';
import { loginApi } from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    loginApi.login().then(data => {
      if (data.resultCode === 0) {
        this.props.setUserData(data.data.id, data.data.email, data.data.login);
      }
    });
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);