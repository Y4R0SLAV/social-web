import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";   

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        { this.state.editMode 
          ? <div> <input autoFocus = {true} onBlur={this.deactivateEditMode} value = {this.state.status} onChange={this.onChangeStatus}/> </div>
          : <div> <span onClick={this.activateEditMode}> {this.props.status || "--------------"} </span> </div> }
        
        
      </div>
    )
  }
}

export default ProfileStatus;