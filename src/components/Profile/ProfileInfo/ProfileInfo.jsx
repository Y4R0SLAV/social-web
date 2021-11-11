import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.img';
import ProfileStatus from './ProfileStatus';
import DescriptionBlock from './Description';
import DescriptionBlockForm from './DescriptionForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, setProfileData}) => {
  const [editDescriptionMode, setEditDescriptionMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.profileWrapper}>
      <div className={s.leftSide}>
        <div>
          <img src={profile.photos.large || userPhoto } className={s.avatar}/> <br />
          { isOwner && <input type="file" onChange = {onAvatarSelected}/>}
        </div>
      </div>

      <div className={s.rightSide}>
        <div className={s.nameAndStatus}>
          <div className={s.fullName}> {profile.fullName} </div>
          <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>

        <div>
          {!editDescriptionMode 
          ? <DescriptionBlock profile={profile} setEditDescriptionMode={setEditDescriptionMode}/>
          : <DescriptionBlockForm profile={profile} setEditDescriptionMode={setEditDescriptionMode} setProfileData={setProfileData}/>}
                        
        </div>
      </div>
      

    </div>
  );
}

export default ProfileInfo;