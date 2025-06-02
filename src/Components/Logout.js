import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
