import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let stateProfile = props.store.getState().profilePage;

  const createNewPost = () => {
    props.store.dispatch(addPostCreator());
  }
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <MyPosts
      createNewPost={createNewPost}
      onPostChange={onPostChange}
      posts={stateProfile.posts}
      newPostText={stateProfile.newPostText} />);
}

export default MyPostsContainer;
