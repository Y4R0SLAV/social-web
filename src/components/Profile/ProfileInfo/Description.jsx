import React from 'react';
import s from "./ProfileInfo.module.css";

const Contact = ({contactTitle, contactInfo}) => {
  return <div className={s.contactService}>
        <span className={s.contactTitle}> <b> {contactTitle} </b>: </span> 
        <span className={s.contactInfo}> <a href={contactInfo}> {contactInfo} </a> </span>
      </div>
}

const DescriptionBlock = ({setEditDescriptionMode, profile}) => {
  return <div className={s.description}>
    

    <div><b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}</div>
    { profile.lookingForAJob && profile.lookingForAJobDescription &&
      <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}

    <div><b>About me</b>: {profile.aboutMe}</div>
    
    <div>
      <b>Contacts</b>: 
      <div className={s.contactsList}>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactInfo={profile.contacts[key]}/>
        }) }
      </div>  
    </div>

    <div className={s.descriptionButtonBlock}>
      <span className={s.descriptionButton} onClick={() => setEditDescriptionMode(true)}> Change my description </span>
    </div>

  </div>
}

export default DescriptionBlock;