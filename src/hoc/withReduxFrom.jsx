import React from 'react';
import { reduxForm, reset } from 'redux-form';


const WithReduxFormComponent = (Component, formName) => {
  const afterSubmit = (result, dispatch) => {
    dispatch(reset(formName));
  }

  const FormComponent =  reduxForm({form: formName, onSubmitSuccess: afterSubmit})(Component);
  return FormComponent;
}

export default WithReduxFormComponent;