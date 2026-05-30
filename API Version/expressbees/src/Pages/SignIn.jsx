import React, { useState } from 'react';
import '../index.css';

export default function SignIn({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.password.trim()) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    alert(`Signing in with: ${formData.email}`);
    if (onNavigate) onNavigate('shop'); 
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <button 
          className="close-cart" 
          style={{ float: 'right', fontSize: '1.5rem', color: '#FF6F61' }}
          onClick={() => onNavigate && onNavigate('shop')}
        >
          ×
        </button>

        <h2 className="signin-title">ExpressBees</h2>
        <p className="signin-subtitle">Welcome back! Please sign in to your account.</p>

        {errorMessage && (
          <div className="validation-error-msg">
            ⚠️ {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="signin-form" noValidate>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="signup-redirect">
          Don't have an account? <a href="#signup">Create one</a>
        </p>
      </div>
    </div>
  );
}