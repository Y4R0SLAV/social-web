import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ?  <Preloader/> : null}
      <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged} 
                      followingInProgress = {this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers})(withAuthRedirect(UsersComponent));