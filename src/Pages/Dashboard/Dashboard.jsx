import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserAlt, FaTachometerAlt, FaTasks, FaBell, FaCogs } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <FaTachometerAlt className="text-5xl text-gray-600 mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-lg text-gray-500">Manage your tasks, profile, and settings</p>
        </div>

        {/* User Info Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 flex items-center">
          <FaUserAlt className="text-4xl text-gray-600 mr-6" />
          <div>
            <h2 className="text-xl font-medium text-gray-800">Welcome, {user ? user.name : 'Guest'}!</h2>
            <p className="text-gray-400">{user ? user.email : 'No email available'}</p>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Management */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <FaTasks className="text-3xl text-gray-600 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800">Manage Tasks</h3>
            </div>
            <p className="text-gray-500">Create, view, and manage your tasks here.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
            Comming Soon..!
            </button>
          </div>

         
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <FaBell className="text-3xl text-gray-600 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
            </div>
            <p className="text-gray-500">Stay updated with the latest notifications.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
            Comming Soon..!
            </button>
          </div>

          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <FaCogs className="text-3xl text-gray-600 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800">Settings</h3>
            </div>
            <p className="text-gray-500">Update your profile, preferences, and more.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
              Comming Soon..!
            </button>
          </div>
        </div>

      
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2025 Dashboard. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
