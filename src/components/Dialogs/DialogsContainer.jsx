import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageBodyCreator(text)); 
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;