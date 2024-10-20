import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const SignInCard = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha()); // Assume a function to generate CAPTCHA

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== captchaCode) {
      alert('Invalid CAPTCHA code');
      return;
    }
    try {
      const response = await axios.post('/api/auth/signin', { name, email, phone });
      console.log(response.data.message);
      // Handle successful sign-in (e.g., redirect or update state)
    } catch (error) {
      console.error('Sign-in failed', error);
      // Handle errors (e.g., show error message)
    }
  };

  // Function to generate a CAPTCHA code
  const generateCaptcha = () => {
    // You can use a library or a custom function to generate CAPTCHA
    return Math.random().toString(36).substring(2, 7).toUpperCase(); // Simple example
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center relative">
        <h3 className="text-lg font-semibold mb-4">Sign In</h3>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-700">
          <FaTimes className="h-6 w-6" />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full mb-2 p-2 border rounded-md"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded-md"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full mb-2 p-2 border rounded-md"
            required
          />
          <div className="mb-4">
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Enter CAPTCHA"
              className="w-full p-2 border rounded-md"
              required
            />
            <div className="mt-2 text-gray-700 bg-gray-200 p-2 rounded-md">
              {captchaCode} {/* Display CAPTCHA code to the user */}
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;


