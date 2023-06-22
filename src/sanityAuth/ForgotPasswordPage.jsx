import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ForgotPasswordPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/forgot-password', { email });
      setSuccessMessage('Password reset instructions sent to your email address.');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to initiate password reset process.');
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/reset-password', { token, newPassword });
      setSuccessMessage('Password reset successfully');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to reset password.');
    }
  };

  useEffect(() => {
    // You can perform additional actions here if needed
    // For example, you can check if the token is valid or has expired
    // You can also redirect the user to a different page if the token is invalid or expired
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h1 className="text-3xl font-semibold mb-6">Forgot Password</h1>
      {successMessage ? (
        <p className="text-green-500 mb-4">{successMessage}</p>
      ) : (
        <>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          {token ? (
            <form onSubmit={handleResetPasswordSubmit}>
              <input
                type="password"
                placeholder="New Password"
                className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#329898] text-white py-2 px-4 rounded hover:bg-[#3bb5b5]"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <form onSubmit={handleForgotPasswordSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#329898] text-white py-2 px-4 rounded hover:bg-[#3bb5b5]"
              >
                Forget Password
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
