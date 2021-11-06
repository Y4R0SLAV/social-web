import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/user.img'


const Contact = ({contactTitle, contactInfo}) => {
  return <div className={s.contactService}> <b> {contactTitle} </b>: {contactInfo} </div>
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={s.header}>
        <img src="https://phonoteka.org/uploads/posts/2021-03/1616706027_48-p-kartinki-dlya-fona-saita-53.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <img src={profile.photos.large || userPhoto } className={s.avatar}/>
          { isOwner && <input type="file" onChange = {onAvatarSelected}/>}
        </div>
        

        <div className={s.description}>

          <div className={s.fullName}> {profile.fullName} </div>
          <ProfileStatus status={status} updateStatus={updateStatus}/>

          <div><b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}</div>
          { profile.lookingForAJob && profile.lookingForAJobDescription && <div><b>Profile skills</b>: {profile.lookingForAJobDescription}</div>}
          
          <div className={s.contactsList}>
            {Object.keys(profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactInfo={profile.contacts[key]}/>
            }) }
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