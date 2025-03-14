import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth'; // There are many styles for the signIn method
import { useNavigate } from 'react-router-dom'; // Allows for redirect to another page

function Login({ setIsAuth }) {

    let navigate = useNavigate(); // set variable to redirect to another page

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/'); // Redirect to home page
        });
    };

    return (
        <div className='loginPage'>
            <p>Sign in with Google to Continue!</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google!</button>
        </div>
    );
}

export default Login;