import { useState } from 'react';
import axios from 'axios';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
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

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h1 className="text-3xl font-semibold mb-6">Forgot Password</h1>
      {successMessage ? (
        <p className="text-green-500 mb-4">{successMessage}</p>
      ) : (
        <>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
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
        </>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
