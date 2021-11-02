import React, { useState, useEffect } from 'react';


const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  
  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }
  
  return <div>
  { editMode 
    ? <div> <input autoFocus = {true} onBlur={deactivateEditMode} value = {status} onChange={onChangeStatus}/> </div>
    : <div> <span onClick={activateEditMode}> {props.status || "--------------"} </span> </div> 
  }
</div>
}
export default ProfileStatus;