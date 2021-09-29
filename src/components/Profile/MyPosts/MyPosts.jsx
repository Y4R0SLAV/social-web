import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount ={post.likesCount}/>) 
  let newPostElement = React.createRef();

  const createNewPost = () => {
    props.dispatch({type: "ADD-POST"});
  }

  const onPostChange = () => {
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newPostElement.current.value});
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