export const validate = values => {
    const errors ={}
    if(values && (values.password !== values.confirm_password)){
        errors.confirm_password = "Passwords don't match";
    }
    return errors
}

export const required = value => value ? undefined : 'Required';
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const password = value =>
    value && (value.length < 8 || value.length > 15) ? 
    "Password must be between 8 and 15 characters" : undefined