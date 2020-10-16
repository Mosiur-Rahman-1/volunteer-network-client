import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LogIn.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';

const LogIn = () => {
    // Removing duplicate error
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var {displayName, email} = result.user;
            const signedUser = {name: displayName, email};
            setSignedInUser(signedUser);
            history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <div className= 'row mt-5 pt-5'>
            <div className="card m-auto">
                <div className="card-body">
                    <h5 className="card-title mb-4">Login with {signedInUser.name}</h5>
                    <button onClick = {handleGoogleSignIn} className="btn btn-primary mb-2">Continue with Google</button>
                    <p className="card-text">Don't have an account? <Link to = '/registration'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;