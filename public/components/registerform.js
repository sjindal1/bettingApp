import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate, required, maxLength, maxLength15, password, email, uniqueEmail} from './helpers/registerValidation'
import registerAsyncValidation from './helpers/registerAsyncValidation'

const renderField = ({ input, label, type, name, divClassName, meta: { touched, error, warning } }) => (
  <div className={divClassName}>
    <label>{label}</label>
    <input {...input} className="form-control" ref={input => name = input} placeholder={label} type={type}/>
    {touched && error && <span>{error}</span>}
  </div>
)

const RegisterForm = (props) => {
  const { asyncValidating, handleSubmit, pristine, reset, submitting } = props
  return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xs-12 form-group">
                            <label>Title</label>
                            <Field name="title" className="form-control" component="select" type="select">
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss.">Miss.</option>
                            </Field>
                        </div>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-6 form-group" name="first_name" type="text" 
                        component={renderField} label="First Name"
                        validate={[required,maxLength15]}/>
                        <Field divClassName="col-xs-6 form-group" name="last_name" type="text" 
                        component={renderField} label="Last Name"
                        validate={[required,maxLength15]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="email" type="email" 
                        component={renderField} label="Email"
                        validate={[required,email]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="password" type="password" 
                        component={renderField} label="Password"
                        validate={[required,password]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="confirm_password" type="password" 
                        component={renderField} label="Confirm Password"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary pull-right" disabled={submitting}>Submit</button>
                    </div>
                </form>
            </div>            
        </div>
  )
}

export default reduxForm({
  form: 'register', // a unique identifier for this form
  validate,  
  asyncValidate : registerAsyncValidation,
  asyncBlurFields: ['email']
})(RegisterForm)