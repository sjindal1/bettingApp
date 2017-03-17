import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {required} from './helpers/registerValidation'
import matchdataAsyncValidation from './helpers/matchdataAsyncValidation'

const renderField = ({ input, label, type, name, divClassName, meta: { touched, error, warning } }) => (
  <div className={divClassName}>
    <label>{label}</label>
    <input {...input} className="form-control" ref={input => name = input} placeholder={label} type={type}/>
    {touched && error && <span>{error}</span>}
  </div>
)

const AddMatchForm = (props) => {
  const { asyncValidating, handleSubmit, pristine, reset, submitting } = props
  return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="number" type="text" 
                        component={renderField} label="Match Number"
                        validate={[required]}/>                        
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="time" type="text" 
                        component={renderField} label="Time"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="day" type="text" 
                        component={renderField} label="Day"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="stadium" type="text" 
                        component={renderField} label="Stadium"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="team1_name" type="text" 
                        component={renderField} label="Team 1 Name"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="team1_icon" type="text" 
                        component={renderField} label="Team 1 Icon"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="team2_name" type="text" 
                        component={renderField} label="Team 2 Name"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="team2_icon" type="text" 
                        component={renderField} label="Team 2 Icon"
                        validate={[required]}/>
                    </div>
                    <div className="row">
                        <Field divClassName="col-xs-12 form-group" name="result" type="text" 
                        component={renderField} label="result"
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
  form: 'addMatchForm', // a unique identifier for this form
  asyncValidate : matchdataAsyncValidation,
  asyncBlurFields: ['number']
})(AddMatchForm)