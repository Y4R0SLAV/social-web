import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { sendMessage } from '../../redux/dialogReducer'
import { AppStateType, DialogsPageType } from '../../redux/reduxStore'

type StateProps = {
  messagesPage: DialogsPageType
}

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    messagesPage: state.messagePage
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect)(Dialogs);
