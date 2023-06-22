import React,{useState} from 'react'
import axios from 'axios';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  
  const handleNavigation = () => {
    // Navigate to a specific page
    window.location.href = 'http://localhost:5173/sanity/dashboard/';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        firstName,
        lastName,
        email,
        password,
        role,
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setRole('');
      handleNavigation();

      console.log(response.data.message); // Log the response message
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-slate-800">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 rounded border border-[#3bb5b5]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 rounded border border-[#3bb5b5]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded border border-[#3bb5b5]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border border-[#3bb5b5]"
              required
            />
          </div>
          <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                </label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-[#3bb5b5]"
                    required
                >
                    <option value="super-admin">super-admin</option>
                    <option value="sub-admin">sub-admin</option>
                </select>
        </div>

          <button
            type="submit"
            className="w-full bg-[#329898] text-white py-2 px-4 rounded hover:bg-[#3bb5b5]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
