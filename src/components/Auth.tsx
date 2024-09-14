import React, { useState } from 'react';
import './Auth.css';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // To switch between Login and Sign Up
  const [loginData, setLoginData] = useState({ name: '', phone: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', phone: '', otp: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false); // Track if OTP has been sent

  // Handle form submissions (login and sign-up)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(loginData.phone)) {
      setError('Invalid phone number');
      return;
    }
    setError(null);
    console.log('Login Data: ', loginData);
    // Add logic to authenticate login
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(signUpData.phone)) {
      setError('Invalid phone number');
      return;
    }
    if (!isOtpSent) {
      setError('Please send OTP first');
      return;
    }
    setError(null);
    console.log('Sign Up Data: ', signUpData);
    // Add logic to handle sign-up
  };

  const handleSendOtp = () => {
    if (!validatePhone(signUpData.phone)) {
      setError('Invalid phone number');
      return;
    }
    // Add logic to send OTP
    console.log('Sending OTP to:', signUpData.phone);
    setIsOtpSent(true);
    setError(null);
    // Example: Simulate OTP sent success
    alert('OTP has been sent!');
  };

  const validatePhone = (phone: string) => {
    return /^[0-9]{10}$/.test(phone); // Simple validation for a 10-digit phone number
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="auth-panel">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="loginName">Name</label>
            <input
              id="loginName"
              type="text"
              placeholder="Your Name"
              value={loginData.name}
              onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
              required
            />
            <label htmlFor="loginPhone">Phone Number</label>
            <input
              id="loginPhone"
              type="tel"
              placeholder="Phone Number"
              value={loginData.phone}
              onChange={(e) => setLoginData({ ...loginData, phone: e.target.value })}
              required
              pattern="[0-9]{10}" // Simple validation pattern for 10-digit phone number
            />
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="switch-text">
            Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span>
          </p>
        </div>
      ) : (
        <div className="auth-panel">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="signupName">Name</label>
            <input
              id="signupName"
              type="text"
              placeholder="Your Name"
              value={signUpData.name}
              onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
              required
            />
            <label htmlFor="signupPhone">Phone Number</label>
            <input
              id="signupPhone"
              type="tel"
              placeholder="Phone Number"
              value={signUpData.phone}
              onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
              required
              pattern="[0-9]{10}" // Simple validation pattern for 10-digit phone number
            />
            <button type="button" onClick={handleSendOtp} disabled={isOtpSent}>
              {isOtpSent ? 'OTP Sent' : 'Send OTP'}
            </button>
            <label htmlFor="signupOtp">Enter OTP</label>
            <input
              id="signupOtp"
              type="text"
              placeholder="Enter OTP"
              value={signUpData.otp}
              onChange={(e) => setSignUpData({ ...signUpData, otp: e.target.value })}
              required
              disabled={!isOtpSent} // Disable OTP input until OTP is sent
            />
            <label htmlFor="signupPassword">Set Password</label>
            <input
              id="signupPassword"
              type="password"
              placeholder="Set Password"
              value={signUpData.password}
              onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p className="switch-text">
            Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
