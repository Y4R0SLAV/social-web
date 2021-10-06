import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    console.log(userId);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render(){
    return <Profile {...this.props} profile = {this.props.profile}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);