import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  let contacts = props.profile.contacts;

  return (
    <div>
      <div className={s.header}>
        <img src="https://phonoteka.org/uploads/posts/2021-03/1616706027_48-p-kartinki-dlya-fona-saita-53.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large}/>
        </div>
        <div className={s.description}>
          <div className={s.fullName}>
            {props.profile.fullName}
          </div>
          <div className={s.status}>
            {props.profile.aboutMe}
          </div>
          <div className={s.contacts}>
            <ul className={s.contactsList}>
              <li><span className={s.contactService}>facebook: </span><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></li>
              <li><span className={s.contactService}>website: </span><a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></li>
              <li><span className={s.contactService}>vk: </span><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></li>
              <li><span className={s.contactService}>twitter: </span><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></li>
              <li><span className={s.contactService}>instagram: </span> <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></li>
              <li><span className={s.contactService}>youtube: </span><a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></li>
              <li><span className={s.contactService}>github: </span><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></li>
              <li><span className={s.contactService}>mainLink: </span><a href={props.profile.contacts.mainLink }>{props.profile.contacts.mainLink }</a></li>
            </ul>
          </div>
          <div className={s.lookingForAJob}>
            {props.profile.lookingForAJob}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;