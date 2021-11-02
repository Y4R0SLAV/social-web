import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  const contacts = profile.contacts;

  return (
    <div>
      <div className={s.header}>
        <img src="https://phonoteka.org/uploads/posts/2021-03/1616706027_48-p-kartinki-dlya-fona-saita-53.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        
        <div className={s.avatar}>
          <img src={profile.photos.large}/>
        </div>

        <div className={s.description}>

          <div className={s.fullName}>
            {profile.fullName}
          </div>

          <ProfileStatus status={status} updateStatus={updateStatus}/>

          <div className={s.contacts}>
            <ul className={s.contactsList}>
              <li><span className={s.contactService}>facebook: </span><a href="">{contacts.facebook}</a></li>
              <li><span className={s.contactService}>website: </span><a href="">{contacts.swebsite}</a></li>
              <li><span className={s.contactService}>vk: </span><a href="">{contacts.vk}</a></li>
              <li><span className={s.contactService}>twitter: </span><a href="">{contacts.twitter}</a></li>
              <li><span className={s.contactService}>instagram: </span> <a href="">{contacts.instagram}</a></li>
              <li><span className={s.contactService}>youtube: </span><a href="">{contacts.youtube}</a></li>
              <li><span className={s.contactService}>github: </span><a href="">{contacts.github}</a></li>
              <li><span className={s.contactService}>mainLink: </span><a href="">{contacts.mainLink }</a></li>
            </ul>
          </div>

          <div className={s.lookingForAJob}>
            {profile.lookingForAJob}
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProfileInfo;