import React from 'react';
import Profile from './Profile';
import { getProfile, getUserStatus, updateUserStatus } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2; }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render(){
    return <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus={this.props.updateUserStatus}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
  /*withAuthRedirect, */
  withRouter)(ProfileContainer);