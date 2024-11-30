import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here
    console.log(isLogin ? 'Login submitted' : 'Signup submitted', formData);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container grid-layout">
      <div className="background-section">
        <div className="background-image">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Authentication background"
          />
        </div>
      </div>
      <div className="form-section">
        <div className="form-container">
          <div className="header">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              className="logo"
            />
            <h1 className="title">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="subtitle">
              {isLogin ? 'Please enter your details' : 'Enter your details to get started'}
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="input"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            )}
            {isLogin && (
              <div className="checkbox-group">
                <div className="checkbox-label">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="checkbox"
                  />
                  <label htmlFor="remember-me" className="label">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="forgot-password">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="submit-button"
            >
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="divider">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <button
            type="button"
            className="google-button"
          >
            <img
              src="/placeholder.svg?height=20&width=20"
              alt="Google"
              className="google-icon"
            />
            Sign {isLogin ? 'in' : 'up'} with Google
          </button>
          <div className="toggle-mode">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={toggleMode}
                className="toggle-button"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

