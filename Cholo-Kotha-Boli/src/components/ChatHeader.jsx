import React from "react";
import { useChatStore } from "../store/useChatStore.js";
import { useAuthStore } from "../store/useAuthStore";
import { XCircle } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  if (!selectedUser) return null;

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-cyan-100 via-purple-200 to-cyan-100 text-cyan-800 px-4 py-3 border-b border-cyan-200 rounded-t-lg shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={selectedUser.profilePic || "/avatar.jpg"}
          alt={selectedUser.fullName}
          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-300 shadow"
        />
        <div>
          <h2 className="font-semibold text-cyan-800 text-lg">
            {selectedUser.fullName}
          </h2>
          <p
            className={`text-sm font-medium tracking-wide ${
              isOnline ? "text-green-500" : "text-cyan-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="text-red-400 hover:text-red-500 transition-colors duration-200"
        title="Close Chat"
      >
        <XCircle size={24} />
      </button>
    </div>
  );
};

export default ChatHeader;
