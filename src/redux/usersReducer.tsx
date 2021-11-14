import { usersApi } from "../api/api"
import { updateObjectInArray } from '../utilits/objectHelpers'
import { PhotosType, UserType } from "../types/types"

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FEATCHING = "users/TOGGLE_IS_FEATCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // array of users id
}

export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }

    case SET_USERS:
      return { ...state, users: [...action.users] }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }

    case TOGGLE_IS_FEATCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }

    default:
      return state;
  }
}

type FollowSuccesActionType = { type: typeof FOLLOW, userId: number }
export const followSuccess = (userId: number): FollowSuccesActionType => ({ type: FOLLOW, userId })

type UnfollowSuccesActionType = { type: typeof UNFOLLOW, userId: number }
export const unfollowSuccess = (userId: number): UnfollowSuccesActionType => ({ type: UNFOLLOW, userId })

type SetUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })

type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType  => ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

type ToggleIsFetchingActionType = { type: typeof TOGGLE_IS_FEATCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FEATCHING, isFetching })

type ToggleIsFollowingProgresActionType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing: boolean, id: number }
export const toggleIsFollowingProgress = (isFollowing: boolean, id: number): ToggleIsFollowingProgresActionType => (
  { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, id })

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true))

  let data = await usersApi.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followOrUnfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  let data = await apiMethod(userId)
  if (data.resultCode === 0) { dispatch(actionCreator(userId)); }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersApi.follow.bind(usersApi)
  followOrUnfollow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersApi.unfollow.bind(usersApi)
  followOrUnfollow(dispatch, userId, apiMethod, unfollowSuccess)
}


export default usersReducer