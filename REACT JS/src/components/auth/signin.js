import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger" >
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { fields: { email, password }, handleSubmit } = this.props;
        return (
            <div id="signinForm">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                    <label>Email</label>
                    <input type="email" className="form-control" {...email} />

                    <label>Password</label>
                    <input type="password" className="form-control" {...password} />

                    {this.renderAlert()}

                    <br/>
                    <br/>
                    <button type="submit" className="btn btn-danger">Signin</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
