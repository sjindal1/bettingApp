import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {required, email} from './helpers/registerValidation'
import submit from './helpers/loginOnSubmit'

const renderField = ({ input, label, type, name, divClassName, meta: { touched, error, warning } }) => (
  <div className={divClassName}>
    <label>{label}</label>
    <input {...input} className="form-control" ref={input => name = input} placeholder={label} type={type}/>
    {touched && error && <span>{error}</span>}
  </div>
)

const LoginForm = (props) => {
  const { error,handleSubmit, pristine, reset, submitting } = props
  return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="email" type="email" 
                        component={renderField} label="Email"
                        validate={[required,email]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="password" type="password" 
                        component={renderField} label="Password"
                        validate={[required]}/>
                    </div>
                    {error && <span>{error}</span>}
                    <div className="row">
                        <button type="submit" className="btn btn-primary pull-right" disabled={submitting}>Login</button>
                    </div>
                </form>
            </div>            
        </div>
  )
}

export default reduxForm({
  form: 'login', // a unique identifier for this form
  onSubmit : submit
})(LoginForm)