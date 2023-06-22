// Frontend code
import React, { useState,useEffect } from 'react';
import { Route, Routes, Navigate,useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserCog } from 'react-icons/fa';
import {FcHome,FcFeedback} from 'react-icons/fc';

function SanityAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await axios.get('http://localhost:3000/admins', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setAdmins(response.data.admins);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching admins');
      }
    };
  
    fetchAdmins();
  }, []);
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
    
      if (response.status === 200) {
        const token = response.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
        try {
          // Fetch the user's role from the server
          const roleResponse = await axios.get('http://localhost:3000/user/role');
    
          if (roleResponse.status === 200) {
            const role = roleResponse.data.role; // Extract the role from roleResponse.data
            localStorage.setItem('token', token); // Store the token in local storage
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            // Check the user's role and navigate accordingly
            if (role === 'super-admin') {
              navigate('dashboard');
            } else if (role === 'sub-admin') {
              openSanityStudio();
            }
            setIsLoggedIn(true);
            
          }
        } catch (error) {
          console.error(error);
          setErrorMessage('An error occurred while fetching user role');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid credentials');
    }
    
  };
  


  const handleLogout = () => {
    setIsLoggedIn(false);
    delete axios.defaults.headers.common['Authorization'];
  };

  const openSanityStudio = () => {
    window.open('http://localhost:3333/','_blank');
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
              <Dashboard handleLogout={handleLogout} openSanityStudio={openSanityStudio} admins = {admins} setAdmins={setAdmins}/>
            ) : (
              <Navigate to="/sanity" replace />
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
          className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 rounded border border-[#3bb5b5]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-[#329898] text-white py-2 px-4 rounded hover:bg-[#3bb5b5]"
        >
          Login
        </button>
      </form>
      <p className="text-[#329898] mt-4 text-center">
      <Link to="/forgot-password">Forgot Password?</Link>
    </p>
    </div>
  );
}

  function Dashboard({ handleLogout, openSanityStudio ,admins,setAdmins}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedAdmin, setEditedAdmin] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);

  const handleDelete = (admin) => {
    setAdminToDelete(admin);
    setShowDeleteModal(true);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setAdminToDelete(null);
  };

  const openModal = (admin) => {
    setEditedAdmin(admin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditedAdmin(null);
    setIsModalOpen(false);
  };

  const handleEdit = (adminId) => {
    const admin = admins.find((admin) => admin._id === adminId);
    if (admin) {
      openModal(admin);
    }
  };

  const confirmDelete = async () => {
    if (adminToDelete && adminToDelete.firstName) {
      try {
        // Make a request to delete the admin with the provided adminId
        await axios.delete(`http://localhost:3000/admins/${adminToDelete._id}`);

        // Update the admins state by removing the deleted admin
        setAdmins(admins.filter((admin) => admin._id !== adminToDelete._id));
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while deleting the admin');
      } finally {
        setShowDeleteModal(false);
        setAdminToDelete(null);
      }
    }
  };

  // Function to save the edited admin to the database
  const saveEditedAdmin = async () => {
    try {
      // Make a request to update the admin in the database
      await axios.put(`http://localhost:3000/admins/${editedAdmin._id}`, editedAdmin);

      // Update the admins state with the edited admin
      setAdmins(admins.map((admin) => (admin._id === editedAdmin._id ? editedAdmin : admin)));

      closeModal();
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while saving the edited admin');
    }
  };
    return (
      <div className="min-h-screen flex flex-col bg-[#f2f3f5]">
        <header className="py-4 px-8 bg-[#1f2937] shadow-md fixed top-0 left-0 right-0">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-slate-200">Admin Dashboard</h1>
            <button 
            onClick={()=>navigate('/create-account')}
            className='  px-4 py-2 text-sm font-medium text-white bg-[#329898] hover:bg-[#3bb5b5] rounded ml-[800px]'>
              Create Account
              </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#329898] hover:bg-[#3bb5b5] rounded"
            >
              Logout
            </button>
          </div>
        </header>
        <main className="flex-grow flex flex-col lg:flex-row ">
          <aside className="w-full lg:w-1/4 bg-[#1f2937] p-4 fixed top-[64px] bottom-0 ">
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={openSanityStudio}
                    className="flex items-center justify-between  px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:border-b-4 hover:border-red-500 hover:text-white w-full"
                  >
                    <span className="text-lg">
                      <FaUserCog />
                    </span>
                    <span className='text-md font-bold absolute left-16'>Go to CMS Studio</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={()=>navigate('/')}
                    className="flex items-center justify-between  px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:border-b-4 hover:border-purple-500 hover:text-white w-full"
                  >
                    <span className="text-lg">
                      <FcHome />
                    </span>
                    <span className='text-md font-bold absolute left-16'>Go to Home Page</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={()=>navigate('/feed-back')}
                    className="flex items-center justify-between  px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:border-b-4 hover:border-blue-400 hover:text-white w-full"
                  >
                    <span className="text-lg">
                      <FcFeedback />
                    </span>
                    <span className='text-md font-bold absolute left-16'>See Feedbacks</span>
                  </button>
                </li>
                
              </ul>
            </nav>
          </aside>
          <section className="flex-grow p-8 ml-[25%] mt-16">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8  border-[#329898] border-b-4">
              <div className="col-span-1 md:col-span-1">
                <h1 className="font-semibold text-slate-600 text-xl">FirstName</h1>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h1 className="font-semibold text-slate-600 text-xl">LastName</h1>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h1 className="font-semibold text-slate-600 text-xl">Email</h1>
              </div >
              <div className="col-span-1 md:col-span-1">
                <h1 className="font-semibold text-slate-600 text-xl">Password</h1>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h1 className="font-semibold text-slate-600 text-xl">Role</h1>
              </div>
              <div className="col-span-1 md:col-span-1 font-semibold text-slate-600 text-xl">
                <h1>Actions</h1>
              </div>
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-4">
            { 
                admins.length === 0 ? (
                  <p>No admins found.</p>
            ):(
              admins.map((admin) => (
                <React.Fragment key={admin._id}>
                  <div>
                    <h1>{admin.firstName}</h1>
                  </div>
                  <div>
                    <h1>{admin.lastName}</h1>
                  </div>
                  <div>
                    <h1>{admin.email}</h1>
                  </div>
                  <div>
                    <h1 className='ml-10'>*******</h1>
                  </div>
                  <div>
                    <h1>{admin.role}</h1>
                  </div>
                  <div className='flex'>
                    <button onClick={() => handleEdit(admin._id)}
                    className="bg-[#3bb5b5] hover:bg-[#3bb5b5] text-white font-bold py-2 px-4 rounded mr-2">
                      Edit
                      </button>
                      <button
                        onClick={() => handleDelete(admin)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                  </div>
                </React.Fragment>
              ))
            )
            }
            </div>
          </section>
          {/* Render the ConfirmDeleteModal if showDeleteModal is true */}
      {showDeleteModal && (
        <ConfirmDeleteModal
          admin={adminToDelete}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
          {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-10  ml-[50vh]">
            <div className="bg-white p-8 shadow-lg rounded flex flex-col">
              <h2 className="text-2xl mb-4">Edit Admin</h2>
              <input
                type="text"
                placeholder="First Name"
                className="mb-2"
                value={editedAdmin.firstName}
                onChange={(e) => setEditedAdmin({ ...editedAdmin, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mb-2"
                value={editedAdmin.lastName}
                onChange={(e) => setEditedAdmin({ ...editedAdmin, lastName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                className="mb-2"
                value={editedAdmin.email}
                onChange={(e) => setEditedAdmin({ ...editedAdmin, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2"
                value={editedAdmin.password}
                onChange={(e) => setEditedAdmin({ ...editedAdmin, password: e.target.value })}
              />
              <select
                type="text"
                placeholder="Role"
                className="mb-4"
                value={editedAdmin.role}
                onChange={(e) => setEditedAdmin({ ...editedAdmin, role: e.target.value })}
              >
                <option value="super-admin">super-admin</option>
                    <option value="sub-admin">sub-admin</option>
              </select>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEditedAdmin}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        </main>
        
      
      </div>
    );
  }

  //confirmation modal
  
  const ConfirmDeleteModal = ({ admin, onCancel, onConfirm }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white p-8 shadow-lg rounded">
          <h2 className="text-2xl mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete {admin.firstName}?</p>
          <div className="flex justify-end mt-6">
            <button
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  



export default SanityAuth;
