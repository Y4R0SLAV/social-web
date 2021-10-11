import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;