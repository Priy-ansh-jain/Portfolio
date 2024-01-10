import React, { useState, useRef } from 'react';
import "./signup.css";
import { FaArrowRight, FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleCloseSignUp = () => {
    navigate(-1);
  };

  const handlePanelToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    // Save sign-up data to local storage
    const signUpData = { name, email, password };
    localStorage.setItem('signUpData', JSON.stringify(signUpData));

    // Optionally, you can redirect the user to the sign-in panel after sign-up
    handlePanelToggle();
  };

  const handleSignIn = () => {
    const signInEmail = emailRef.current.value;
    const signInPassword = passwordRef.current.value;

    const storedSignUpData = localStorage.getItem('signUpData');

    if (storedSignUpData) {
      const signUpData = JSON.parse(storedSignUpData);

      if (signInEmail === signUpData.email && signInPassword === signUpData.password) {
        alert('Sign In Successful!');
        // Perform additional actions for successful sign-in
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No sign-up data found. Please sign up first.');
    }
  };

  return (
    <section className='sign_page'>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <button className="toggle-button" onClick={handlePanelToggle}>
            Toggle Panel
          </button>
        </div>
        <div className="form-container sign-in-container">
          <div className='ghost1_butt'>
            <button onClick={handleCloseSignUp} className="ghost1">X</button>
          </div>
          <div>
            <div className='form__content'> 
          <form action="#">
            {isSignUp ? (
              <>
             
                <h1 id='sign_butt'>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social"><FaFacebook /></a>
                  <a href="#" className="social"><FaGooglePlus /></a>
                  <a href="#" className="social"><FaLinkedin /></a>
                </div>

                <input className="box" type="email" ref={emailRef} placeholder="Email" />
                <input className="box"  type="password" ref={passwordRef} placeholder="Password" />
                <a id='forgot' href="#">Forgot your password?</a>
                <button onClick={handleSignIn}>Sign In</button>
                <div className='butt'>
                  <p> Do you have an account ?</p>
                  <button className="right_arrow" onClick={handlePanelToggle}>
                    Sign Up
                  </button>
                </div>
            
              </>
            ) : (
              <>
                <h1 id='sign_butt'>Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social"><FaFacebook /></a>
                  <a href="#" className="social"><FaGooglePlus /></a>
                  <a href="#" className="social"><FaLinkedin /></a>
                </div>

                <input className="box"  type="text" ref={nameRef} placeholder="Name" />
                <input className="box"  type="email" ref={emailRef} placeholder="Email" />
                <input className="box"  type="password" ref={passwordRef} placeholder="Password" />
                <input className="box" type="password" ref={confirmPasswordRef} placeholder="Confirm Password" />
                <button onClick={handleSignUp}>Sign Up</button>
              </>
            )}
          </form>
          </div>
          </div>
          
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              {/* <button className="ghost" id="signUp">Sign Up</button> */}
              <div>
                <p className='to_left'>If you  have an Account Already</p>
                <button className="Left_arrow ghost" id="signUp" onClick={handlePanelToggle}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
