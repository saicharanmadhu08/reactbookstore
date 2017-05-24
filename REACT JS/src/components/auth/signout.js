import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component{

    componentWillMount(){
        this.props.signoutUser();
    }

    render(){
        return <div id="signOut">
            <p className="alert alert-success">You Loggedout successfull !!</p>
            <p className="alert alert-warning">Please visit again !!</p>
            <p className="alert alert-primary">THANK YOU</p>
        </div>;
    }
}

export default connect(null, actions)(Signout);

