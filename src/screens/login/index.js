import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from './loginActions';

const LogIn = (props) => {
    const { logIn } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        
        logIn({ email: 'sogolonmd@gmail.com', password: 'sha256' });
    }

    // console.log('*** LogIn.account', account);

    return (
        <div className="container h-100 pt-5">
            <h1>Log In</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={ submitHandler }>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div> 
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Don't have an account?</div>
                    <Link to='/sign-up'>Sign Up</Link>
                </div>  
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { account: state.logIn.account };
};

export default connect(mapStateToProps, {logIn})(LogIn);