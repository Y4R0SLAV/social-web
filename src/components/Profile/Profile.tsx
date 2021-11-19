import React, { FC } from 'react';
import { ProfileType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  setProfileData: (profile: ProfileType) => void
  savePhoto: (photo: any) => void
}

const Profile: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, setProfileData}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} 
                    updateStatus={updateStatus} isOwner={isOwner}
                    savePhoto={savePhoto}
                    setProfileData={setProfileData}/>
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;