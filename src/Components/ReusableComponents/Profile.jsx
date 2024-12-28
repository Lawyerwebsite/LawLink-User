import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from "react-icons/md";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    dist: '',
    pincode: '',
    profileImage: '', 
  });

  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 

  // Fetch profile data
  useEffect(() => {
    axios
      .get('http://localhost:7000/user/profile')
      .then(response => setFormData(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (file) data.append('profileImage', file);

    axios
      .put('http://localhost:7000/user/profile', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        
        setFormData(response.data.data); 
        setIsEditing(false); 
      })
      .catch(error => console.error('Error saving profile data:', error));
  };

  return (
    <div className="p-5 font-sans ">
      <h1 className="text-center text-lg font-serif font-bold text-blue-500">Profile</h1>

  
      <div className="flex flex-col items-center mb-5">
      
        <div className="relative">
        <img
  src={formData.profileImage ? `http://localhost:7000${formData.profileImage}` : 'https://via.placeholder.com/150'}
  alt="Profile"
  className="w-24 h-24 rounded-full border"
/>

          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer">
              <MdEdit className="text-blue-500" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Profile Name and Location */}
        <div className="text-center mt-3 ">
          <h2 className="text-xl font-semibold">{formData.name || 'Name'}</h2>
          <h3 className="text-gray-500 text-lg">India</h3>
        </div>
      </div>

      {/* Form and Buttons */}
      <div className="border border-gray-400 shadow-lg p-4 rounded max-w md-w mx-auto bg-white ">
        <h2 className="text-lg font-serif text-blue-500 mb-4 text-center">Personal Information</h2>

        {isEditing ? (
          <form className="grid grid-cols-3 gap-5 " onSubmit={handleSave}>
            {['name', 'email', 'mobile', 'address', 'dist', 'pincode'].map(field => (
              <label key={field} className="flex flex-col">
                <span className="mb-1 font-medium capitalize">{field}:</span>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </label>
            ))}

            {/* Save Button Section */}
            <div className="mt-5">
              <button
                type="submit"
                className="w-full px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-5 text-center grid grid-cols-3 gap-5">
            <div className='p-3'>
            <p><strong>Email:</strong> {formData.email || 'Not provided'}</p></div>
            <p><strong>Mobile:</strong> {formData.mobile || 'Not provided'}</p>
            <p><strong>Address:</strong> {formData.address || 'Not provided'}</p>
            <p><strong>District:</strong> {formData.dist || 'Not provided'}</p>
            <p><strong>Pincode:</strong> {formData.pincode || 'Not provided'}</p>

            {/* Edit Section */}
            <div className="flex justify-center mt-5">
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;






