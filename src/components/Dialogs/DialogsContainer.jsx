import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { sendMessage } from './../../redux/dialogReducer';

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect)(Dialogs);
