import React from "react";
import s from "./FormsControl.module.css";

export const WithValidationComponent = (Component) => {
  return ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
          <Component {...input} {...props} />
        </div>
        { hasError && <span> {meta.error} </span> }
      </div>
    );
  };
}