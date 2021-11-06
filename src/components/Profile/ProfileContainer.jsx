import React from 'react';
import Profile from './Profile';
import { getProfile, getUserStatus, updateUserStatus, savePhoto } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  refreshProfilePage() {
    let userId = this.props.match.params.userId;
    
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfilePage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfilePage();
    }
  }

  render(){
    if (!this.props.isAuth) return <Redirect to='/login'/>;
    return <Profile {...this.props} profile = {this.props.profile}
                    status = {this.props.status}
                    updateStatus={this.props.updateUserStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId
});

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, savePhoto}),
  /*withAuthRedirect, */
  withRouter)(ProfileContainer);