import React from 'react';
import s from "./Profile.module.css";


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://phonoteka.org/uploads/posts/2021-03/1616706027_48-p-kartinki-dlya-fona-saita-53.jpg" />
      </div>// https://avatars.mds.yandex.net/i?id=f35f03d96b85e770f1e7eae0cc530275-5305831-images-thumbs&n=13&exp=1
      <div>
        ava + desc
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;