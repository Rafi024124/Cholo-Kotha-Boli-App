import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 py-12">
      <div className="w-full max-w-md bg-gradient-to-b from-cyan-200 via-purple-200 to-cyan-200 text-cyan-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-800 drop-shadow-md text-center">
          Profile
        </h2>

        <div className="relative w-32 h-32 mb-4 mx-auto">
          <img
            src={selectedImg || authUser?.profilePic || "/avatar.jpg"}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-800 shadow-[0_0_10px_rgba(22,214,198,0.7)]"
          />
          <label
            htmlFor="profilePic"
            className={`absolute bottom-1 right-1 bg-cyan-600 hover:bg-cyan-700 p-2 rounded-full cursor-pointer shadow-lg transition-colors ${
              isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
            }`}
            title="Change Profile Picture"
          >
            <Camera className="w-5 h-5 text-cyan-800 drop-shadow-sm" />
          </label>
          <input
            id="profilePic"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <p className="text-sm text-cyan-800 mb-6 italic text-center">
          {isUpdatingProfile
            ? "Uploading..."
            : "Click the camera icon to update your photo"}
        </p>

        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-cyan-800 text-sm mb-1 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              readOnly
              value={authUser?.fullName || ""}
              className="w-full px-4 py-2 rounded-lg bg-cyan-900 text-cyan-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-md"
            />
          </div>
          <div>
            <label className="block text-cyan-800 text-sm mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              readOnly
              value={authUser?.email || ""}
              className="w-full px-4 py-2 rounded-lg bg-cyan-800 text-cyan-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-md"
            />
          </div>
        </div>

        <div className="w-full border-t border-cyan-800 my-6" />

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-800 mb-2 drop-shadow-sm">
            Account Information
          </h3>
          <p className="text-sm text-cyan-800">
            <span className="font-semibold text-cyan-800">Member Since:</span>{" "}
            {formatDate(authUser?.createdAt)}
          </p>
          <p className="text-sm text-cyan-300">
            <span className="font-semibold text-cyan-800">Account Status:</span>{" "}
            <span className="font-semibold text-green-500">Active</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
