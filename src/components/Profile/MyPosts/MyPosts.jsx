import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount ={post.likesCount}/>) 
  let newPostElement = React.createRef();

  const createNewPost = () => {
    props.dispatch(addPostCreator());
  }

  const onPostChange = () => {
    props.dispatch(updateNewPostTextCreator(newPostElement.current.value));
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.textPost}/>
        </div>
        <div>
          <button onClick={createNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;