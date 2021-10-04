import React from 'react';
import s from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=a1ae52dcb24677932c2f05f6eeaafe3a-4824599-images-thumbs&n=13&exp=1" alt="" />
      {props.message}
      <div>
        like {props.likesCount} 
      </div>
    </div>
  );
}

export default Post;