<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted');
  };
=======
import React from "react";
>>>>>>> 6cf7c2b (changes)

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your details
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
=======
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-purple-600">
          <img
            src="/placeholder.svg"
            alt="Authentication background"
            className="block dark:hidden object-cover"
          />
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-left">
            <img
              src="/placeholder.svg"
              alt="Logo"
              className="mb-4"
              style={{ width: 40, height: 40 }}
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details to get started
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                placeholder="John Doe"
                type="text"
                autoCapitalize="words"
                autoComplete="name"
                autoCorrect="off"
                className="input"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                placeholder="name@example.com"
>>>>>>> 6cf7c2b (changes)
                type="email"
                autoComplete="email"
<<<<<<< HEAD
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in
            </button>
=======
                autoCorrect="off"
                className="input"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="input" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input id="confirm-password" type="password" className="input" />
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 button">
            Sign up
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 button-outline"
          >
            <img
              src="/placeholder.svg"
              alt="Google"
              className="h-5 w-5"
              style={{ width: 20, height: 20 }}
            />
            Sign up with Google
          </button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-purple-600 hover:text-purple-500"
            >
              Sign in
            </a>
>>>>>>> 6cf7c2b (changes)
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-purple-600 hover:text-purple-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 6cf7c2b (changes)
