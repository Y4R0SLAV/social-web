import React, { FC, useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'
import DescriptionBlock from './Description'
import DescriptionBlockForm from './DescriptionForm'  
import { ProfileType } from '../../../types/types';

type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: () => void
  setProfileData: (profile: ProfileType) => void
}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, setProfileData}) => {
  const [editDescriptionMode, setEditDescriptionMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
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