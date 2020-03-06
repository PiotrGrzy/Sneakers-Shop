import React from 'react';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import './signin-signup.scss';

const SigninSignupPage = () => {
  return (
    <div className="signin-signup">
      <Signup />
      <Signin />
    </div>
  );
};

export default SigninSignupPage;
