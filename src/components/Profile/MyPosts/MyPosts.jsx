import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import WithReduxFormComponent from './../../../hoc/withReduxFrom';
import {WithValidationComponent} from './../../common/FormsControl/FormsControl';
import { requiered } from '../../../utilits/validators/validator';
import { MaxLengthCreator } from './../../../utilits/validators/validator';


const maxLength100 = MaxLengthCreator(100);
const Textarea = WithValidationComponent('textarea');

const PostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name="postBody" validate={[requiered, maxLength100]}/>
    </div>
    <div>
      <button >Add post</button>
    </div>
  </form>
}

const PostWithResux = WithReduxFormComponent(PostForm, 'post');

const MyPosts = (props) => {
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount ={post.likesCount} key={post.id}/>) 

  const createNewPost = (formData) => {
    props.addPost(formData.postBody);
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <PostWithResux onSubmit={createNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;