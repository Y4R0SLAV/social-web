import React, { FC } from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { PostType } from '../../../types/types';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  postBody: Yup.string()
    .max(100, 'Too Long!')
    .required('Required')
});

type FormPropsType = {
  createNewPost: (newPostBody: string) => void
}

const PostForm: FC<FormPropsType> = ({createNewPost}) => {
  return <Formik
      initialValues={{ postBody: ""}}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit = {(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          createNewPost(values.postBody);
          resetForm();
          setSubmitting(false);
        }, 400);  
      }}>

      {({isSubmitting, errors, touched }) => (
        <Form>
          <Field as="textarea" name="postBody" />
          {touched.postBody && errors.postBody && <div>{errors.postBody}</div>}
          <button type="submit" disabled={isSubmitting}> Create post </button>
        </Form>
      )}
    </Formik>
}


type PropsType = {
  posts: Array<PostType>
  addPost: (newPostBody: string) => void
}

const MyPosts: FC<PropsType> = React.memo(props  => {
  let postsElements = [...props.posts]
                      .reverse()
                      .map( post => <Post id={6} message={post.message} likesCount ={post.likesCount} key={post.id}/>)  // id must be individual

  const createNewPost = (postBody: string) => {
    props.addPost(postBody);
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>

      <PostForm createNewPost={createNewPost}/>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
})

export default MyPosts;