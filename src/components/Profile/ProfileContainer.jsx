import React from 'react';
import Profile from './Profile';
import { getProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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
  profile: state.profilePage.profile
});

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithUrlProfileContainer);