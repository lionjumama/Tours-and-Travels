import React, { useState } from 'react';
import Captcha from 'react-captcha-code';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [captchaCode, setCaptchaCode] = useState('');

  const handleCaptchaChange = (captcha) => {
    setCaptchaCode(captcha);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              <FaUser className="inline mr-2 text-blue-600" /> User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              <FaLock className="inline mr-2 text-blue-600" /> Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="captcha">
              Captcha
            </label>
            <Captcha onChange={handleCaptchaChange} />
            <input
              type="text"
              id="captcha"
              className="w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter captcha code"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Sign In
          </button>
          <p className="mt-4 text-center text-black">
            If you don't have an account, click <a href="/register" className="underline text-blue-600">Register Now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;


