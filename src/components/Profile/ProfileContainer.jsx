import React from 'react';
import Profile from './Profile';
import { getProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2; }
    this.props.getProfile(userId);
  }

  render(){
    return <Profile {...this.props} profile = {this.props.profile}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getProfile}),
  withAuthRedirect,
  withRouter)(ProfileContainer);