import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={s.my_posts}>
      my posts

      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi! How are you?" likesCount ="15"/>
        <Post message="It's my first post" likesCount ="20"/>
      </div>
    </div>
  );
}

export default MyPosts;