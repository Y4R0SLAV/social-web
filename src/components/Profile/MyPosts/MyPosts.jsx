import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = () => {

  let posts = [
    {id:1, message:"Hi! How are you?", likesCount:12}, 
    {id:2, message:"It's my first post", likesCount:11}
  ]

  let postsElements = posts.map( post => <Post message={post.message} likesCount ={post.likesCount}/>) 

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;