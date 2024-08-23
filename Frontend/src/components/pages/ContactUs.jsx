import React, { useState } from 'react';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, issue }),
      });
      if (response.ok) {
        alert('Your message has been sent successfully!');
        setEmail('');
        setIssue('');
      } else {
        alert('There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <main className="bg-black min-h-screen py-16 px-4">
      <section className="max-w-4xl mx-auto">
        <div className="bg-yellow-200 text-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Your Gmail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="issue" className="block text-lg font-medium mb-2">Describe Your Issue:</label>
              <textarea
                id="issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-black transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
