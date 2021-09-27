import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.header}>
        <img src="https://phonoteka.org/uploads/posts/2021-03/1616706027_48-p-kartinki-dlya-fona-saita-53.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;