import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: () => {
      dispatch(addPostCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
