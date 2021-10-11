import React from 'react';
import Profile from './Profile';
import { getProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2; }
    this.props.getProfile(userId);
  }

  render(){
    if (!this.props.isAuth) return <Redirect to={'/login'} />

    return <Profile {...this.props} profile = {this.props.profile}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithUrlProfileContainer);