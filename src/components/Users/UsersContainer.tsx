import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, requestUsers } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/selectors/usersSelectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>}

type MapDispatchPropsType = {  
  getUsers: (pageNumber: number, pageSize: number) => void
  setCurrentPage: (pageNumber: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void}

type OwnPropsType = {
  title: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <>
      <h2>{this.props.title}</h2>
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers: requestUsers}),
  withAuthRedirect)(UsersComponent);