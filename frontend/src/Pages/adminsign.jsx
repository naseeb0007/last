import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation

const AdminSign = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook to handle navigation

  const handleSubmit = () => {
    const predefinedPassword = 'W@2915djkq#';
    if (password === predefinedPassword) {
      navigate('/admin');  // Redirect to the /admin page
    } else {
      alert('Incorrect password!');  // Show alert for incorrect password
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminSign;
