// Frontend code
import React, { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function SanityAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
  
      if (response.status === 200) {
        const token = response.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsLoggedIn(true);
        openSanityStudio(); // Open Sanity Studio after successful login
      }
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    delete axios.defaults.headers.common['Authorization'];
  };

  const openSanityStudio = () => {
    window.open('http://localhost:3333/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Routes>
        <Route
          path="/"
          element={<LoginPage handleLogin={handleLogin} errorMessage={errorMessage} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard handleLogout={handleLogout} openSanityStudio={openSanityStudio} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

function LoginPage({ handleLogin, errorMessage, email, setEmail, password, setPassword }) {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-semibold mb-6">Login</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

function Dashboard({ handleLogout, openSanityStudio }) {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <p>Welcome to the Sanity Studio!</p>
      <button
        onClick={openSanityStudio}
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go to Sanity Studio
      </button>
      <p>You are currently logged in.</p>
      <button
        onClick={handleLogout}
        className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default SanityAuth;
