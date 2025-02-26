// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { MdEdit } from "react-icons/md";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const EditProfile = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     address: "",
//     dist: "",
//     pincode: "",
//     profileImage: "",
//   });
//   const { _id } = useParams();
//   const [file, setFile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:7000/user/profile`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => setFormData(response.data))
//       .catch((error) => console.error("Error fetching profile data:", error));
//   }, [_id]);
//   console.log(formData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     if (file) data.append("profileImage", file);

//     axios
//       .put("http://localhost:7000/user/profile/update", data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         setFormData(response.data.data);
//         toast.success(response.data.message);
//         setIsEditing(false);
//       })
//       .catch((error) => console.error("Error saving profile data:", error));
//   };

//   return (
//     <div className="p-5 font-sans ">
//       <h1 className="text-center text-lg font-serif font-bold text-blue-500">
//         Profile
//       </h1>

//       <div className="flex flex-col items-center mb-5">
//         <div className="relative">
//           <img
//             src={`http://localhost:7000/upload/${formData.profileImage}`}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border"
//           />

//           {isEditing && (
//             <label className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer">
//               <MdEdit className="text-blue-500" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//             </label>
//           )}
//         </div>

//         {/* Profile Name and Location */}
//         <div className="text-center mt-3 ">
//           <h2 className="text-xl font-semibold">{formData.name || "Name"}</h2>
//           <h3 className="text-gray-500 text-lg">India</h3>
//         </div>
//       </div>

//       {/* Form and Buttons */}
//       <div className="border border-gray-400 shadow-lg p-4 rounded max-w md-w mx-auto bg-white ">
//         <h2 className="text-lg font-serif text-blue-500 mb-4 text-center">
//           Personal Information
//         </h2>

//         {isEditing ? (
//           <form className="grid grid-cols-3 gap-5 " onSubmit={handleSave}>
//             {["name", "email", "mobile", "address", "dist", "pincode"].map(
//               (field) => (
//                 <label key={field} className="flex flex-col">
//                   <span className="mb-1 font-medium capitalize">{field}:</span>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className="p-2 border rounded"
//                   />
//                 </label>
//               )
//             )}

//             {/* Save Button Section */}
//             <div className="mt-5">
//               <button
//                 type="submit"
//                 className="w-full px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="space-y-5 text-center grid grid-cols-3 gap-5">
//             <div className="p-3">
//               <p>
//                 <strong>Email:</strong> {formData.email}
//               </p>
//             </div>
//             <p>
//               <strong>Mobile:</strong> {formData.mobile}
//             </p>
//             <p>
//               <strong>Address:</strong> {formData.address}
//             </p>
//             <p>
//               <strong>District:</strong> {formData.dist}
//             </p>
//             <p>
//               <strong>Pincode:</strong> {formData.pincode}
//             </p>

//             {/* Edit Section */}
//             <div className="flex justify-center mt-5">
//               <button
//                 className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={handleEdit}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditProfile;

import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  // const userId = localStorage.getItem(userId);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    dist: "",
    pincode: "",
    profileImage: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://lawyer-backend-production.up.railway.app/user/profile`,{
        headers: {
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in user) {
      formData.append(key, user[key]);
    }

    if (image) {
      formData.append("profileImage", image);
    }

    try {
      await axios.put(`https://lawyer-backend-production.up.railway.app/user/profile/update`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        User Profile
      </h2>

      <div className="flex justify-center">
        <img
          src={`https://lawyer-backend-production.up.railway.app/upload/${user.profileImage}`}
          alt="Profile"
          className="w-24 h-24 rounded-full mt-4"
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="dist"
          value={user.dist}
          onChange={handleChange}
          placeholder="District"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="pincode"
          value={user.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
