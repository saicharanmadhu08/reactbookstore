import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{

    handleFormSubmit(formProps){
        this.props.signupUser(formProps);
    }

    renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{this.props.errorMessage}
                </div>
            );
        }
    }


    render(){
        const { fields : {email, password, passwordConfirm }, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} id="signupForm">
               
                    <label>Email</label>
                    <input  type="email" className="form-control" {...email} />
                    {email.touched && email.error && <div className="error">{email.error}</div>}                    
                    <label>Password</label>
                    <input  type="password" className="form-control" {...password} />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                    <label>Confirm Password</label>
                    <input  type="password" className="form-control" {...passwordConfirm} />
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}                    
               
                {this.renderAlert()}
                <br/>
                <br/>
                <button type="submit" className="btn btn-danger">Signup</button>
            </form>
        );
    }
}

function validate(formProps){
    const errors = {};

    if(!formProps.email){
        errors.email = 'Please enter an email';
    }

    if(!formProps.password){
        errors.password = 'Please enter a password';
    }

    if(!formProps.passwordConfirm){
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if(formProps.password !== formProps.passwordConfirm){
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}

export default reduxForm({
    form:'signup',
    fields : ['email', 'password','passwordConfirm'],
    validate
},mapStateToProps, actions)(Signup);
