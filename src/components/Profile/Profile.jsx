import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} textPost={props.profilePage.newPostText} updateNewPost={props.updateNewPost}/>
    </div>
  );
}

export default Profile;