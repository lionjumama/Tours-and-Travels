import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Captcha from 'react-captcha-code';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    captcha: ''
  });
  const [captchaCode, setCaptchaCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (captcha) => {
    setCaptchaCode(captcha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.captcha !== captchaCode) {
      return setErrorMessage('Captcha is incorrect');
    }
  
    try {
      const response = await fetch('http://localhost:2169/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Registration successful');
        navigate('/'); // Redirect to home page on success
      } else {
        setErrorMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Registration failed');
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-3/4 max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Left Side: Illustration */}
        <div className="w-1/2 p-6 bg-orange-100 rounded-l-lg flex items-center justify-center">
          <img
            src="/src/assets/images/register.png"
            alt="Illustration"
            className="w-full"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
              <Captcha onChange={handleCaptchaChange} />
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter captcha code"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Create Account
            </button>
            {errorMessage && (
              <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
            )}
            <p className="mt-4 text-center text-gray-600">
              Already have an account? <a href="/login" className="underline text-orange-500">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;





