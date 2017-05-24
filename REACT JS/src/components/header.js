import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderLinks() {

        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link to="/signout" className="btn btn-danger">Sign out</Link>
                </li>
            );
        } else {
            return [
                 <li className="nav-item" key={1}>
                    <Link to="/signin" className="btn btn-success">Sign in</Link>
                </li>,
                 <li className="nav-item" key={2}>
                    <Link to="/signup" className="btn btn-primary">Sign up</Link>
                </li>
            ];
               
    
        }

    }

    render() {
        return (
            <nav className="navbar navbar-light" id="header">
                <Link to="/" className="navbar-brand">Book Store</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}
export default connect(mapStateToProps)(Header);