import React from 'react';
import Profile from './Profile';
import { getProfile, getUserStatus, updateUserStatus, savePhoto, setProfileData } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect, RouteComponentProps } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../types/types';


type StatePropsType = {
  profile: ProfileType | null
  status: string
  isAuth: boolean
  authorizedUserId: number | null
}

type DispatchPropsType = {
  getProfile: (userId: number) => ProfileType
  getUserStatus: (userId: number) => string
  updateUserStatus: (status: string) => void
  savePhoto: (photo: any) => void
  setProfileData: (profile: ProfileType) => void
}

type OwnPropsType = {}
type PropsType = StatePropsType & DispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{userId: string | undefined}>, {}> {
  refreshProfilePage() {
    let userId = 0
    if (this.props.match.params.userId) {
      userId = +this.props.match.params.userId;
    }
    else {
      userId = this.props.authorizedUserId || 1;
    }

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfilePage();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfilePage();
    }
  }

  render(){
    if (!this.props.isAuth) return <Redirect to='/login'/>;
    return <Profile {...this.props} profile = {this.props.profile || null}
                    status = {this.props.status}
                    updateStatus={this.props.updateUserStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    setProfileData={this.props.setProfileData}/>
  }
}

let mapStateToProps = (state: AppStateType): StatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId
});

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, savePhoto, setProfileData}),
  /*withAuthRedirect, */
  withRouter)(ProfileContainer);