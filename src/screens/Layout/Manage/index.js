import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOut } from '../../../actions/AccountActions';

const Layout = ({ children, logOut, account }) => {

    if (!account) {
        return <Redirect to="/log-in" />;
    };

    const logOutHandler = (e) => {
        e.preventDefault();
        logOut();
    };
    
    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        <span>BACK</span>
                    </div>
                    <div className="text-center">
                        <strong>Links</strong>
                    </div>
                    <div>
                        <button className="btn btn-clear" onClick={ logOutHandler }>Exit</button>
                    </div>
                </div>
            </nav>
            <div className="container">{ children }</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { account: state.account.account };
};

export default connect(mapStateToProps, { logOut })(Layout);