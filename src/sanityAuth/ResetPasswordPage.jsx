import { useState } from 'react';
import axios from 'axios';

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleNavigation = () => {
    // Navigate to a specific page
    window.location.href = 'http://localhost:5173/sanity/dashboard/';
  };
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = new URLSearchParams(window.location.search).get('token');
      console.log(token)
      if (newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
  
      await axios.post('http://localhost:3000/reset-password', { token, newPassword });
  
      setSuccessMessage('Password reset successfully');
      handleNavigation();
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to reset password.');
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h1 className="text-3xl font-semibold mb-6 text-slate-800">Enter New Password</h1>
      {successMessage ? (
        <p className="text-green-500 mb-4">{successMessage}</p>
      ) : (
        <>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleResetPasswordSubmit}>
            <input
              type="password"
              placeholder="New Password"
              className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#329898] text-white py-2 px-4 rounded hover:bg-[#3bb5b5]"
            >
              Reset Password
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ResetPasswordPage;
