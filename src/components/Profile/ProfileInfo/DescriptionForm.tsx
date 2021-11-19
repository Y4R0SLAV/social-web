import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import { Formik, Form, Field} from 'formik';
import { ProfileType } from '../../../types/types';

type PropsType = {
  profile: ProfileType
  setEditDescriptionMode: (isEdit: boolean) => void
  setProfileData: (profile: ProfileType) => void
}

const DescriptionBlockForm: FC<PropsType> = ({profile, setEditDescriptionMode, setProfileData}) => {
  return <Formik
      initialValues={{ lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        aboutMe: profile.aboutMe,
                        contacts: {
                          github: profile.contacts.github,
                          vk: profile.contacts.vk,
                          facebook: profile.contacts.facebook,
                          instagram: profile.contacts.instagram,
                          twitter: profile.contacts.twitter,
                          website: profile.contacts.website,
                          youtube: profile.contacts.youtube,
                          mainLink: profile.contacts.mainLink
                        }  }}

      onSubmit = {(values, { setSubmitting }) => {
        setTimeout(() => {
          setEditDescriptionMode(false);
          setProfileData({...profile, ...values});
          setSubmitting(false);
        }, 400);  
      }}>

      {({ isSubmitting }) => (
        <Form>
          <div> <b> Looking for a job</b>  <Field type="checkbox" name="lookingForAJob" /> </div>
          <div> <b> My professional skills</b>  <Field as="textarea" type="textarea" name="lookingForAJobDescription" /> </div>
          <div> <b> About me</b>  <Field as="textarea" type="textarea" name="aboutMe" /> </div>
          <div>
            <b>Contacts: </b>
            <div className={s.contactsList}>
              <div><b>Github</b>:<Field type="github" name="contacts[github]"/></div>
              <div><b>Vk</b>:<Field type="vk" name="contacts[vk]"/> </div>
              <div><b>Facebook</b>:<Field type="facebook" name="contacts[facebook]"/> </div>
              <div><b>Instagram</b>:<Field type="instagram" name="contacts[instagram]"/></div>
              <div><b>Twitter</b>:<Field type="twitter" name="contacts[twitter]"/></div>
              <div><b>Website</b>:<Field type="website" name="contacts[website]"/></div>
              <div><b>Youtube</b>:<Field type="youtube" name="contacts[youtube]"/></div>
              <div><b>Main link</b>:<Field type="mainLink" name="contacts[mainLink]"/></div>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}> Submit </button>
        </Form>
      )}
    </Formik>
}

export default DescriptionBlockForm;