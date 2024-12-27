import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();  // Retrieve the user ID from the URL parameters
  const [user, setUser] = useState({});  // State to store user data
  const [isEditing, setIsEditing] = useState(false);  // Toggle for editing mode
  const [formData, setFormData] = useState({});  // State to store form data

  // Fetch user data from the backend when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/edit/${id}`);
        const data = await response.json();
        setUser(data);  // Set user data to state
        setFormData(data);  // Set form data to state
      } catch (err) {
        console.error('Error fetching user data:', err);  // Handle any errors
      }
    };
    fetchUser();
  }, [id]);  // Re-fetch user data if the `id` changes

  // Handle input change for the form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save the edited user data
  const saveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:5000/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const updatedUser = await response.json();  // Get the updated user data
      setUser(updatedUser);  // Update the state with the new user data
      setIsEditing(false);  // Exit editing mode
    } catch (err) {
      console.error('Error saving changes:', err);  // Handle any errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Welcome, {user.name || 'User'} {/* Display user name */}
        </h1>

        {isEditing ? (
          // If editing, show input fields
          <div className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={saveChanges}
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        ) : (
          // If not editing, show user details
          <div className="space-y-4">
            <p>
              <h1>Name:</h1> {user.name}
            </p>
            <p>
              <h1>Phone:</h1> {user.phone}
            </p>
            <p>
              <h1>Date of Birth:</h1> {user.dob}
            </p>
            <p>
              <h1>Address:</h1> {user.address}
            </p>
            <button
              onClick={() => setIsEditing(true)}  // Switch to editing mode
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;




