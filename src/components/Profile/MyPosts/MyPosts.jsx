import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  postBody: Yup.string()
    .max(100, 'Too Long!')
    .required('Required')
});

const PostForm = ({createNewPost}) => {
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

const MyPosts = React.memo(props  => {
  let postsElements = [...props.posts]
                      .reverse()
                      .map( post => <Post message={post.message} likesCount ={post.likesCount} key={post.id}/>) 

  const createNewPost = (postBody) => {
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