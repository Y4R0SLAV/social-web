import { profile } from 'console';
import React, {FC} from 'react';
import { ContactsType, ProfileType } from '../../../types/types';
import s from "./ProfileInfo.module.css";

type ContactPropsTypes = {
  contactTitle: string
  contactInfo: string
}

const Contact: FC<ContactPropsTypes> = ({contactTitle, contactInfo}) => {
  return <div className={s.contactService}>
        <span className={s.contactTitle}> <b> {contactTitle} </b>: </span> 
        <span className={s.contactInfo}> <a href={contactInfo}> {contactInfo} </a> </span>
      </div>
}



type DescriptionBlockPropsTypes = {
  setEditDescriptionMode: (isEdit: boolean) => void
  profile: ProfileType
}

const DescriptionBlock: FC<DescriptionBlockPropsTypes> = ({setEditDescriptionMode, profile}) => {
  const contactsKey: ContactsType = profile.contacts;

  return <div className={s.description}>
    

    <div><b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}</div>
    { profile.lookingForAJob && profile.lookingForAJobDescription &&
      <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}

    <div><b>About me</b>: {profile.aboutMe}</div>
    
    <div>
      <b>Contacts</b>: 
      <div className={s.contactsList}>
        {Object.keys(profile.contacts).map((contactKey) => {
          //@ts-ignore
          return <Contact key={contactKey} contactTitle={contactKey} contactInfo={profile.contacts[contactKey]}/>
        }) }
      </div>
    </div>

    <div className={s.descriptionButtonBlock}>
      <span className={s.descriptionButton} onClick={() => setEditDescriptionMode(true)}> Change my description </span>
    </div>

  </div>
}


export default DescriptionBlock;